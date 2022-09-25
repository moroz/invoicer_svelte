<script lang="ts">
  import { currentUserQuery } from "../../api/queries/sessionQueries";
  import { useNavigate } from "svelte-navigator";
  import {
    signOutMutation,
    useSignOutMutation
  } from "@api/mutations/sessionMutations";

  const navigate = useNavigate();

  const user = currentUserQuery();
  const signOut = useSignOutMutation();

  $: if (!$user.loading && !$user.data?.currentUser) {
    navigate("/login");
  }
</script>

{#if $user.loading}
  <h1>Loading...</h1>
{:else}
  <div class="layout">
    <header>
      <button on:click={() => signOut()}>Sign out</button>
    </header>
    <slot />
  </div>
{/if}
