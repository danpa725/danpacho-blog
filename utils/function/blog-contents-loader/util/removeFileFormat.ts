type FileFormat = "txt" | "mdx" | "json"

const removeFileFormat = (fileName: string, fileFormat: FileFormat): string =>
    fileName.replace(`.${fileFormat}`, "")

export default removeFileFormat
