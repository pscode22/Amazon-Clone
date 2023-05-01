export default function TailwindBaseColors() {
  return {
    primary: '#232f3e',
    secondary: '#888c8c',
    cyan: '#1196ab',
    darkCyan: '#017285',
    alert: '#ffaf38',
    danger: '#cc1d3a',
    yellow: '#FFD814',
    secondaryYellow: '#F4BF76',
    vividOrange: '#FFA41C',

    ...{
      borderYellow: '#FCD200',
      borderOrange: '#FF8F00'
    },

    ...{
      textPrimary: '#0F1111',
      textSecondary: '#565959',
      textCyan: '#007185',
      textHoverColor: '#C7511F'
    }
  };
}
