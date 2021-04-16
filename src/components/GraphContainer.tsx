import React, { CSSProperties, FC } from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

interface GraphContainerProps {
    width?: number
    height: number
}

const darkBorder = '#333';
const lightBorder = '#ccc';

const GraphContainer: FC<GraphContainerProps> = props => {

    const { isDarkTheme } = useThemeContext();

    const style: CSSProperties = {
        width: props.width ? `${props.width}px` : '100%',
        height: `${props.height}px`,
        marginBottom: 'var(--ifm-leading)',
        border: `1px solid ${isDarkTheme ? darkBorder : lightBorder}`,
        borderRadius: 'var(--ifm-global-radius)'
    };

    return <div style={style}>
        { props.children }
    </div>
};

export { GraphContainer };