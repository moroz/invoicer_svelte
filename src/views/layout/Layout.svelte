<script lang="ts">
  import { currentUserQuery } from "../../api/queries/sessionQueries";
  import { useNavigate } from "svelte-navigator";

  const navigate = useNavigate();

  const user = currentUserQuery();

  $: if (!$user.loading && !$user.data?.currentUser) {
    navigate("/login");
  }
</script>

{#if $user.loading}
  <h1>Loading...</h1>
{:else}
  <div class="layout">
    <slot />
  </div>
{/if}
