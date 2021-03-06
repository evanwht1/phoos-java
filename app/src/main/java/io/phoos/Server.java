package io.phoos;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.javalin.Javalin;
import io.javalin.http.NotFoundResponse;
import io.javalin.http.staticfiles.Location;
import io.javalin.plugin.json.JavalinJackson;
import io.phoos.event.EventsHandler;
import io.phoos.game.GamesHandler;
import io.phoos.player.PlayersHandler;
import io.phoos.standings.StandingsHandler;
import org.aeonbits.owner.ConfigFactory;

import java.sql.SQLException;

import static io.javalin.apibuilder.ApiBuilder.delete;
import static io.javalin.apibuilder.ApiBuilder.get;
import static io.javalin.apibuilder.ApiBuilder.path;
import static io.javalin.apibuilder.ApiBuilder.post;
import static io.javalin.apibuilder.ApiBuilder.put;
import static io.phoos.api.JsonApiBuilder.deleteJSON;
import static io.phoos.api.JsonApiBuilder.getJSON;
import static io.phoos.api.JsonApiBuilder.postJSON;
import static io.phoos.api.JsonApiBuilder.putJSON;

/**
 * @author evanwht1@gmail.com
 */
public class Server {

	private static final ObjectMapper objectMapper = new ObjectMapper();

	public static void main(String[] args) {
		final DB db;
		try {
			db = new DB(ConfigFactory.create(DBProperties.class));
		} catch (SQLException e) {
			throw new RuntimeException("Could not connect to DB", e);
		}

		Javalin app = Javalin.create(c -> {
			c.enableCorsForAllOrigins();
			c.addStaticFiles("/games", "public/", Location.CLASSPATH);
			c.addStaticFiles("/standings", "public/", Location.CLASSPATH);
			c.addStaticFiles("public/", Location.CLASSPATH);
		});

		JavalinJackson.configure(objectMapper);

		initPlayersAPI(db, app);
		initStandingsAPI(db, app);
		initGamesAPI(db, app);
		initAdminAPI(db, app);
		app.get("refresh_db", db::refresh);

		app.exception(NotFoundResponse.class, (e, ctx) -> {
			ctx.status(404);
			ctx.result(e.getMessage());
		});
		app.exception(SQLException.class, (e, ctx) -> {
			ctx.status(500);
			ctx.result(e.getMessage());
		});

		app.start(ConfigFactory.create(ServerProperties.class).port());

		Runtime.getRuntime().addShutdownHook(new Thread(app::stop));
	}

	private static void initStandingsAPI(final DB db, final Javalin app) {
		final StandingsHandler standingsHandler = new StandingsHandler(db);
		app.routes(() -> {
			path("api/standings", () -> {
				getJSON(standingsHandler::getAll);
			});
		});
	}

	private static void initAdminAPI(final DB db, final Javalin app) {
		final EventsHandler eventsHandler = new EventsHandler(db);
		app.routes(() -> {
			path("api/events", () -> {
				get(eventsHandler::getAll);
				post(eventsHandler::post);
				path(":id", () -> {
					get(eventsHandler::get);
					put(eventsHandler::put);
					delete(eventsHandler::delete);
				});
			});
		});
	}

	private static void initPlayersAPI(final DB db, final Javalin app) {
		final PlayersHandler playersHandler = new PlayersHandler(db);
		app.routes(() -> {
			path("api/players", () -> {
				getJSON(playersHandler::getAll);
				postJSON(playersHandler::create, playersHandler::newPlayer);
				path(":id", () -> {
					getJSON(playersHandler::get, playersHandler::idPathParam);
					putJSON(playersHandler::update, playersHandler::playerUpdates);
					deleteJSON(playersHandler::delete, playersHandler::idPathParam);
				});
			});
		});
	}

	private static void initGamesAPI(final DB db, final Javalin app) {
		final GamesHandler gamesHandler = new GamesHandler(db);
		app.routes(() -> {
			path("api/games", () -> {
				getJSON(gamesHandler::getAll);
				postJSON(gamesHandler::post, gamesHandler::newGame);
				path(":id", () -> {
					getJSON(gamesHandler::get, gamesHandler::idPathParam);
					putJSON(gamesHandler::put, gamesHandler::gameUpdates);
					deleteJSON(gamesHandler::delete, gamesHandler::idPathParam);
				});
			});
		});
	}
}
