<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Dashboard from "./views/dashboard/Dashboard.svelte";
  import LoginPage from "./views/sessions/LoginPage.svelte";
</script>

<Router>
  <Route path="/" component={Dashboard} />
  <Route path="/login" component={LoginPage} />
</Router>
