
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
  };
}