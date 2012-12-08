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
      type: 'timeline',
      width: '400',
      height: '500',
      source: '/events.json',
      embed_id: 'time_line'      
  });
```
