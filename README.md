
# Tic Tac Toe

Contained in this repository is a simple Tic Tac Toe game, created using a single open source library, [AngularJS](http://angularjs.org/).

This application has been uploaded publicly to a subdirectory of a website I run, and is publicly viewable here:

[http://www.magicev.com/tictactoe/](http://www.magicev.com/tictactoe/)

To use the application locally, simply `git clone` it and open `index.html`  in a web browser.

### Design

This game is designed to be board size agnostic.  The size can be manipulated by changing the `board_size` scope variable.

The game is initialized on page load by the `initialize_game()` method.  This sets the initial game state, current player, and blank board.  The game then progresses as player clicks invoke `mark_pane()`.  On each click, `check_for_win()` is run to determine whether there is a winner, and if not, `check_for_draw()` then checks for a draw.