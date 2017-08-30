// implement code here

const searchBtn = $('.js-search');
const inputField = $('.js-gif-input');
const dataContainer = $('.js-data');

const getData = (q) => {
	const API_KEY = '092c46931d544511a32b9911142ec6b9';
	const BASE_URL = 'http://api.giphy.com';
	const VERSION = 1;
	const ENDPOINT = '/gifs/search';
	const limit = 5;

	const xhr = $.get(`${BASE_URL}/v${VERSION}${ENDPOINT}?q=${q}&api_key=${API_KEY}&limit=${limit}`);
	return xhr;
}

const onSearchBtnClicked = async () => {
	console.log('onSearchBtnClicked', inputField.val());
	const searchQuery = inputField.val();
	const giphySearchResults = await getData(searchQuery)
	console.log()

	dataContainer.html(`<div class="column">
		<img class="full-width-image" src="${giphySearchResults.data[0].images.fixed_width_downsampled.url}">
	</div>
	<div class="column">
		<img class="full-width-image" src="${giphySearchResults.data[1].images.fixed_width_downsampled.url}">
	</div>
	<div class="column">
		<img class="full-width-image" src="${giphySearchResults.data[2].images.fixed_width_downsampled.url}">
	</div>
	<div class="column">
		<img class="full-width-image" src="${giphySearchResults.data[3].images.fixed_width_downsampled.url}">
	</div>
	<div class="column">
		<img class="full-width-image" src="${giphySearchResults.data[4].images.fixed_width_downsampled.url}">
	</div>`);

}

const onInputFieldTyped = (e) => {
	if (e.keyCode === 13) {
		console.log('onInputFieldTyped', e.keyCode, inputField.val())
	}
}

searchBtn.click(onSearchBtnClicked);
inputField.keypress(onInputFieldTyped);



