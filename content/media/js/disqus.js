var disqus_config = function () {
  this.page.url = "{{ resource.url }}";
  this.page.identifier = "{{ resource.meta.id }}";
};

(function() {
  var d = document, s = d.createElement('script');
  s.src = 'https://problemchimp.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();