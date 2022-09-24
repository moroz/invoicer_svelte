<script lang="ts">
  import client from "./api/client";
  import { setClient } from "svelte-apollo";
  import { Router, Route } from "svelte-navigator";
  import Dashboard from "./views/dashboard/Dashboard.svelte";
  import LoginPage from "./views/sessions/LoginPage.svelte";

  setClient(client);
</script>

<Router>
  <Route path="/" component={Dashboard} />
  <Route path="/login" component={LoginPage} />
</Router>
