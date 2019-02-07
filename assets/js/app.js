( function( $, win, doc ) {

        var $doc = $( doc ),
            $win = $( win );

    $doc.ready ( function() {
        var $frontSlider = $( '#main-slider' );
    $frontSlider.owlCarousel ({
            items:1,
            nav:true,
            navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']    
            // autoplay: true,
            // autoplayTimeout: 3000,
            // loop: true,
            // autoplayHoverPause: true
        });

    });
})( jQuery, window, document )





/*	var $frontSlider = $ ('.'),
		$win = $ ( win);

		doc.ready( function() 

(jQuery, win
	dow, document)

	{*/