export const seasonMap = {
  Wiosna: 'text-greenShade-50',
  Lato: '',
  Jesień: 'text-orangeShade-50',
  Zima: '',
}

export const addHeight = (...props: boolean[]) => {
  const sum = props.filter(Boolean).length * 0.8

  return `${sum}rem`
}
