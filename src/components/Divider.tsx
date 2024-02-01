function Divider({ height, width, color, opacity, className }: { height?: string, width?: string, color?: string, opacity?: string, className?: string }) {
    return (
        <div className={className} style={{
            height: height ? height : '1px',
            width: width ? width : '100%',
            background: color ? color : '#FFF',
            opacity: opacity ? opacity : '0.2'
        }}>
        </div>
    )
}

export default Divider