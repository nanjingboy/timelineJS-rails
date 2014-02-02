# timelineJS-rails

This gem packages the [TimelineJS](http://timeline.verite.co/) for easy use with the Rails asset pipleine.

## General Installation

Add to the assets group in your Gemfile:

```ruby
gem 'timelineJS-rails', '~> 1.1.5'
```

Install the gem:

```ruby
bundle install
```

Add the Javascript to `application.js`:


```javascript
//=require timelineJS/embed
```

Add the CSS to `application.css`

```css
/*
 *= require timelineJS/timeline
 */
```

## Language

The Localization language *default is `en` English*,
if you want to change it, just add the Javascript to `application.js`:

```javascript
//=require timelineJS/locale/xxx # you should change the xxx with one of the available languages below
```

* `af` *Afrikaans*
* `ar` *Arabic (beta)*
* `bg` *Bulgarian*
* `ca` *Catalan*
* `cz` *Czech*
* `da` *Danish*
* `de` *German / Deutsch*
* `el` *Greek*
* `en` *English*
* `en-24hr` *English using 24hr time*
* `es` *Spanish*
* `eu` *Basque/ Euskara*
* `fi` *Finnish*
* `fo` *Faroese*
* `fr` *French*
* `gl` *Galician*
* `hu` *Hungarian*
* `hy` *Armenian*
* `id` *Indonesian*
* `is` *Icelandic*
* `it` *Italian*
* `iw` *Hebrew (beta)*
* `ja` *Japanese*
* `ka` *Georgian*
* `ko` *Korean*
* `lv` *Latvian*
* `nl` *Dutch*
* `no` *Norwegian*
* `pl` *Polish*
* `pt-br` *Brazilian Portuguese*
* `pt` *Portuguese*
* `ru` *Russian*
* `sk` *Slovak*
* `sl` *Slovenian*
* `sr-cy` *Serbian (Cyrillic)*
* `sr` *Serbian (Latin)*
* `sv` *Swedish*
* `ta` *Tamil*
* `tl` *Tagalog*
* `tr` *Turkish*
* `zh-cn` *Chinese*
* `zh-tw` *Taiwanese*


## Font Themes
If you want to set the font theme, just add the CSS to `application.css`:

```css
/*
 *= require timelineJS/themes/font/xxx #you should change the xxx with one of the available font themes below
 */
```

* `Arvo-PTSans`
* `Merriweather-NewsCycle`
* `PoiretOne-Molengo`
* `PTSerif-PTSans`
* `DroidSerif-DroidSans`
* `Lekton-Molengo`
* `NixieOne-Ledger`
* `AbrilFatface-Average`
* `PlayfairDisplay-Muli`
* `Rancho-Gudea`
* `Bevan-PotanoSans`
* `BreeSerif-OpenSans`
* `SansitaOne-Kameron`
* `Pacifico-Arimo`



## Example

```javascript
  $(document).ready(function() {
    createStoryJS({
      type: 'timeline',
      width: '400',
      height: '500',
      source: '/events.json', //get the events.json format from https://github.com/VeriteCo/TimelineJS#file-formats
      embed_id: 'time_line'
    });
  });
```

## Thanks
>- [TimelineJS](https://github.com/VeriteCo/TimelineJS)

## License
[www.opensource.org/licenses/MIT](http://www.opensource.org/licenses/MIT)
