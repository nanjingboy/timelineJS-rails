# -*- encoding: utf-8 -*-

require File.expand_path('../lib/timelineJS/rails/version', __FILE__)

Gem::Specification.new do |s|
  s.name = 'timelineJS-rails'
  s.version = TimelineJS::Rails::VERSION
  s.authors = ['Tom Huang']
  s.email = ['hzlhu.dargon@gmail.com']
  s.homepage = 'https://github.com/nanjingboy/timelineJS-rails'
  s.summary = 'timelineJS packaged for the Rails asset pieline'
  s.description = "timelineJS resources files packaged for the Rails asset pieline"

  s.files = `git ls-files`.split("\n")

  s.add_dependency "jquery-rails"
end
