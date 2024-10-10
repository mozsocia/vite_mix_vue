import Vue from 'vue'

new Vue({
  el: '.product-form',
  data() {
    return {
      product: {
        name: '',
        price: '',
        description: ''
      },
      successMessage: '',
      errorMessage: ''
    }
  },
  methods: {
    submitForm() {
      // Basic validation
      if (!this.product.name || !this.product.price) {
        this.errorMessage = 'Name and price are required';
        this.successMessage = '';
        return;
      }

      // Using axios to submit the form
      axios.post('/api/products', this.product)
        .then(response => {
          this.successMessage = 'Product added successfully!';
          this.errorMessage = '';
          // Clear the form
          this.product = {
            name: '',
            price: '',
            description: ''
          };
        })
        .catch(error => {
          this.errorMessage = 'Failed to add product. Please try again.';
          this.successMessage = '';
        });
    }
  }
});