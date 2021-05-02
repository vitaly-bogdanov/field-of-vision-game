import styled from '@emotion/styled';

const makeLongShadow = (color, size) => {
    let i = 18;
    let shadow = `${i}px 0 0 ${size} ${color}`;
    for (; i < 706; i++) {
      shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
    }
    return shadow;
};

const height = "22px";
const thumbHeight = 44;
const trackHeight = "22px";
const trackBorderRadius = '25px';

// colours
const upperColor = "#fff";
const lowerColor = "#FDD207";
const thumbColor = "#0E0C0B";
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

const Range = styled.input`
    overflow: hidden;
    display: block;
    appearance: none;
    width: 536px;
    width: 100%;
    height: ${thumbHeight}px;
    cursor: pointer;
    
    &:focus {
        outline: none;
    }

    &::-webkit-slider-thumb {
        border: 12px solid ${lowerColor};
        position: relative;
        appearance: none;
        height: ${thumbHeight}px;
        width: ${thumbHeight}px;
        background: ${thumbColor};
        border-radius: 100%;
        top: 50%;
        transform: translateY(-50%);
        box-shadow: ${makeLongShadow(upperColor, "-10px")};
        transition: background-color 150ms;
    }

    &::-moz-range-thumb {
        border: 12px solid ${lowerColor};
        appearance: none;
        margin: 0;
        height: ${thumbHeight};
        width: ${thumbHeight};
        background: ${thumbColor};
        border-radius: 100%;
        transition: background-color 150ms;
    }

    &::-ms-thumb {
        border: 12px solid ${lowerColor};
        appearance: none;
        height: ${thumbHeight};
        width: ${thumbHeight};
        background: ${thumbColor};
        border-radius: 100%;
        transition: background-color 150ms;
        top: 0;
        margin: 0;
        box-shadow: none;
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: ${height};
        background: ${lowerBackground};
        border-radius: ${trackBorderRadius};
    }

    &::-moz-range-track, &::-moz-range-progress {
        width: 100%;
        height: ${height};
        background: ${upperBackground};
        border-radius: ${trackBorderRadius};
    }

    &::-moz-range-progress {
        background: ${lowerBackground};
        border-radius: ${trackBorderRadius};
    }

    &::-ms-track {
        width: 100%;
        height: ${height};
        border-radius: ${trackBorderRadius};
        border: 0;
        /* color needed to hide track marks */
        color: transparent;
        background: transparent;
    }

    &::-ms-fill-lower {
        background: ${lowerBackground};
    }

    &::-ms-fill-upper {
        background: ${upperBackground};
    }
`;

export default Range;