function template({ imports, interfaces, componentName, props, jsx, exports }, { tpl }) {
  return tpl`${imports}
  import styled, { useTheme } from 'styled-components';
  import { margin, system } from 'styled-system';
  import { pick } from '@styled-system/props';
  ${interfaces}
  
  const Wrapper = styled.View\`\${margin};\`
  const SvgItem = (${props}) => ${jsx}
  
  const systemProps = system({
    fill: { property: 'fill', scale: 'colors' },
    stroke: { property: 'stroke', scale: 'colors' },
    color: { property: 'color', scale: 'colors' },
  })
  
  function ${componentName}({ color, fill, stroke, ...props}) {
    const theme = useTheme()
  
    return (
      <Wrapper {...pick(props)}>
        <SvgItem {...props} style={{...systemProps({ color, fill, stroke, theme, ...props })}}/>
      </Wrapper>
    );
  }
  ${exports}
  `
}

module.exports = template
