(function($) {
  $(document).ready(function() {
    new App($('[data-app=jQuery]'));
  });

  var mainTemplate = '<div class="container">' +
      '<div class="row">' +
        '<div class="col-12">' +
          '<button data-action="reload">Reload</button>' +
        '</div>' +
      '</div>' +
      '<div data-partial="products"></div>' +
    '</div>';
  var productTemplate =
    '<div class="row product" data-action="selectProduct">' +
      '<div class="col-6 col-md-3 title">Title: <span data-product="title"></span></div>' +
      '<div class="col-6 col-md-3 price">Price: <span data-product="price"></span> EUR</div>' +
      '<div class="col-12 col-md-6" data-partial="colors"></div>' +
      '<div class="col-12 col-md-6 description" data-product="description"></div>' +
    '</div>';
  var colorTemplate =
      '<span style="width:32px; height:32px; display:inline-block"></span>';

  function App($element) {
    this.$element = $element;
    this.$activeProduct = null;
    this.products = {};

    this.reload();
    this.$element.on('click', '[data-action]', $.proxy(this.handleAction, this));
  }

  App.prototype.fetch = function() {
    return $.get('http://127.0.0.1:8090/random-products.json.php')
      .then($.proxy(this.updateProducts, this));
  }

  App.prototype.updateProducts = function (response) {
    this.products = response || {};
  }

  App.prototype.handleAction = function(event) {
    var action = $(event.target).closest('[data-action]').data('action');
    if (this[action] instanceof Function) {
      this[action].call(this, event);
    }
  }

  App.prototype.reload = function() {
    this.fetch().then($.proxy(this.render, this));
  }

  App.prototype.selectProduct = function(event) {
    var $target = $(event.target).closest('[data-action]');

    if (this.$activeProduct !== $target) {
      this.$activeProduct.removeClass('is-active');
      this.$activeProduct = $target.addClass('is-active');
    }
  }

  App.prototype.render = function() {
    var self = this;
    var $main = $(mainTemplate);

    $.each(this.products, function(productIndex, product) {
      var $product = $(productTemplate);
      $product.find('[data-product=title]').text(product.title);
      $product.find('[data-product=price]').text(product.price);
      var $description = $product.find('[data-product=description]')
        .text(product.description);

      if (productIndex === 0) {
        self.$activeProduct = $product.addClass('is-active');
      }

      $.each(product.colors, function(colorIndex, color) {
        var $color = $(colorTemplate);

        $color.attr({title: color.title});
        $color.css({background: '#' + color.colorCode});

        $product.find('[data-partial=colors]').append($color);
      });

      $main.find('[data-partial=products]').append($product);
    });

    this.$element.empty().append($main);
  }
})(jQuery);