/* eslint-disable unused-imports/no-unused-imports */
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '@src/theme';
import { UserDashboardView } from '@src/views/user/UserDashboardView';
import renderer from 'react-test-renderer';

it('if dom manipulation view snapshot matches', async () => {
  const tree = renderer.create(
    <ThemeProvider theme={lightTheme}>
      <UserDashboardView />
    </ThemeProvider>,
  );
  jest.setTimeout(20000);

  tree.toJSON();
  expect(tree).toMatchSnapshot();
});

// https://dev.to/ozaytsev86/jest-syntaxerror-unexpected-token-export-3glh
// https://stackoverflow.com/questions/64782261/best-approach-to-wait-on-material-ui-ripples-to-complete-before-taking-snapshots
// One of this issues might be the problem. I've tried to run a snapshot test on another component and it seemed to work. So the ripple effect seems to be the cause.
// And because UserDashboardView.tsx uses the some sort of module that isn't being correctly transformed (like mentioned in link 1.) the module should be ignored
