//= require timelineJS/timeline

/* CREATE StoryJS Embed
================================================== */
function createStoryJS(c, src) {
	/* VARS
	================================================== */
	var storyjs_embedjs, t, te, x,
		isCDN = false,
		storyjs_e_config = {
			debug: false,
			type: 'timeline',
			id: 'storyjs',
			embed_id: 'timeline-embed',
			embed: true,
			width: '100%',
			height: '100%',
			source:	'https://docs.google.com/spreadsheet/pub?key=0Agl_Dv6iEbDadFYzRjJPUGktY0NkWXFUWkVIZDNGRHc&output=html',
			api_keys: {
				google:	"",
				flickr:	"",
				twitter: ""
			},
			gmap_key: "",
            ajax_timeout: 3000
		};

	/* Build Timeline
	================================================== */
	function createEmbedDiv() {
		var embed_classname	= "storyjs-embed";

		t = document.createElement('div');

		if (storyjs_e_config.embed_id != "") {
			te = document.getElementById(storyjs_e_config.embed_id);
		} else {
			te = document.getElementById("timeline-embed");
		}

		te.appendChild(t);
		t.setAttribute("id", storyjs_e_config.id);

		if (storyjs_e_config.width.toString().match("%") ) {
			te.style.width = storyjs_e_config.width.split("%")[0] + "%";
		} else {
			storyjs_e_config.width = storyjs_e_config.width - 2;
			te.style.width = (storyjs_e_config.width) + 'px';
		}

		if (storyjs_e_config.height.toString().match("%")) {
			te.style.height = storyjs_e_config.height;
			embed_classname	+= " full-embed";
			te.style.height = storyjs_e_config.height.split("%")[0] + "%";

		} else if (storyjs_e_config.width.toString().match("%")) {
			embed_classname	+= " full-embed";
			storyjs_e_config.height = storyjs_e_config.height - 16;
			te.style.height = (storyjs_e_config.height) + 'px';
		} else {
			embed_classname	+= " sized-embed";
			storyjs_e_config.height = storyjs_e_config.height - 16;
			te.style.height = (storyjs_e_config.height) + 'px';
		}

		te.setAttribute("class", embed_classname);
		te.setAttribute("className", embed_classname);
		t.style.position = 'relative';
	}

	function buildEmbed() {
		VMM.debug = storyjs_e_config.debug;
		storyjs_embedjs = new VMM.Timeline(storyjs_e_config.id);
		storyjs_embedjs.init(storyjs_e_config);
		if (isCDN) {
			VMM.bindEvent(global, onHeadline, "HEADLINE");
		}
	}

	/* BUILD CONFIG
	================================================== */
	if (typeof c == 'object') {
		for (x in c) {
			if (Object.prototype.hasOwnProperty.call(c, x)) {
				storyjs_e_config[x] = c[x];
			}
		}
	}

	if (typeof src != 'undefined') {
		storyjs_e_config.source = src;
	}

	/* CDN VERSION?
	================================================== */
	if (typeof url_config == 'object') {
		isCDN = true;

		/* IS THE SOURCE GOOGLE SPREADSHEET WITH JUST THE KEY?
		================================================== */
		if (storyjs_e_config.source.match("docs.google.com") || storyjs_e_config.source.match("json") || storyjs_e_config.source.match("storify") ) {

		} else {
			storyjs_e_config.source = "https://docs.google.com/spreadsheet/pub?key=" + storyjs_e_config.source + "&output=html";
		}

	}

	createEmbedDiv();
	buildEmbed();
}