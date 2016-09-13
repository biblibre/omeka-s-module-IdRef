(function($) {
    $(document).ready(function() {
        $('body').on('focus', 'fieldset[data-data-type="idref"] input.value', function() {
            if ($(this).autocomplete('instance') === undefined) {
                $(this).autocomplete({
                    "source": $(this).attr('data-url');,
                    "minLength": 3
                });
            }
        });
    });
})(jQuery);
