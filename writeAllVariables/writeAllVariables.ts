import { dirname } from 'path';
import { getPathInput, mkdirP, writeFile } from 'vsts-task-lib';
import { getVariables, setResult, TaskResult } from 'vsts-task-lib/task';

async function run() {
    try {
        const filepath = getPathInput('filepath', true);

        const kvp = getVariables().reduce(function(obj, el) {
            obj[el.name] = el.value;
            return obj;
        }, {});
          
        const json = JSON.stringify(kvp);

        const dir = dirname(filepath);
        mkdirP(dir);
        writeFile(filepath, json);
        
    } catch (err) {
        setResult(TaskResult.Failed, err.message);
    }
}

run();