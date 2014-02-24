// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    var clearBoard, isX;
    isX = true;
    clearBoard = function() {
      $('.board-cell').text('');
      return isX = true;
    };
    $('#start-game').on('click', function(e) {
      clearBoard();
      $(this).hide();
      return $('#gameboard').fadeIn(500);
    });
    return $('.board-cell').on('click', function(e) {
      var mark;
      mark = cnt % 2 === 0 ? 'x' : 'o';
      if ($(this).text() === '') {
        $(this).text(mark);
        $(this).addClass(mark);
        return isX = !true;
      }
    });
  });

}).call(this);

//# sourceMappingURL=game.map
