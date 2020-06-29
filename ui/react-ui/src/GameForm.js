import React, { Component } from "react";


export class GameForm extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div id="scores" class="col-8 undernav mx-auto">
                        <div class="pb-4">
                            <h3>New Game</h3>
                        </div>
                        <form class="container boxed needs-validation" method="POST" action="api/games" id="game_input_form" novalidate>
                            <div class="form-group pt-3" id="choosePlayers">
                                <h4>Starting Positions</h4>
                                <div class="d-md-block d-sm-none d-none">
                                    <div class="row pad">
                                        <div class="col-2"></div>
                                        <div class="col">Defense</div>
                                        <div class="col">Offense</div>
                                    </div>
                                </div>
                                <div class="form-group form-row" id="team_1">
                                    <label class="col">Team 1</label>
                                    <div class="col-md-5 col-sm-12">
                                        <div class="input-group">
                                            <div class="input-group-prepend d-md-none d-block">
                                                <div class="input-group-text">D</div>
                                            </div>
                                            <select class="form-control" id="player1" name="t1_p1" required>
                                                <option value=""></option>
                                                {/* <!{{.PlayerOptions }}--> */}
                                            </select>
                                            <div class="input-group">
                                                <div class="invalid-feedback">Must have all players</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5 col-sm-12">
                                        <div class="input-group">
                                            <div class="input-group-prepend d-md-none d-block">
                                                <div class="input-group-text">O</div>
                                            </div>
                                            <select class="form-control" id="player2" name="t1_p2" required>
                                                <option value=""></option>
                                                {/* <!{{.PlayerOptions }}--> */}
                                            </select>
                                        </div>
                                        <div class="invalid-feedback">Must have all players</div>
                                    </div>
                                </div>
                                <div class="form-group form-row" id="team_2">
                                    <label class="col">Team 2</label>
                                    <div class="col-md-5">
                                        <div class="input-group">
                                            <div class="input-group-prepend d-md-none d-block">
                                                <div class="input-group-text">D</div>
                                            </div>
                                            <select class="form-control" id="player3" name="t2_p1" required>
                                                <option value=""></option>
                                                {/* <!{{.PlayerOptions }}--> */}
                                            </select>
                                        </div>
                                        <div class="invalid-feedback">Must have all players</div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="input-group">
                                            <div class="input-group-prepend d-md-none d-block">
                                                <div class="input-group-text">O</div>
                                            </div>
                                            <select class="form-control" id="player4" name="t2_p2" required>
                                                <option value=""></option>
                                                {/* <!{{.PlayerOptions }}--> */}
                                            </select>
                                        </div>
                                        <div class="invalid-feedback">Must have all players</div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="form-group" id="half_scores">
                                <h4 class="pt-2 mb-0">Half Time Scores</h4>
                                <div class="form-group form-row">
                                    <div class="col">
                                        <label for="halfScoreTeam1">Team 1</label>
                                        <input type="number" class="form-control form-fill marg-left" id="halfScoreTeam1" name="t1_half" required />
                                        <div class="invalid-feedback">Please provide a valid (0-5) half time score</div>
                                    </div>
                                    <div class="col">
                                        <label for="halfScoreTeam2">Team 2</label>
                                        <input type="number" class="form-control form-fill marg-left" id="halfScoreTeam2" name="t2_half" required />
                                        <div class="invalid-feedback">Please provide a valid (0-5) half time score</div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group" id="final_scores">
                                <h4 class="pt-2 mb-0">Final Scores</h4>
                                <div class="form-group form-row">
                                    <div class="col">
                                        <label for="endTeam1">Team 1</label>
                                        <input type="number" class="form-control form-fill marg-left" id="endTeam1" name="t1_final" required />
                                        <div class="invalid-feedback">Please provide a valid (0-15 win by 2) ending score</div>
                                    </div>
                                    <div class="col">
                                        <label for="endTeam2">Team 2</label>
                                        <input type="number" class="form-control form-fill marg-left" id="endTeam2" name="t2_final" required />
                                        <div class="invalid-feedback">Please provide a valid (0-15 win by 2) ending score</div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary mb-2" id="submitButton">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}