(function() {
    console.log("Welcome to Jubilant Pancake");

    var server = io();
    $document = $(document);

    server.on('message', function(state) {
        $('textarea').val(state.message);
    });

    server.on('join', function(state) {
        $('textarea').val(state.message);
        server.emit('join', (new Date()).getTime());
    });

    $document.on('change keyup paste', 'textarea', function() {
        server.emit('message', this.value);
    });

    $document.on('click', '.clear', function() {
        var $textarea = $('textarea');
		$textarea.val('');
        $textarea.trigger('change');
	});

})();
