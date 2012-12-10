# timelineJS-rails

This gem packages the [TimelineJS](http://timeline.verite.co/) for easy use with the Rails asset pipleine.

## General Installation

Add to the assets group in your Gemfile:

```ruby
gem 'timelineJS-rails'
```

Install the gem:
  
```ruby
bundle install
```

Add the Javascript to `application.js`:


```javascript
//=require js/storyjs-embed
```

## Example

```javascript
  $(document).ready(function() {
    createStoryJS({
      type: 'timeline',
      width: '400',
      height: '500',
      lang: 'zh-ch',
      source: '/events.json',
      embed_id: 'time_line'
    });
  });
```

In the production environment and enable Rails asset pipleine, you need to do below:

Add the Javascript to `application.js`:


```javascript
//=require js/timeline-min
//=require js/locale/zh-ch
```

Add the css to `application.css`:

```css
/*
 *= require css/timeline
 */  
````

Init the timeline:


```javascript
  $(document).ready(function() {
    createStoryJS({
      type: 'timeline',
      width: '400',
      height: '500',
      source: '/events.json',      
      embed_id: 'time_line',
      lang: '/assets/application.js'
      js: '/assets/application.js'
      css: '/assets/application.css'      
    });
  });
```


