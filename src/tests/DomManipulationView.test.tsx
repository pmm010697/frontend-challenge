import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '@src/theme';
import { DomManipulationView } from '@src/views/user/DomManipulationView';
import renderer from 'react-test-renderer';

it('if dom manipulation view snapshot matches', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <DomManipulationView />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
