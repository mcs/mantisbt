jQuery(document).ready(function ($) {
    var $btn = $('<input/>').attr("class", "datepicker").attr("type", "hidden");
    $('select[name$="_day"]').after($btn);
    $('.datepicker').datepicker({
        showOn: "button",
        buttonImage: "images/calendar-img.gif",
        buttonImageOnly: true,
        buttonText: 'Cal',
        showWeek: true,
        firstDay: 1,
        beforeShow: function (input, options) {
            var $parent = $(input).parent(),
                year = $parent.find('select[name$="_year"] > option:selected').val(),
                month = $parent.find('select[name$="_month"] > option:selected').val(),
                day = $parent.find('select[name$="_day"] > option:selected').val();
            if (year && month && day) {
                input.value = month + "/" + day + "/" + year;
            }
        },
        onSelect: function (dateTxt, datepicker) {
            var date = new Date(dateTxt),
                $parent = $(this).parent();
            // update MantisBT date fields
            $parent.find('select[name$="_year"] > option[value="' + (date.getFullYear()) + '"]').prop("selected", true);
            $parent.find('select[name$="_month"] > option[value="' + (date.getMonth() + 1) + '"]').prop("selected", true);
            $parent.find('select[name$="_day"] > option[value="' + (date.getDate()) + '"]').prop("selected", true);
        }
    });
});