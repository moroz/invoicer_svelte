<script lang="ts">
  import { authStore } from "@api/queries/sessionQueries";
  import { useNavigate } from "svelte-navigator";

  const navigate = useNavigate();

  $: if (!$authStore.loading && !$authStore.user) {
    navigate("/login");
  }
</script>

{#if $authStore.loading}
  <h1>Loading...</h1>
{:else}
  <div class="layout">
    <header>
      <button on:click={() => authStore.signOut()}>Sign out</button>
    </header>
    <slot />
  </div>
{/if}
