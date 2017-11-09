/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

module.exports = {
	// The editor creator to use.
	editor: '@ckeditor/ckeditor5-editor-classic/src/classiceditor',

	// The name under which the editor will be exported.
	moduleName: 'ClassicEditor',

	// Plugins to include in the build.
	plugins: [
		'@ckeditor/ckeditor5-essentials/src/essentials',
		'./markdown',
		'@ckeditor/ckeditor5-autoformat/src/autoformat',
		'@ckeditor/ckeditor5-basic-styles/src/bold',
		'@ckeditor/ckeditor5-basic-styles/src/italic',
		'@ckeditor/ckeditor5-basic-styles/src/code',
		'@ckeditor/ckeditor5-block-quote/src/blockquote',
		'@ckeditor/ckeditor5-heading/src/heading',
		'@ckeditor/ckeditor5-image/src/imagetoolbar',
		'@ckeditor/ckeditor5-link/src/link',
		'@ckeditor/ckeditor5-list/src/list',
		'@ckeditor/ckeditor5-paragraph/src/paragraph'
	],

	// UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
	language: 'en',

	// Editor config.
	config: {
		toolbar: {
			items: [
				'headings',
				'bulletedList',
				'numberedList',
				'blockQuote',
				'bold',
				'italic',
				'code',
				'link',
				'undo',
				'redo'
			]
		}
	}
};
