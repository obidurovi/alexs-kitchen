# Question 1 & 2 Answer

# === Question 01 ===

To submit a hotfix for the "Alex's Kitchen" project by the team "Remote Kitchen", I would typically follow these steps and naming conventions for the branch, creation of the pull request (PR), and merging it with production branch:

For naming conevntion for a hotflix branch might be: **`hotfix/issue-description`**
For example: **`hotfix/payment-processing-bug`**

Steps to create a PR and MErge with the Production Branch

1. create and switch to the Hotfix Branch:
   ```bash
   git checkout -b hotfix/payment-processing-bug
   ```
2. Impelement the hotfix:
   - Make the necessary code changes to fix the bug.
3. Commit My Changes:
   ```bash
   git add .
   git commit -m "Fix payment processing bug"
   ```
4. Push the Hotfix Branch to the Remote Repository:
   ```bash
   git push origin hotfix/payment-processing-bug
   ```
5. Create a Pull Request (PR):
   - Navigate to the "Pull Requests" tab.
   - I will Click on the "New Pull Request" button.
   - I will Select the base branch (typically **`main`** or **`master`**, or a specific **`production`** branch if it exists) and compare it with my hotfix branch (**`hotfix/payment-processing-bug`**).
   - I will Provide a clear and concise description of the bug and the fix in the PR description.
   - Assign reviewers, if required by my team’s workflow.
6. Review and Approval:
   - Wait for the code review process. Reviewers will check my changes and may request modifications.
   - Address any feedback by making additional commits to the hotfix/payment-processing-bug branch and pushing them.
7. Merge the PR:

   - Once the PR is approved, I can merge it. Depending on the team’s workflow and permissions, either Me or a project maintainer will handle the merge.
   - In the PR, click the "Merge pull request" button and confirm the merge.
   - If my team prefers a specific merge method (e.g., squash and merge, rebase and merge), follow that.

8. Delete the Hotfix Branch:
   - After merging, it is a good practice to delete the hotfix branch from the remote repository to keep the repository clean.
   ```bash
   git branch -d hotfix/payment-processing-bug
   git push origin --delete hotfix/payment-processing-bug
   ```
9. Update Local Main Branch:
   I have to make sure my local **`main`** or **`production`** branch is up-to-date.
   ```bash
   git checkout main
   git pull origin main
   ```

# === Question 2 ===

Lets consider the following dummy code snippet:

```javascript
const dummyArr = [
  {
    type: "Vegetarian",
    menuItems: [
      { id: 1, name: "Salad" },
      { id: 2, name: "Veg Burger" },
      { id: 3, name: "Pasta" },
    ],
    category: [
      {
        name: "Starters",
        menuItems: [1, 2],
      },
    ],
  },
  {
    type: "Non-Vegetarian",
    menuItems: [
      { id: 4, name: "Chicken Wings" },
      { id: 5, name: "Beef Burger" },
      { id: 6, name: "Shrimp Pasta" },
    ],
    category: [
      {
        name: "Main Course",
        menuItems: [4, 5],
      },
    ],
  },
];
```

Here, if I want to access Non-Vegetarian menu items.

```javascript
function listMenuItemsByType(arr, type) {
  const menu = arr.find((menu) => menu.type === type);
  return menu ? menu.menuItems : [];
}

console.log(listMenuItemsByType(dummyArr, "Non-Vegetarian"));
```

Output:

```text
[
{ id: 4, name: "Chicken Wings" },
{ id: 5, name: "Beef Burger" },
{ id: 6, name: "Shrimp Pasta" }
]
```
