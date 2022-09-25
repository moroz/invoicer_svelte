<script lang="ts">
  import {
    signInMutation,
    type SignInMutationVariables
  } from "@api/mutations/sessionMutations";

  import { authStore } from "@api/queries/sessionQueries";
  import { useNavigate } from "svelte-navigator";

  let formState: SignInMutationVariables = {
    email: "",
    password: ""
  };

  const navigate = useNavigate();
  let loading = false;
  const mutate = signInMutation();

  $: if (!$authStore.loading && $authStore.user) {
    navigate("/");
  }

  const onSubmit = async () => {
    try {
      loading = true;
      const result = await mutate({ variables: formState });
      if (result.data.signIn.success) {
        navigate("/");
      }
    } catch (e) {
      console.error(e);
    } finally {
      loading = false;
    }
  };
</script>

<form on:submit|preventDefault={onSubmit}>
  <div class="card">
    <div class="card-content">
      <h1 class="title is-4">Login</h1>
      {#if loading}
        <div class="notification">Loading...</div>
      {/if}
      <div class="field">
        <label class="label" for="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          class="input"
          bind:value={formState.email}
        />
      </div>
      <div class="field">
        <label class="label" for="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          class="input"
          bind:value={formState.password}
        />
      </div>

      <button class="button is-fullwidth is-success">Submit</button>
    </div>
  </div>
</form>

<style lang="scss">
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #ccc;
  }

  .card {
    width: 400px;
  }

  .title {
    text-align: center;
  }
</style>
