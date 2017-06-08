#!/usr/bin/ruby -Ku

SRC = 'format_url.js'

body = ""

for path in Dir.glob("./*.js")
  f = File.open(path)
  body += f.read
  f.close
end

puts body.gsub(/^\s*\/\/[^\n]*\n/, "").gsub(/\n/, "").gsub(/\s+/, " ")
