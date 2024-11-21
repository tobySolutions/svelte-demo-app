<script lang="ts">
    let todo = '';
    async function addTodo() {
      if (!todo) return;
      try {
        const response = await fetch('/call', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title: todo, userId: 1, completed: false })
        });
        if (response.ok) {
          todo = ''; 
          console.log('Todo added successfully');
        } else {
          console.error('Failed to add todo');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  </script>
  
  <h2>Server Actions Demo</h2>
  <div>
    <form on:submit|preventDefault={addTodo}>
      <div>
        <label for="todo">Todo</label>
        <div>
          <input id="todo" type="text" bind:value={todo} placeholder="What needs to be done?" required />
        </div>
      </div>
      <div>
        <button type="submit">Add Todo</button>
      </div>
    </form>
  </div>
  