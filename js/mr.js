    var element_pos = 0;    // Position of the newly created elements.
    var iCnt = 0;
    
    $(document).ready(function() {

        $(function() { $('#divContainer').draggable(); });
        $(function() { $("#divResize1").draggable().resizable(); });
        $(function() { $("#divResize2").draggable().resizable(); });
        $(function() { $("#divResize3").draggable().resizable(); });
        $(function() { $("#divResize4").draggable().resizable(); });
        $(function() { $("#divResize5").draggable().resizable(); });
        $(function() { $("#divResize6").draggable().resizable(); });
        $(function() { $("#divResize7").draggable().resizable(); });
        $(function() { $("#divResize8").draggable().resizable(); });
        $(function() { $("#divResize9").draggable().resizable(); });
        $(function() { $("#divResize10").draggable().resizable(); });
        $(function() { $("#divResize11").draggable().resizable(); });
        $(function() { $("#divResize12").draggable().resizable(); });
        $(function() { $("#divResize13").draggable().resizable(); });
        $(function() { $("#divResize13").draggable().resizable(); });
        $(function() { $("#divResize14").draggable().resizable(); });
        $(function() { $("#divResize15").draggable().resizable(); });
        $(function() { $("#divResize16").draggable().resizable(); });
        $(function() { $("#divResize17").draggable().resizable(); });
        $(function() { $("#divResize18").draggable().resizable(); });
        $(function() { $("#divResize19").draggable().resizable(); });
        $(function() { $("#divResize20").draggable().resizable(); });
        $(function() { $("#divResize21").draggable().resizable(); });

        // Create more DIV elements with absolute postioning.
        $('#btClickMe').click(function() {

            var dynamic_div = $(document.createElement('div')).css({
                border: '1px dashed', position: 'absolute', left: element_pos, 
                top: $('#divContainer').height() + 20,
                width: '120', height: '120', padding: '3', margin: '0'
            });

            element_pos = element_pos + $('#divContainer').width() + 20;

            $(dynamic_div).append('You can drag me too');
            
            // Append the newly created DIV to the container.
            $(dynamic_div).appendTo('#divContainer').draggable();

            iCnt = iCnt + 1;
        });
    });
