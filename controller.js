
function TicTacToeCtrl($scope) {
  $scope.board_size = 3;
  
  $scope.initialize_game = function () {
    $scope.current_move = 'A';
    $scope.board = [];
    for (var i = 0; i < $scope.board_size; i++) {
      $scope.board[i] = new Array($scope.board_size);
    }
  };
  $scope.initialize_game();
  
  $scope.mark_pane = function (parent_index, index) {
    // If this pane is empty
    if (typeof $scope.board[parent_index][index] == 'undefined') {
      if ($scope.current_move == 'A') {
        $scope.board[parent_index][index] = 'X';
        $scope.current_move = 'B';
      } else {
        $scope.board[parent_index][index] = 'O';
        $scope.current_move = 'A';
      }
    }
    check_win = $scope.check_for_win();
    if (check_win[0]) {
      console.log('winner found!  Its: ' + check_win[1]);
    }
  };
  
  $scope.check_for_win = function () {
    // Check rows
    row_outer_loop:
    for (var row = 0; row < $scope.board_size; row++) {
      if (typeof $scope.board[row][0] == 'undefined')
        continue;
      for (var idx = 1; idx < $scope.board_size; idx++) {
        if ($scope.board[row][idx-1] != $scope.board[row][idx])
          continue row_outer_loop;
      }
      return [true, $scope.board[row][0]];
    }
    
    // Check columns
    col_outer_loop:
    for (var col = 0; col < $scope.board_size; col++) {
      if (typeof $scope.board[0][col] == 'undefined')
        continue;
      for (var row = 1; row < $scope.board_size; row++) {
        if ($scope.board[row-1][col] != $scope.board[row][col])
          continue col_outer_loop;
      }
      return [true, $scope.board[0][col]];
    }
    
    // Check forward diagonal
    diag_outer_loop:
    for (var idx = 0; idx < $scope.board_size; idx++) {
      if (typeof $scope.board[idx][idx] == 'undefined')
        break;
      if (idx > 0) {
        if ($scope.board[idx-1][idx-1] != $scope.board[idx][idx]) {
          break;
        } else {
          if (idx == $scope.board_size - 1)
            return [true, $scope.board[0][0]];
        }
      }
    }
    
    // Check reverse diagonal
    diag_rev_outer_loop:
    for (var row = 0; row < $scope.board_size; row++) {
      var col = ($scope.board_size - 1) - row;
      if (typeof $scope.board[row][col] == 'undefined')
        break;
      if (row > 0) {
        if ($scope.board[row-1][col+1] != $scope.board[row][col]) {
          break;
        } else {
          if (row == $scope.board_size - 1)
            return [true, $scope.board[row][0]];
        }
      }
    }

    return [false, undefined];
  };
}





