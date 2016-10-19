export default function() {
  this.get('/users');
  this.get('/users/:id');
  this.post('/users');
  this.del('/users/:id');
  this.patch('/users/:id');
}
