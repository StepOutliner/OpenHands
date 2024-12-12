import { NON_REPO_SUGGESTIONS } from "./non-repo-suggestions";
import { BASE_REPO_SUGGESTIONS, getRepoSuggestions } from "./repo-suggestions";

// Initial suggestions with base repo suggestions
export const INITIAL_SUGGESTIONS: Record<
  "repo" | "non-repo",
  Record<string, string>
> = {
  repo: BASE_REPO_SUGGESTIONS,
  "non-repo": NON_REPO_SUGGESTIONS,
};

// Function to get all suggestions including dynamic ones
export async function getSuggestions(): Promise<Record<
  "repo" | "non-repo",
  Record<string, string>
>> {
  const repoSuggestions = await getRepoSuggestions();
  return {
    repo: repoSuggestions,
    "non-repo": NON_REPO_SUGGESTIONS,
  };
}
