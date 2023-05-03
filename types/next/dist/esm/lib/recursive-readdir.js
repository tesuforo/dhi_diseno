import { promises } from "fs";
import { join } from "path";
/**
 * Recursively read directory
 * Returns array holding all relative paths
 */ export async function recursiveReadDir(/** Directory to read */ dir, /** Filter for the file name, only the name part is considered, not the full path */ filter, /** Filter for the file name, only the name part is considered, not the full path */ ignore, /** This doesn't have to be provided, it's used for the recursion */ arr = [], /** Used to replace the initial path, only the relative path is left, it's faster than path.relative. */ rootDir = dir) {
    const result = await promises.readdir(dir, {
        withFileTypes: true
    });
    await Promise.all(result.map(async (part)=>{
        const absolutePath = join(dir, part.name);
        if (ignore && ignore.test(part.name)) return;
        // readdir does not follow symbolic links
        // if part is a symbolic link, follow it using stat
        let isDirectory = part.isDirectory();
        if (part.isSymbolicLink()) {
            const stats = await promises.stat(absolutePath);
            isDirectory = stats.isDirectory();
        }
        if (isDirectory) {
            await recursiveReadDir(absolutePath, filter, ignore, arr, rootDir);
            return;
        }
        if (!filter.test(part.name)) {
            return;
        }
        arr.push(absolutePath.replace(rootDir, ""));
    }));
    return arr.sort();
}

//# sourceMappingURL=recursive-readdir.js.map