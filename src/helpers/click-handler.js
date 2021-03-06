import getJQuery from '../helpers/jquery';
import debugFactory from 'debug';

const debug = debugFactory( 'cdm:click-handler' );
const $ = getJQuery();

export default function addClickHandler( clickTarget, handler ) {
	debug( 'adding click handler to target', clickTarget );
	return $( 'body' ).on( 'click', clickTarget, handler );
}
