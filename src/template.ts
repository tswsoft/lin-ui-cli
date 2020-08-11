import { PackageJsonInput } from './interface'
export function packageJsonContent({ name, version, linuiversion, description }: PackageJsonInput) {
    return `{
    "name": "${name}",
    "version": "${version}",
    "description": "${description}",
    "main": "app.js",
    "dependencies": {
        "lin-ui": "^${linuiversion}"
    },
    "devDependencies": {},
    "scripts": {
    },
    "author": "",
    "license": "ISC"
}
`
}

export function projectConfigContent(appid: string, isOpenLoading: boolean) {
    const scriptsContent = isOpenLoading ? `"scripts": {
        "beforeCompile": "npm run build",
        "beforePreview": "npm run build",
        "beforeUpload": "npm run build"
    },` : ""
    return `{
    "description": "项目配置文件",
    "packOptions": {
        "ignore": [{
            "type": "file",
            "value": "lin.config.json"
        }]
    },
    "setting": {
        "urlCheck": true,
        "es6": true,
        "enhance": false,
        "postcss": true,
        "preloadBackgroundData": false,
        "minified": true,
        "newFeature": false,
        "coverView": true,
        "nodeModules": true,
        "autoAudits": false,
        "showShadowRootInWxmlPanel": true,
        "scopeDataCheck": false,
        "uglifyFileName": false,
        "checkInvalidKey": true,
        "checkSiteMap": true,
        "uploadWithSourceMap": true,
        "compileHotReLoad": false,
        "babelSetting": {
            "ignore": [],
            "disablePlugins": [],
            "outputPath": ""
        },
        "useIsolateContext": true,
        "useCompilerModule": false,
        "userConfirmedUseCompilerModuleSwitch": false
    },
    "compileType": "miniprogram",
    "libVersion": "2.12.1",
    "appid": "${appid}",
    "projectname": "lin-ui-template",
    "debugOptions": {
        "hidedInDevtools": []
    },
    ${scriptsContent}
    "isGameTourist": false,
    "simulatorType": "wechat",
    "simulatorPluginLibVersion": {},
    "condition": {
        "search": {
            "current": -1,
            "list": []
        },
        "conversation": {
            "current": -1,
            "list": []
        },
        "game": {
            "current": -1,
            "list": []
        },
        "plugin": {
            "current": -1,
            "list": []
        },
        "gamePlugin": {
            "current": -1,
            "list": []
        },
        "miniprogram": {
            "current": -1,
            "list": []
        }
    }
}`
}

export function linuiConfigContent() {
    return `{
    "lin-ui-dir": "lin-ui",
    "miniprogram_npm": "miniprogram_npm"
}`
}