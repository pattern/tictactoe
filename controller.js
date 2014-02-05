
function TicTacToeCtrl($scope) {
  $scope.board_size = 3;
  $scope.current_move = 'A';
  
  $scope.initialize_board = function () {
    $scope.board = [];
    for (var i = 0; i < $scope.board_size; i++) {
      $scope.board[i] = new Array($scope.board_size);
    }
  };
  $scope.initialize_board();
  
  $scope.mark_pane = function (parent_index, index) {
    console.log('marking pane (' + parent_index + ',' + index + ')!');
  };
}