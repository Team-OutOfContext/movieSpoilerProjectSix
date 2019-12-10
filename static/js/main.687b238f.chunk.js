(this["webpackJsonpmovie-spoiler-project-six"]=this["webpackJsonpmovie-spoiler-project-six"]||[]).push([[0],{25:function(e,t,a){e.exports=a(66)},30:function(e,t,a){},48:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var s=a(0),o=a.n(s),i=a(10),r=a.n(i),n=(a(30),a(24)),l=a(22),c=a(2),m=a(3),u=a(5),p=a(4),h=a(6),v=a(7),d=a.n(v),g=(a(48),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search-bar"},o.a.createElement("label",{htmlFor:"userInput"},"Search a movie title"),o.a.createElement("input",{type:"text",id:"userInput",className:"search-input",placeholder:"Search for a movie",value:this.props.userInputProp,onChange:function(t){e.props.getUserInputProp(t),e.props.getMovieDetailsProp()}}),o.a.createElement("i",{className:"fas fa-search search-icon"}),this.props.errorMessageProp?o.a.createElement("p",null,"Your movie doesn't exist!"):null)}}]),t}(s.Component)),f=function(e){return o.a.createElement("ul",{className:"movie-results-part-one"},e.movieSuggestions.map((function(t){var a="";null!==t.poster_path&&(a="https://image.tmdb.org/t/p/w500".concat(t.poster_path));var s="",i="";return void 0===t.release_date||""===t.release_date?s="".concat(t.title):(i=t.release_date.slice(0,4),s="".concat(t.title," (").concat(i,")")),o.a.createElement("li",{className:"movie-listing",key:t.id,tabIndex:"0",onClick:function(){e.getMovieKeywords(t.id,t.title,i,a)}},o.a.createElement("p",null,s))})))},y=a(23),w=a.n(y),E=(a(64),a(65),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).call(this))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{class:"results"},o.a.createElement("div",{class:"wrapper"},o.a.createElement("div",{class:"movie-details"},o.a.createElement("img",{src:this.props.movieImageUrl,alt:this.props.movieImageAltText}),o.a.createElement("h3",null,"Critic's Review"),o.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum excepturi, perferendis sed officiis voluptate, hic inventore sapiente!")),o.a.createElement("div",{class:"gif-results"},o.a.createElement("h2",null,"You chose"),o.a.createElement("h3",{class:"movie-title"},this.props.movieTitle),o.a.createElement(w.a,{dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,speed:2e3,autoplaySpeed:1200,cssEase:"linear"},this.props.gifDataArray.map((function(e,t){return o.a.createElement("li",{key:t,className:"carousel-cell"},o.a.createElement("img",{className:"carousel-cell-image",src:e.images.original.webp,alt:e.title}))}))))))}}]),t}(s.Component)),K=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).getUserInput=function(t){e.setState(Object(l.a)({},t.target.id,t.target.value))},e.getMovieDetails=function(){var t=RegExp(/\w/g);console.log(e.state.userInput.length),console.log(t.test(e.state.userInput)),t.test(e.state.userInput)&&d()({url:"https://api.themoviedb.org/3/search/movie",method:"GET",dataResponse:"json",params:{api_key:e.state.apiKeyMovieDb,query:e.state.userInput,include_adult:!1}}).then((function(t){0===t.data.results.length?e.setState({errorMessage:!0}):e.setState({movieSuggestions:t.data.results,autoSuggestions:!0})})).catch((function(t){e.setState({errorMessage:!0}),console.log(t)}))},e.getMovieKeywords=function(t,a,s,o){e.setState({movieTitle:a,movieYear:s,movieImageUrl:o,showLoadingScreen:!0}),d()({url:"https://api.themoviedb.org/3/movie/".concat(t,"/keywords"),method:"GET",dataResponse:"json",params:{api_key:e.state.apiKeyMovieDb,movie_id:t}}).then((function(t){console.log(t.data.keywords,"get movie keywords axios call"),e.setState({movieKeywords:t.data.keywords,userInput:"",autoSuggestions:!1}),e.filterKeywords()})).catch((function(t){e.makeGiphyApiCalls(3)}))},e.filterKeywords=function(){var t=RegExp(/(stinger)$/),a=e.state.movieKeywords.filter((function(e){return!t.test(e.name)}));e.setState({movieKeywords:a}),e.prepGiphyApiCalls()},e.prepGiphyApiCalls=function(){e.state.movieKeywords.length>=3?e.shuffleKeywordsArray():2===e.state.movieKeywords.length?e.makeGiphyApiCalls(1):1===e.state.movieKeywords.length?e.makeGiphyApiCalls(2):e.makeGiphyApiCalls(3)},e.getRandomGifs=function(){return d()({url:"https://api.giphy.com/v1/gifs/random",method:"GET",dataResponse:"json",params:{api_key:e.state.apiKeyGiphy,rating:"pg"}})},e.makeGiphyApiCalls=function(t){var a=[];e.state.movieKeywords.forEach((function(t){a.push(e.getKeywordGifs(t.name))}));for(var s=0;s<t;s++)a.push(e.getRandomGifs());e.prepGifData(a)},e.prepGifData=function(t){d.a.all(t).then((function(t){var a=[];t.forEach((function(e){var t="";if(!0===Array.isArray(e.data.data)){console.log(e.data.data);var s=Math.floor(Math.random()*e.data.data.length);t=e.data.data[s]}else t=e.data.data;a.push(t)})),e.setState({showLoadingScreen:!1,gifDataArray:a,showGifs:!0,showButton:!0}),console.log(a)})).catch((function(t){console.log(t),console.log("Sorry, this movie is not currently playing at our theatre! Please try another movie."),e.setState({showLoadingScreen:!1,noGifs:!0,showButton:!0})}))},e.shuffleKeywordsArray=function(){for(var t=Object(n.a)(e.state.movieKeywords),a=t.length-1;a>0;a--){var s=Math.floor(Math.random()*(a+1)),o=t[a],i=t[s];t[a]=i,t[s]=o}var r=t.slice(0,3);e.setState({movieKeywords:r}),e.makeGiphyApiCalls(0),console.log(e.state.movieKeywords[0].name)},e.getKeywordGifs=function(t){return d()({url:"https://api.giphy.com/v1/gifs/search",method:"GET",dataResponse:"json",params:{api_key:e.state.apiKeyGiphy,q:t}})},e.prepMoviePosterData=function(){var t=RegExp(/^(http)/);t.test(e.state.movieImageUrl)?(console.log(t.test(e.state.movieImageUrl)),e.setState({movieImageAltText:"Movie poster for"})):(console.log(t.test(e.state.movieImageUrl)),e.setState({movieImageAltText:"Placeholder image for the movie poster for"}))},e.resetState=function(){e.setState({userInput:"",movieTitle:"",movieYear:"",movieImageUrl:"",movieImageAltText:"",movieKeywords:[],gifDataArray:[],showButton:!1,noGifs:!1,errorMessage:!1})},e.state={apiKeyMovieDb:"38f9a8f5c677f0356adca226f357b762",apiKeyGiphy:"x51UFN0xOVPnehx6f4dJxLphvkXnx19U",userInput:"",autoSuggestions:!1,movieSuggestions:["hi"],movieTitle:"",movieYear:"",movieImageUrl:"",movieImageAltText:"",movieKeywords:[],gifDataArray:[],showGifs:!1,noGifs:!1,showButton:!1,errorMessage:!1,showLoadingScreen:!1},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"search"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("h1",null,"GIF ME A MOVIE!"),o.a.createElement("h3",null,"A movie theatre for those who don't have time to watch a full movie"),o.a.createElement(g,{userInputProp:this.state.userInput,getUserInputProp:this.getUserInput,getMovieDetailsProp:this.getMovieDetails,errorMessageProp:this.state.errorMessage}),o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"search-bar"},o.a.createElement("div",{className:"movie-results",id:"mainContent"},this.state.autoSuggestions?o.a.createElement(f,{movieSuggestions:this.state.movieSuggestions,getMovieKeywords:this.getMovieKeywords}):null))),this.state.showGifs?o.a.createElement(E,{movieTitle:this.state.movieTitle,movieImageUrl:this.state.movieImageUrl,movieImageAltText:this.state.movieImageAltText,gifDataArray:this.state.gifDataArray}):null,this.state.noGifs?o.a.createElement("p",null,"Sorry, this movie is not currently playing at our theatre! Please try searching a different movie."):null,o.a.createElement("div",{className:"movie-tagline"},3===this.state.movieKeywords.length?o.a.createElement("p",null,"When a ".concat(this.state.movieKeywords[0].name," and a\n              ").concat(this.state.movieKeywords[1].name," fall in love, ").concat(this.state.movieKeywords[2].name," ensues")):null,2===this.state.movieKeywords.length?o.a.createElement("p",null,"When a ".concat(this.state.movieKeywords[0].name," and a\n              ").concat(this.state.movieKeywords[1].name," fall in love")):null,1===this.state.movieKeywords.length?o.a.createElement("p",null,"When a ".concat(this.state.movieKeywords[0].name," and.")):null),this.state.showButton?o.a.createElement("button",{onClick:this.resetState},"Watch another movie?"):null),this.state.showLoadingScreen?o.a.createElement("div",{className:"loading-screen"},o.a.createElement("p",null,"Getting the results...")):null))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.687b238f.chunk.js.map