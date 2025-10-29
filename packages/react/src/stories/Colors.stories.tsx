import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Styles/Colours',
  parameters: {
    docs: {
      description: {
        component: 'GOV.BB Brand Colour Palette',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

interface ColourSwatchProps {
  colour: string;
  name: string;
  token: string;
  isLight?: boolean;
}

const ColourSwatch = ({ colour, isLight = false }: ColourSwatchProps) => {
  const textColour = isLight ? 'black' : 'white';

  return (
    <div
      className="rounded-full flex items-center justify-center"
      style={{
        width: 72,
        height: 72,
        backgroundColor: colour,
        color: textColour,
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      AAA
    </div>
  );
};

export const PaletteLikeMockup: Story = {
  render: () => {
    // --- data ---------------------------------------------------------------
    const brandLeft = [
      {
        family: 'Yellow',
        shades: [
          { name: 'Dark', token: 'yellow-dark', colour: '#e8a833', isLight: true },
          { name: '100', token: 'yellow-100', colour: '#ffc726', isLight: true },
          { name: '40', token: 'yellow-40', colour: '#ffe9a8', isLight: true },
          { name: '10', token: 'yellow-10', colour: '#fff9e9', isLight: true },
        ],
      },
      {
        family: 'Blue',
        shades: [
          { name: 'Dark', token: 'blue-dark', colour: '#00164a' },
          { name: '100', token: 'blue-100', colour: '#00267f' },
          { name: '40', token: 'blue-40', colour: '#99a8cc', isLight: true },
          { name: '10', token: 'blue-10', colour: '#e5e9f2', isLight: true },
        ],
      },
    ] as const;

    const neutrals = [
      { name: 'Black', token: 'neutral-black', colour: '#000000' },
      { name: 'Grey', token: 'neutral-grey', colour: '#e0e4e9', isLight: true },
      { name: 'White', token: 'neutral-white', colour: '#FFFFFF', isLight: true },
    ] as const;

    const accentsRight = [
      {
        family: 'Red',
        shades: [
          { name: 'Dark', token: 'red-dark', colour: '#a42c2c' },
          { name: '100', token: 'red-100', colour: '#ff6b6b', isLight: true },
          { name: '40', token: 'red-40', colour: '#ffc4c4', isLight: true },
          { name: '10', token: 'red-10', colour: '#fff0f0', isLight: true },
        ],
      },
      {
        family: 'Pink',
        shades: [
          { name: 'Dark', token: 'pink-dark', colour: '#ad1157' },
          { name: '100', token: 'pink-100', colour: '#ff94d9', isLight: true },
          { name: '40', token: 'pink-40', colour: '#ffd4f0', isLight: true },
          { name: '10', token: 'pink-10', colour: '#fff4fb', isLight: true },
        ],
      },
      {
        family: 'Purple',
        shades: [
          { name: 'Dark', token: 'purple-dark', colour: '#4a235a' },
          { name: '100', token: 'purple-100', colour: '#a962c7', isLight: true },
          { name: '40', token: 'purple-40', colour: '#ddc0e9', isLight: true },
          { name: '10', token: 'purple-10', colour: '#f6eff9', isLight: true },
        ],
      },
      {
        family: 'Teal',
        shades: [
          { name: 'Dark', token: 'teal-dark', colour: '#0e5f64' },
          { name: '100', token: 'teal-100', colour: '#30c0c8', isLight: true },
          { name: '40', token: 'teal-40', colour: '#ace6e9', isLight: true },
          { name: '10', token: 'teal-10', colour: '#eaf9f9', isLight: true },
        ],
      },
      {
        family: 'Green',
        shades: [
          { name: 'Dark', token: 'green-dark', colour: '#00654a' },
          { name: '100', token: 'green-100', colour: '#1fbf84', isLight: true },
          { name: '40', token: 'green-40', colour: '#a5e5ce', isLight: true },
          { name: '10', token: 'green-10', colour: '#e9f9f3', isLight: true },
        ],
      },
    ] as const;

    // --- layout -------------------------------------------------------------
    return (
      <div className="p-8">
        <div className="grid grid-cols-3 gap-16 items-start">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${brandLeft.length}, auto)`,
              justifyContent: 'start',
            }}
          >
            {brandLeft.map((grp) => (
              <div key={grp.family} className="flex flex-col gap-0">
                {grp.shades.map((s) => (
                  <ColourSwatch key={s.token} {...s} />
                ))}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center ">
            {neutrals.map((n) => (
              <ColourSwatch key={n.token} {...n} />
            ))}
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${accentsRight.length}, auto)`,
              justifyContent: 'start',
            }}
          >
            {accentsRight.map((grp) => (
              <div key={grp.family} className="flex flex-col gap-0">
                {grp.shades.map((s) => (
                  <ColourSwatch key={s.token} {...s} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};
