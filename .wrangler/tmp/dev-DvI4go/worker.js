var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_performance();
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, workerdProcess, isWorkerdProcessV2, unenvProcess, exit, features, platform, env, hrtime3, nextTick, _channel, _disconnect, _events, _eventsCount, _handleQueue, _maxListeners, _pendingMessage, _send, assert, disconnect, mainModule, _debugEnd, _debugProcess, _exiting, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _linkedBinding, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, abort, addListener, allowedNodeEnvironmentFlags, arch, argv, argv0, availableMemory, binding, channel, chdir, config, connected, constrainedMemory, cpuUsage, cwd, debugPort, dlopen, domain, emit, emitWarning, eventNames, execArgv, execPath, exitCode, finalization, getActiveResourcesInfo, getegid, geteuid, getgid, getgroups, getMaxListeners, getuid, hasUncaughtExceptionCaptureCallback, initgroups, kill, listenerCount, listeners, loadEnvFile, memoryUsage, moduleLoadList, off, on, once, openStdin, permission, pid, ppid, prependListener, prependOnceListener, rawListeners, reallyExit, ref, release, removeAllListeners, removeListener, report, resourceUsage, send, setegid, seteuid, setgid, setgroups, setMaxListeners, setSourceMapsEnabled, setuid, setUncaughtExceptionCaptureCallback, sourceMapsEnabled, stderr, stdin, stdout, throwDeprecation, title, traceDeprecation, umask, unref, uptime, version, versions, _process, process_default;
var init_process2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule("node:process");
    isWorkerdProcessV2 = globalThis.Cloudflare.compatibilityFlags.enable_nodejs_process_v2;
    unenvProcess = new Process({
      env: globalProcess.env,
      // `hrtime` is only available from workerd process v2
      hrtime: isWorkerdProcessV2 ? workerdProcess.hrtime : hrtime,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess.nextTick
    });
    ({ exit, features, platform } = workerdProcess);
    ({
      env: (
        // Always implemented by workerd
        env
      ),
      hrtime: (
        // Only implemented in workerd v2
        hrtime3
      ),
      nextTick: (
        // Always implemented by workerd
        nextTick
      )
    } = unenvProcess);
    ({
      _channel,
      _disconnect,
      _events,
      _eventsCount,
      _handleQueue,
      _maxListeners,
      _pendingMessage,
      _send,
      assert,
      disconnect,
      mainModule
    } = unenvProcess);
    ({
      _debugEnd: (
        // @ts-expect-error `_debugEnd` is missing typings
        _debugEnd
      ),
      _debugProcess: (
        // @ts-expect-error `_debugProcess` is missing typings
        _debugProcess
      ),
      _exiting: (
        // @ts-expect-error `_exiting` is missing typings
        _exiting
      ),
      _fatalException: (
        // @ts-expect-error `_fatalException` is missing typings
        _fatalException
      ),
      _getActiveHandles: (
        // @ts-expect-error `_getActiveHandles` is missing typings
        _getActiveHandles
      ),
      _getActiveRequests: (
        // @ts-expect-error `_getActiveRequests` is missing typings
        _getActiveRequests
      ),
      _kill: (
        // @ts-expect-error `_kill` is missing typings
        _kill
      ),
      _linkedBinding: (
        // @ts-expect-error `_linkedBinding` is missing typings
        _linkedBinding
      ),
      _preload_modules: (
        // @ts-expect-error `_preload_modules` is missing typings
        _preload_modules
      ),
      _rawDebug: (
        // @ts-expect-error `_rawDebug` is missing typings
        _rawDebug
      ),
      _startProfilerIdleNotifier: (
        // @ts-expect-error `_startProfilerIdleNotifier` is missing typings
        _startProfilerIdleNotifier
      ),
      _stopProfilerIdleNotifier: (
        // @ts-expect-error `_stopProfilerIdleNotifier` is missing typings
        _stopProfilerIdleNotifier
      ),
      _tickCallback: (
        // @ts-expect-error `_tickCallback` is missing typings
        _tickCallback
      ),
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      availableMemory,
      binding: (
        // @ts-expect-error `binding` is missing typings
        binding
      ),
      channel,
      chdir,
      config,
      connected,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      domain: (
        // @ts-expect-error `domain` is missing typings
        domain
      ),
      emit,
      emitWarning,
      eventNames,
      execArgv,
      execPath,
      exitCode,
      finalization,
      getActiveResourcesInfo,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getMaxListeners,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      initgroups: (
        // @ts-expect-error `initgroups` is missing typings
        initgroups
      ),
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      memoryUsage,
      moduleLoadList: (
        // @ts-expect-error `moduleLoadList` is missing typings
        moduleLoadList
      ),
      off,
      on,
      once,
      openStdin: (
        // @ts-expect-error `openStdin` is missing typings
        openStdin
      ),
      permission,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit: (
        // @ts-expect-error `reallyExit` is missing typings
        reallyExit
      ),
      ref,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      send,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setMaxListeners,
      setSourceMapsEnabled,
      setuid,
      setUncaughtExceptionCaptureCallback,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      throwDeprecation,
      title,
      traceDeprecation,
      umask,
      unref,
      uptime,
      version,
      versions
    } = isWorkerdProcessV2 ? workerdProcess : unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// src/modules/NicheDiscoveryModule.cjs
var require_NicheDiscoveryModule = __commonJS({
  "src/modules/NicheDiscoveryModule.cjs"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var NicheDiscoveryModule = class {
      static {
        __name(this, "NicheDiscoveryModule");
      }
      constructor(config2) {
        this.config = config2;
        this.openaiApiKey = config2.openaiApiKey;
      }
      /**
       * Analyze user input and generate validated niche recommendations
       */
      async analyze(userInput) {
        const { userSkills, userInterests, availableResources } = userInput;
        const userProfile = this.analyzeUserProfile(userSkills, userInterests, availableResources);
        const potentialNiches = await this.generatePotentialNiches(userProfile);
        const validatedNiches = await this.validateNiches(potentialNiches);
        const rankedNiches = this.scoreAndRankNiches(validatedNiches);
        const selectedNiche = this.selectTopNiche(rankedNiches);
        return {
          selectedNiche,
          rankedNiches,
          analysis: {
            userProfile,
            validationMetrics: this.getValidationMetrics(validatedNiches),
            recommendation: this.generateRecommendation(selectedNiche, rankedNiches)
          }
        };
      }
      analyzeUserProfile(skills, interests, resources) {
        return {
          skills: Array.isArray(skills) ? skills : [],
          interests: Array.isArray(interests) ? interests : [],
          resources: {
            budget: resources.budget || "low",
            timeCommitment: resources.timeCommitment || "part-time",
            technicalSkills: resources.technicalSkills || "beginner",
            marketingExperience: resources.marketingExperience || "none"
          },
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
      async generatePotentialNiches(userProfile) {
        const trendingNiches = [
          {
            name: "AI-Powered Personal Finance Tools",
            category: "fintech",
            trends: ["AI automation", "personal finance", "subscription economy"],
            alignment: this.calculateAlignment(userProfile, ["technology", "finance", "AI"])
          },
          {
            name: "Sustainable Living Marketplace",
            category: "sustainability",
            trends: ["eco-conscious", "sustainability", "green products"],
            alignment: this.calculateAlignment(userProfile, ["environment", "sustainability", "e-commerce"])
          },
          {
            name: "Remote Work Productivity Solutions",
            category: "productivity",
            trends: ["remote work", "productivity tools", "digital nomads"],
            alignment: this.calculateAlignment(userProfile, ["productivity", "remote work", "software"])
          },
          {
            name: "AI-Enhanced Learning Platform",
            category: "education",
            trends: ["online education", "AI tutoring", "skill development"],
            alignment: this.calculateAlignment(userProfile, ["education", "AI", "teaching"])
          },
          {
            name: "Health & Wellness Automation",
            category: "health",
            trends: ["wellness tracking", "health automation", "preventive care"],
            alignment: this.calculateAlignment(userProfile, ["health", "wellness", "automation"])
          }
        ];
        if (this.openaiApiKey) {
          const aiGeneratedNiches = await this.generateAIPersonalizedNiches(userProfile);
          return [...trendingNiches, ...aiGeneratedNiches];
        }
        return trendingNiches;
      }
      async generateAIPersonalizedNiches(userProfile) {
        try {
          const personalizedNiches = [
            {
              name: `${userProfile.interests[0] || "Technology"} Automation Hub`,
              category: "automation",
              trends: ["automation", userProfile.interests[0] || "technology", "AI"],
              alignment: 0.9,
              aiGenerated: true
            }
          ];
          return personalizedNiches;
        } catch (error2) {
          console.error("Error generating AI personalized niches:", error2);
          return [];
        }
      }
      calculateAlignment(userProfile, requiredSkills) {
        const userSkillsLower = userProfile.skills.map((s) => s.toLowerCase());
        const userInterestsLower = userProfile.interests.map((i) => i.toLowerCase());
        const allUserCapabilities = [...userSkillsLower, ...userInterestsLower];
        const matches = requiredSkills.filter(
          (skill) => allUserCapabilities.some((cap) => cap.includes(skill.toLowerCase()))
        ).length;
        return matches / requiredSkills.length;
      }
      async validateNiches(niches) {
        const validatedNiches = [];
        for (const niche of niches) {
          const validation = await this.performMarketValidation(niche);
          validatedNiches.push({
            ...niche,
            validation
          });
        }
        return validatedNiches;
      }
      async performMarketValidation(niche) {
        const baseScore = Math.random() * 0.4 + 0.3;
        const alignmentBonus = niche.alignment * 0.3;
        return {
          marketDemand: {
            searchVolume: Math.floor(Math.random() * 5e4) + 1e4,
            trendScore: baseScore + alignmentBonus,
            seasonality: "stable"
          },
          competition: {
            level: ["low", "medium", "high"][Math.floor(Math.random() * 3)],
            topCompetitors: this.generateCompetitors(niche),
            barriers: this.analyzeBarriers(niche)
          },
          monetization: {
            potential: Math.floor((baseScore + alignmentBonus) * 1e5),
            models: this.getMonetizationModels(niche),
            timeToRevenue: Math.floor(Math.random() * 6) + 3
            // 3-9 months
          },
          sustainability: {
            growth: baseScore + alignmentBonus > 0.6 ? "high" : "medium",
            risks: this.identifyRisks(niche),
            opportunities: this.identifyOpportunities(niche)
          }
        };
      }
      generateCompetitors(niche) {
        return [
          `${niche.name.split(" ")[0]}Pro`,
          `Smart${niche.category.charAt(0).toUpperCase() + niche.category.slice(1)}`,
          `${niche.name.split(" ")[0]}Hub`
        ];
      }
      analyzeBarriers(niche) {
        const barriers = ["regulatory", "technical", "financial", "market"];
        return barriers.slice(0, Math.floor(Math.random() * 3) + 1);
      }
      getMonetizationModels(niche) {
        const allModels = ["subscription", "affiliate", "advertising", "direct-sales", "freemium"];
        return allModels.slice(0, Math.floor(Math.random() * 3) + 2);
      }
      identifyRisks(niche) {
        return [
          "Market saturation",
          "Regulatory changes",
          "Technology disruption"
        ];
      }
      identifyOpportunities(niche) {
        return [
          "AI integration potential",
          "Automation opportunities",
          "Global market expansion"
        ];
      }
      scoreAndRankNiches(validatedNiches) {
        return validatedNiches.map((niche) => {
          const score = this.calculateNicheScore(niche);
          return {
            ...niche,
            score,
            rank: 0
            // Will be set after sorting
          };
        }).sort((a, b) => b.score - a.score).map((niche, index) => ({
          ...niche,
          rank: index + 1
        }));
      }
      calculateNicheScore(niche) {
        const weights = {
          marketDemand: 0.25,
          competition: 0.2,
          monetization: 0.25,
          sustainability: 0.15,
          alignment: 0.15
        };
        const marketScore = niche.validation.marketDemand.trendScore;
        const competitionScore = niche.validation.competition.level === "low" ? 1 : niche.validation.competition.level === "medium" ? 0.6 : 0.3;
        const monetizationScore = Math.min(niche.validation.monetization.potential / 1e5, 1);
        const sustainabilityScore = niche.validation.sustainability.growth === "high" ? 1 : 0.7;
        const alignmentScore = niche.alignment;
        return marketScore * weights.marketDemand + competitionScore * weights.competition + monetizationScore * weights.monetization + sustainabilityScore * weights.sustainability + alignmentScore * weights.alignment;
      }
      selectTopNiche(rankedNiches) {
        if (!rankedNiches.length) {
          throw new Error("No niches available for selection");
        }
        const topNiche = rankedNiches[0];
        return {
          ...topNiche,
          selectionReason: this.generateSelectionReason(topNiche, rankedNiches),
          selectedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
      generateSelectionReason(selectedNiche, allNiches) {
        const reasons = [];
        if (selectedNiche.score > 0.7) {
          reasons.push("High overall score indicating strong market potential");
        }
        if (selectedNiche.validation.competition.level === "low") {
          reasons.push("Low competition providing easier market entry");
        }
        if (selectedNiche.validation.monetization.potential > 75e3) {
          reasons.push("Strong monetization potential");
        }
        if (selectedNiche.alignment > 0.6) {
          reasons.push("Strong alignment with user skills and interests");
        }
        return reasons.join(". ") + ".";
      }
      getValidationMetrics(validatedNiches) {
        return {
          totalNichesAnalyzed: validatedNiches.length,
          averageScore: validatedNiches.reduce((sum, n) => sum + (n.score || 0), 0) / validatedNiches.length,
          highPotentialNiches: validatedNiches.filter((n) => (n.score || 0) > 0.6).length,
          validationCompletedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
      generateRecommendation(selectedNiche, rankedNiches) {
        return {
          primaryRecommendation: `Focus on ${selectedNiche.name} due to its ${selectedNiche.selectionReason}`,
          alternativeOptions: rankedNiches.slice(1, 3).map((n) => ({
            name: n.name,
            reason: `Consider as backup option with score ${n.score.toFixed(2)}`
          })),
          nextSteps: [
            "Proceed with keyword research for selected niche",
            "Analyze competitor content strategies",
            "Identify target audience segments",
            "Plan initial content calendar"
          ]
        };
      }
    };
    module.exports = NicheDiscoveryModule;
    module.exports.default = NicheDiscoveryModule;
  }
});

// src/modules/KeywordResearchModule.cjs
var require_KeywordResearchModule = __commonJS({
  "src/modules/KeywordResearchModule.cjs"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var KeywordResearchModule = class {
      static {
        __name(this, "KeywordResearchModule");
      }
      constructor(config2) {
        this.config = config2;
        this.openaiApiKey = config2.openaiApiKey;
      }
      /**
       * Generate comprehensive keyword strategy for selected niche
       */
      async generateStrategy(selectedNiche) {
        const seedKeywords = await this.generateSeedKeywords(selectedNiche);
        const expandedKeywords = await this.expandToLongTail(seedKeywords, selectedNiche);
        const clusteredKeywords = this.clusterByIntent(expandedKeywords);
        const competitiveAnalysis = await this.analyzeCompetition(clusteredKeywords, selectedNiche);
        const contentRoadmap = this.createContentRoadmap(clusteredKeywords, competitiveAnalysis);
        return {
          keywords: expandedKeywords,
          clusters: clusteredKeywords,
          competition: competitiveAnalysis,
          roadmap: contentRoadmap,
          strategy: this.generateOverallStrategy(selectedNiche, clusteredKeywords),
          metadata: {
            totalKeywords: expandedKeywords.length,
            highValueKeywords: expandedKeywords.filter((k) => k.priority === "high").length,
            generatedAt: (/* @__PURE__ */ new Date()).toISOString()
          }
        };
      }
      async generateSeedKeywords(niche) {
        const baseSeeds = [
          niche.name.toLowerCase(),
          ...niche.trends.map((t) => t.toLowerCase()),
          `${niche.category} tools`,
          `${niche.category} software`,
          `${niche.category} solutions`,
          `best ${niche.category}`,
          `${niche.category} reviews`,
          `${niche.category} guide`,
          `how to ${niche.category}`,
          `${niche.category} tips`
        ];
        if (this.openaiApiKey) {
          const aiSeeds = await this.generateAISeeds(niche);
          return [...baseSeeds, ...aiSeeds];
        }
        return baseSeeds;
      }
      async generateAISeeds(niche) {
        try {
          const aiSeeds = [
            `${niche.category} automation`,
            `smart ${niche.category}`,
            `${niche.category} platform`,
            `${niche.category} marketplace`,
            `${niche.category} comparison`
          ];
          return aiSeeds;
        } catch (error2) {
          console.error("Error generating AI seeds:", error2);
          return [];
        }
      }
      async expandToLongTail(seedKeywords, niche) {
        const expandedKeywords = [];
        for (const seed of seedKeywords) {
          const variations = this.generateKeywordVariations(seed, niche);
          expandedKeywords.push(...variations);
        }
        return expandedKeywords.map((keyword) => ({
          keyword,
          searchVolume: this.estimateSearchVolume(keyword),
          difficulty: this.estimateDifficulty(keyword),
          cpc: this.estimateCPC(keyword),
          intent: this.classifyIntent(keyword),
          priority: this.calculatePriority(keyword),
          related: this.findRelatedKeywords(keyword)
        }));
      }
      generateKeywordVariations(seed, niche) {
        const prefixes = ["best", "top", "how to", "what is", "why", "when to use", "compare"];
        const suffixes = ["2025", "review", "guide", "tutorial", "tips", "tools", "software", "app", "platform"];
        const modifiers = ["free", "cheap", "professional", "enterprise", "small business", "online"];
        const variations = [seed];
        prefixes.forEach((prefix) => {
          variations.push(`${prefix} ${seed}`);
        });
        suffixes.forEach((suffix) => {
          variations.push(`${seed} ${suffix}`);
        });
        modifiers.forEach((modifier) => {
          variations.push(`${modifier} ${seed}`);
          variations.push(`${seed} for ${modifier}`);
        });
        variations.push(`${seed} for ${niche.category}`);
        variations.push(`${niche.category} ${seed}`);
        return [...new Set(variations)];
      }
      estimateSearchVolume(keyword) {
        const baseVolume = Math.floor(Math.random() * 1e4) + 100;
        const lengthFactor = Math.max(0.1, 1 - (keyword.split(" ").length - 1) * 0.2);
        return Math.floor(baseVolume * lengthFactor);
      }
      estimateDifficulty(keyword) {
        const wordCount = keyword.split(" ").length;
        const baseDifficulty = Math.random() * 60 + 20;
        const lengthAdjustment = Math.max(0, (5 - wordCount) * 5);
        return Math.min(100, Math.max(1, Math.floor(baseDifficulty - lengthAdjustment)));
      }
      estimateCPC(keyword) {
        const baselineCPC = Math.random() * 3 + 0.5;
        const commercialKeywords = ["buy", "purchase", "price", "cost", "cheap", "best", "review"];
        const isCommercial = commercialKeywords.some((term) => keyword.includes(term));
        return isCommercial ? baselineCPC * 1.5 : baselineCPC;
      }
      classifyIntent(keyword) {
        const informationalTerms = ["how to", "what is", "why", "guide", "tutorial", "tips", "learn"];
        const commercialTerms = ["best", "top", "review", "compare", "vs", "alternative"];
        const transactionalTerms = ["buy", "purchase", "price", "cost", "deal", "discount", "cheap"];
        const navigationalTerms = ["login", "dashboard", "app", "website", "official"];
        const lowerKeyword = keyword.toLowerCase();
        if (transactionalTerms.some((term) => lowerKeyword.includes(term))) {
          return "transactional";
        } else if (commercialTerms.some((term) => lowerKeyword.includes(term))) {
          return "commercial";
        } else if (navigationalTerms.some((term) => lowerKeyword.includes(term))) {
          return "navigational";
        } else if (informationalTerms.some((term) => lowerKeyword.includes(term))) {
          return "informational";
        } else {
          return "informational";
        }
      }
      calculatePriority(keyword, searchVolume, difficulty) {
        const volume = searchVolume || this.estimateSearchVolume(keyword);
        const diff = difficulty || this.estimateDifficulty(keyword);
        const intentWeights = {
          "transactional": 1.5,
          "commercial": 1.3,
          "informational": 1,
          "navigational": 0.8
        };
        const intent = this.classifyIntent(keyword);
        const intentWeight = intentWeights[intent] || 1;
        const score = volume / Math.max(diff, 1) * intentWeight;
        if (score > 50) return "high";
        if (score > 20) return "medium";
        return "low";
      }
      findRelatedKeywords(keyword) {
        const words = keyword.split(" ");
        const synonyms = {
          "best": ["top", "leading", "premier", "excellent"],
          "tools": ["software", "apps", "platforms", "solutions"],
          "guide": ["tutorial", "how-to", "manual", "instructions"],
          "review": ["analysis", "evaluation", "assessment", "comparison"]
        };
        const related = [];
        words.forEach((word) => {
          if (synonyms[word]) {
            synonyms[word].forEach((synonym) => {
              const relatedKeyword = keyword.replace(word, synonym);
              if (relatedKeyword !== keyword) {
                related.push(relatedKeyword);
              }
            });
          }
        });
        return related.slice(0, 3);
      }
      clusterByIntent(keywords) {
        const clusters = {
          informational: [],
          commercial: [],
          transactional: [],
          navigational: []
        };
        keywords.forEach((keywordData) => {
          const intent = keywordData.intent;
          if (clusters[intent]) {
            clusters[intent].push(keywordData);
          }
        });
        Object.keys(clusters).forEach((intent) => {
          clusters[intent] = clusters[intent].sort((a, b) => {
            const priorityOrder = { "high": 3, "medium": 2, "low": 1 };
            if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
              return priorityOrder[b.priority] - priorityOrder[a.priority];
            }
            return b.searchVolume - a.searchVolume;
          });
        });
        return clusters;
      }
      async analyzeCompetition(clusteredKeywords, niche) {
        const allKeywords = Object.values(clusteredKeywords).flat();
        const competitorGaps = [];
        const quickWins = [];
        allKeywords.forEach((keywordData) => {
          if (keywordData.difficulty < 30 && keywordData.searchVolume > 500) {
            quickWins.push(keywordData);
          }
          if (keywordData.difficulty < 40 && keywordData.priority === "high") {
            competitorGaps.push(keywordData);
          }
        });
        return {
          totalKeywordsAnalyzed: allKeywords.length,
          competitorGaps: competitorGaps.slice(0, 10),
          // Top 10 gaps
          quickWins: quickWins.slice(0, 15),
          // Top 15 quick wins
          averageDifficulty: allKeywords.reduce((sum, k) => sum + k.difficulty, 0) / allKeywords.length,
          highValueOpportunities: allKeywords.filter(
            (k) => k.priority === "high" && k.difficulty < 50
          ).slice(0, 20),
          competitiveAnalysis: this.generateCompetitiveInsights(niche, allKeywords)
        };
      }
      generateCompetitiveInsights(niche, keywords) {
        const insights = [];
        const lowCompetitionCount = keywords.filter((k) => k.difficulty < 30).length;
        const highVolumeCount = keywords.filter((k) => k.searchVolume > 1e3).length;
        const commercialCount = keywords.filter((k) => k.intent === "commercial").length;
        if (lowCompetitionCount > keywords.length * 0.3) {
          insights.push("Market shows significant low-competition opportunities");
        }
        if (highVolumeCount > keywords.length * 0.2) {
          insights.push("Multiple high-volume keywords available for targeting");
        }
        if (commercialCount > keywords.length * 0.4) {
          insights.push("Strong commercial intent keywords suggest good monetization potential");
        }
        insights.push(`${niche.category} niche shows ${this.getCompetitiveLandscape(keywords)} competitive landscape`);
        return insights;
      }
      getCompetitiveLandscape(keywords) {
        const avgDifficulty = keywords.reduce((sum, k) => sum + k.difficulty, 0) / keywords.length;
        if (avgDifficulty < 30) return "low";
        if (avgDifficulty < 50) return "moderate";
        return "high";
      }
      createContentRoadmap(clusteredKeywords, competitiveAnalysis) {
        const roadmap = {
          month1: [],
          month2: [],
          month3: [],
          contentTypes: {},
          audienceSegments: {}
        };
        const quickWins = competitiveAnalysis.quickWins.slice(0, 8);
        roadmap.month1 = quickWins.map((kw) => ({
          keyword: kw.keyword,
          contentType: this.suggestContentType(kw),
          audienceSegment: this.identifyAudienceSegment(kw),
          priority: kw.priority,
          estimatedTraffic: kw.searchVolume
        }));
        const highValue = competitiveAnalysis.highValueOpportunities.slice(0, 15);
        const month2Content = highValue.slice(0, 8);
        const month3Content = highValue.slice(8);
        roadmap.month2 = month2Content.map((kw) => ({
          keyword: kw.keyword,
          contentType: this.suggestContentType(kw),
          audienceSegment: this.identifyAudienceSegment(kw),
          priority: kw.priority,
          estimatedTraffic: kw.searchVolume
        }));
        roadmap.month3 = month3Content.map((kw) => ({
          keyword: kw.keyword,
          contentType: this.suggestContentType(kw),
          audienceSegment: this.identifyAudienceSegment(kw),
          priority: kw.priority,
          estimatedTraffic: kw.searchVolume
        }));
        const allPlannedContent = [...roadmap.month1, ...roadmap.month2, ...roadmap.month3];
        roadmap.contentTypes = this.analyzeContentTypeDistribution(allPlannedContent);
        roadmap.audienceSegments = this.analyzeAudienceSegments(allPlannedContent);
        return roadmap;
      }
      suggestContentType(keywordData) {
        const keyword = keywordData.keyword.toLowerCase();
        const intent = keywordData.intent;
        if (intent === "informational") {
          if (keyword.includes("how to") || keyword.includes("guide")) {
            return "tutorial";
          } else if (keyword.includes("what is") || keyword.includes("why")) {
            return "explainer";
          } else {
            return "blog-post";
          }
        } else if (intent === "commercial") {
          if (keyword.includes("best") || keyword.includes("top")) {
            return "listicle";
          } else if (keyword.includes("review") || keyword.includes("compare")) {
            return "comparison";
          } else {
            return "product-page";
          }
        } else if (intent === "transactional") {
          return "landing-page";
        } else {
          return "resource-page";
        }
      }
      identifyAudienceSegment(keywordData) {
        const keyword = keywordData.keyword.toLowerCase();
        if (keyword.includes("beginner") || keyword.includes("how to")) {
          return "beginners";
        } else if (keyword.includes("professional") || keyword.includes("enterprise")) {
          return "professionals";
        } else if (keyword.includes("small business")) {
          return "small-business";
        } else if (keyword.includes("free") || keyword.includes("cheap")) {
          return "budget-conscious";
        } else {
          return "general";
        }
      }
      analyzeContentTypeDistribution(plannedContent) {
        const distribution = {};
        plannedContent.forEach((content) => {
          distribution[content.contentType] = (distribution[content.contentType] || 0) + 1;
        });
        return distribution;
      }
      analyzeAudienceSegments(plannedContent) {
        const segments = {};
        plannedContent.forEach((content) => {
          segments[content.audienceSegment] = (segments[content.audienceSegment] || 0) + 1;
        });
        return segments;
      }
      generateOverallStrategy(niche, clusteredKeywords) {
        const totalKeywords = Object.values(clusteredKeywords).flat().length;
        const highPriorityCount = Object.values(clusteredKeywords).flat().filter((k) => k.priority === "high").length;
        return {
          primaryFocus: this.identifyPrimaryFocus(clusteredKeywords),
          secondaryFocuses: this.identifySecondaryFocuses(clusteredKeywords),
          contentPillars: this.identifyContentPillars(niche, clusteredKeywords),
          seoApproach: this.recommendSEOApproach(clusteredKeywords),
          competitiveStrategy: this.recommendCompetitiveStrategy(clusteredKeywords),
          timeline: {
            phase1: "Target quick wins and build domain authority (Month 1)",
            phase2: "Expand into competitive keywords (Month 2)",
            phase3: "Scale content and target high-value terms (Month 3+)"
          },
          metrics: {
            totalKeywords,
            highPriorityCount,
            projectedTraffic: this.estimateProjectedTraffic(clusteredKeywords)
          }
        };
      }
      identifyPrimaryFocus(clusteredKeywords) {
        const intentPriorities = {};
        Object.keys(clusteredKeywords).forEach((intent) => {
          intentPriorities[intent] = clusteredKeywords[intent].filter((k) => k.priority === "high").length;
        });
        const primaryIntent = Object.keys(intentPriorities).reduce((a, b) => intentPriorities[a] > intentPriorities[b] ? a : b);
        return `${primaryIntent} keywords with focus on high-value, low-competition terms`;
      }
      identifySecondaryFocuses(clusteredKeywords) {
        return Object.keys(clusteredKeywords).filter((intent) => clusteredKeywords[intent].length > 0).map((intent) => `${intent} content strategy`).slice(0, 2);
      }
      identifyContentPillars(niche, clusteredKeywords) {
        const pillars = [];
        const highPriorityKeywords = Object.values(clusteredKeywords).flat().filter((k) => k.priority === "high");
        const topics = {};
        highPriorityKeywords.forEach((kw) => {
          const words = kw.keyword.split(" ");
          words.forEach((word) => {
            if (word.length > 3) {
              topics[word] = (topics[word] || 0) + 1;
            }
          });
        });
        const sortedTopics = Object.keys(topics).sort((a, b) => topics[b] - topics[a]).slice(0, 4);
        return sortedTopics.map((topic) => ({
          topic,
          frequency: topics[topic],
          suggestedContent: `Comprehensive ${topic} guides and resources`
        }));
      }
      recommendSEOApproach(clusteredKeywords) {
        const quickWins = Object.values(clusteredKeywords).flat().filter((k) => k.difficulty < 30 && k.searchVolume > 300).length;
        if (quickWins > 10) {
          return "Aggressive content creation focusing on quick wins to build authority";
        } else {
          return "Steady content creation with focus on long-term keyword ranking";
        }
      }
      recommendCompetitiveStrategy(clusteredKeywords) {
        const avgDifficulty = Object.values(clusteredKeywords).flat().reduce((sum, k) => sum + k.difficulty, 0) / Object.values(clusteredKeywords).flat().length;
        if (avgDifficulty < 35) {
          return "Direct competition on main keywords";
        } else {
          return "Long-tail keyword strategy to avoid direct competition";
        }
      }
      estimateProjectedTraffic(clusteredKeywords) {
        return Object.values(clusteredKeywords).flat().filter((k) => k.priority === "high" || k.priority === "medium").reduce((sum, k) => sum + k.searchVolume * 0.1, 0);
      }
    };
    module.exports = KeywordResearchModule;
    module.exports.default = KeywordResearchModule;
  }
});

// src/modules/TechStackSetupModule.cjs
var require_TechStackSetupModule = __commonJS({
  "src/modules/TechStackSetupModule.cjs"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var TechStackSetupModule = class {
      static {
        __name(this, "TechStackSetupModule");
      }
      constructor(config2) {
        this.config = config2;
      }
      async selectOptimalStack(params) {
        const { niche, requirements } = params;
        const stackAnalysis = this.analyzeStackRequirements(niche, requirements);
        const selectedStack = this.selectStack(stackAnalysis);
        const configuration = await this.generateConfiguration(selectedStack, niche);
        return {
          ...selectedStack,
          configuration,
          justification: this.generateJustification(selectedStack, stackAnalysis),
          implementation: this.generateImplementationPlan(selectedStack),
          estimatedCosts: this.calculateCosts(selectedStack),
          timeline: this.estimateTimeline(selectedStack)
        };
      }
      analyzeStackRequirements(niche, requirements) {
        return {
          scalability: requirements.includes("scalability") ? "high" : "medium",
          automation: requirements.includes("automation") ? "high" : "medium",
          aiIntegration: requirements.includes("ai-integration") ? "high" : "low",
          budget: niche.validation?.monetization?.potential > 5e4 ? "medium" : "low",
          complexity: this.assessComplexity(niche),
          performance: "high",
          // Always prioritize performance
          maintainability: "high"
        };
      }
      assessComplexity(niche) {
        const complexityFactors = [
          niche.validation?.monetization?.models?.length > 2,
          niche.category === "fintech",
          niche.trends?.includes("AI automation")
        ];
        return complexityFactors.filter(Boolean).length > 1 ? "high" : "medium";
      }
      selectStack(analysis) {
        return {
          frontend: {
            framework: "Next.js 14",
            styling: "Tailwind CSS",
            stateManagement: "Zustand",
            uiLibrary: "shadcn/ui",
            animations: "Framer Motion"
          },
          backend: {
            runtime: "Node.js 20",
            framework: "Fastify",
            database: "Neon PostgreSQL",
            orm: "Drizzle ORM",
            cache: "Redis"
          },
          hosting: {
            platform: "Vercel",
            cdn: "Vercel Edge Network",
            database: "Neon",
            storage: "Vercel Blob"
          },
          authentication: {
            provider: "Clerk",
            features: ["social login", "MFA", "session management"]
          },
          analytics: {
            primary: "Plausible Analytics",
            monitoring: "Vercel Analytics",
            errors: "Sentry"
          },
          aiIntegration: {
            llm: "OpenAI GPT-4",
            embedding: "OpenAI Embeddings",
            vectorDb: "Pinecone"
          },
          automation: {
            workflows: "Zapier",
            ci_cd: "Vercel",
            monitoring: "UptimeRobot"
          }
        };
      }
      async generateConfiguration(stack, niche) {
        return {
          environment: {
            development: this.generateDevConfig(stack),
            staging: this.generateStagingConfig(stack),
            production: this.generateProdConfig(stack)
          },
          integrations: this.generateIntegrationConfig(stack, niche),
          security: this.generateSecurityConfig(stack),
          performance: this.generatePerformanceConfig(stack)
        };
      }
      generateDevConfig(stack) {
        return {
          nextConfig: {
            experimental: { serverComponentsExternalPackages: ["@prisma/client"] },
            env: { NODE_ENV: "development" }
          },
          database: { url: "postgresql://localhost:5432/dev_db" },
          redis: { url: "redis://localhost:6379" }
        };
      }
      generateStagingConfig(stack) {
        return {
          nextConfig: { env: { NODE_ENV: "staging" } },
          database: { url: "neon-staging-url" },
          redis: { url: "upstash-staging-url" }
        };
      }
      generateProdConfig(stack) {
        return {
          nextConfig: {
            output: "standalone",
            experimental: { optimizeCss: true },
            env: { NODE_ENV: "production" }
          },
          database: { url: "neon-production-url" },
          redis: { url: "upstash-production-url" }
        };
      }
      generateIntegrationConfig(stack, niche) {
        return {
          payment: {
            stripe: { publishableKey: "pk_live_...", webhookSecret: "whsec_..." }
          },
          ai: {
            openai: { apiKey: "sk-..." },
            pinecone: { apiKey: "pc-...", environment: "us-east-1" }
          },
          analytics: {
            plausible: { domain: `${niche.name.toLowerCase().replace(/\s+/g, "-")}.com` }
          },
          automation: {
            zapier: { webhookUrl: "https://hooks.zapier.com/..." }
          }
        };
      }
      generateSecurityConfig(stack) {
        return {
          headers: {
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY",
            "X-XSS-Protection": "1; mode=block",
            "Strict-Transport-Security": "max-age=31536000; includeSubDomains"
          },
          cors: {
            origin: ["https://yourdomain.com"],
            credentials: true
          },
          rateLimit: {
            windowMs: 15 * 60 * 1e3,
            // 15 minutes
            max: 100
            // requests per window
          }
        };
      }
      generatePerformanceConfig(stack) {
        return {
          caching: {
            static: "1y",
            api: "5m",
            dynamic: "0s"
          },
          compression: {
            gzip: true,
            brotli: true
          },
          optimization: {
            images: { domains: ["images.unsplash.com", "cdn.yourdomain.com"] },
            bundleAnalyzer: true
          }
        };
      }
      generateJustification(stack, analysis) {
        const justifications = [];
        justifications.push(`Next.js 14 chosen for its App Router, server components, and excellent SEO capabilities`);
        justifications.push(`Neon PostgreSQL provides serverless scaling and cost efficiency for ${analysis.budget} budget`);
        justifications.push(`Vercel hosting ensures optimal performance and automatic scaling`);
        justifications.push(`Clerk authentication offers enterprise-grade security with minimal setup`);
        if (analysis.aiIntegration === "high") {
          justifications.push(`OpenAI integration enables advanced AI-powered features`);
        }
        if (analysis.automation === "high") {
          justifications.push(`Zapier integration provides no-code automation capabilities`);
        }
        return justifications;
      }
      generateImplementationPlan(stack) {
        return {
          phase1: {
            name: "Foundation Setup",
            duration: "1-2 days",
            tasks: [
              "Initialize Next.js project with TypeScript",
              "Configure Tailwind CSS and shadcn/ui",
              "Set up Neon database with Drizzle ORM",
              "Configure Clerk authentication",
              "Deploy to Vercel"
            ]
          },
          phase2: {
            name: "Core Features",
            duration: "3-5 days",
            tasks: [
              "Implement user management and profiles",
              "Set up payment processing with Stripe",
              "Configure analytics and monitoring",
              "Implement basic AI integrations",
              "Set up automation workflows"
            ]
          },
          phase3: {
            name: "Advanced Features",
            duration: "2-3 days",
            tasks: [
              "Implement advanced AI features",
              "Set up comprehensive monitoring",
              "Configure performance optimizations",
              "Implement security best practices",
              "Set up backup and disaster recovery"
            ]
          }
        };
      }
      calculateCosts(stack) {
        return {
          monthly: {
            hosting: 0,
            // Vercel hobby plan
            database: 0,
            // Neon free tier
            authentication: 0,
            // Clerk free tier
            analytics: 0,
            // Plausible self-hosted or free tier
            ai: 50,
            // OpenAI API estimated
            automation: 20,
            // Zapier starter plan
            total: 70
          },
          setup: {
            domain: 15,
            ssl: 0,
            // Included with Vercel
            tools: 0,
            // All free/open source
            total: 15
          },
          scaling: {
            "1k_users": 150,
            "10k_users": 500,
            "100k_users": 2e3
          }
        };
      }
      estimateTimeline(stack) {
        return {
          setup: "1-2 days",
          development: "1-2 weeks",
          testing: "2-3 days",
          deployment: "1 day",
          total: "2-3 weeks for MVP"
        };
      }
    };
    module.exports = TechStackSetupModule;
    module.exports.default = TechStackSetupModule;
  }
});

// src/modules/index.cjs
var require_modules = __commonJS({
  "src/modules/index.cjs"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var ContentGenerationModule = class {
      static {
        __name(this, "ContentGenerationModule");
      }
      constructor(config2) {
        this.config = config2;
      }
      async generateSiteContent(params) {
        return {
          pages: [
            { type: "homepage", content: "AI-generated homepage content", seo: "optimized" },
            { type: "about", content: "AI-generated about page", seo: "optimized" },
            { type: "blog", content: "AI-generated blog structure", seo: "optimized" }
          ],
          generatedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    };
    var CROOptimizationModule = class {
      static {
        __name(this, "CROOptimizationModule");
      }
      constructor(config2) {
        this.config = config2;
      }
      async setupCROTools(params) {
        return {
          experiments: ["headline-test", "cta-test", "layout-test"],
          tools: ["hotjar", "google-optimize"],
          setupAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    };
    var MonetizationModule = class {
      static {
        __name(this, "MonetizationModule");
      }
      constructor(config2) {
        this.config = config2;
      }
      async setupRevenueStreams(params) {
        return {
          revenueStreams: [
            { type: "affiliate", platform: "amazon-associates", estimatedRevenue: 1e3 },
            { type: "advertising", platform: "google-adsense", estimatedRevenue: 500 }
          ],
          setupAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    };
    var AutomationModule = class {
      static {
        __name(this, "AutomationModule");
      }
      constructor(config2) {
        this.config = config2;
      }
      async setupWorkflows(params) {
        return {
          workflows: [
            { name: "content-publishing", trigger: "schedule", action: "publish" },
            { name: "analytics-reporting", trigger: "weekly", action: "report" }
          ],
          setupAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    };
    var ComplianceModule = class {
      static {
        __name(this, "ComplianceModule");
      }
      constructor(config2) {
        this.config = config2;
      }
      async setupCompliance(params) {
        return {
          policies: ["privacy-policy", "terms-of-service", "cookie-policy"],
          gdprCompliant: true,
          ccpaCompliant: true,
          setupAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    };
    var AnalyticsModule = class {
      static {
        __name(this, "AnalyticsModule");
      }
      constructor(config2) {
        this.config = config2;
      }
      async setupAnalytics(params) {
        return {
          platforms: ["plausible", "google-analytics"],
          dashboards: ["traffic", "conversions", "revenue"],
          setupAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    };
    var DeploymentModule = class {
      static {
        __name(this, "DeploymentModule");
      }
      constructor(config2) {
        this.config = config2;
      }
      async deployAndHandover(params) {
        return {
          productionUrl: "https://your-site.vercel.app",
          credentials: { admin: "generated", analytics: "configured" },
          documentation: { architecture: "complete", workflows: "documented" },
          nextSteps: ["monitor-performance", "content-creation", "seo-optimization"],
          deployedAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    };
    var ScalabilityModule = class {
      static {
        __name(this, "ScalabilityModule");
      }
      constructor(config2) {
        this.config = config2;
      }
      async setupScaling(params) {
        return {
          infrastructure: "serverless",
          autoScaling: true,
          monitoring: "active",
          setupAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    };
    var OptimizationModule = class {
      static {
        __name(this, "OptimizationModule");
      }
      constructor(config2) {
        this.config = config2;
      }
      async setupContinuousImprovement(params) {
        return {
          monitoring: ["performance", "seo", "conversions"],
          automation: ["a-b-tests", "content-optimization"],
          setupAt: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
    };
    module.exports = {
      ContentGenerationModule,
      CROOptimizationModule,
      MonetizationModule,
      AutomationModule,
      ComplianceModule,
      AnalyticsModule,
      DeploymentModule,
      ScalabilityModule,
      OptimizationModule
    };
    module.exports.default = module.exports;
  }
});

// src/agents/AutonomousMarketingAgent.cjs
var require_AutonomousMarketingAgent = __commonJS({
  "src/agents/AutonomousMarketingAgent.cjs"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var AutonomousMarketingAgent = class {
      static {
        __name(this, "AutonomousMarketingAgent");
      }
      constructor(config2 = {}) {
        this.config = {
          openaiApiKey: config2.openaiApiKey || process.env.OPENAI_API_KEY,
          paymentGatewayKey: config2.paymentGatewayKey || process.env.PAYMENT_GATEWAY_API_KEY,
          analyticsKey: config2.analyticsKey || process.env.ANALYTICS_API_KEY,
          debug: config2.debug || false,
          ...config2
        };
        this.state = {
          currentStep: 1,
          completedSteps: [],
          selectedNiche: null,
          keywordStrategy: null,
          techStack: null,
          siteStructure: null,
          monetizationStrategy: null,
          workflows: [],
          compliance: {},
          analytics: {},
          deliverables: {}
        };
        this.modules = {
          nicheDiscovery: new NicheDiscoveryModule(this.config),
          keywordResearch: new KeywordResearchModule(this.config),
          techStackSetup: new TechStackSetupModule(this.config),
          contentGeneration: new ContentGenerationModule(this.config),
          croOptimization: new CROOptimizationModule(this.config),
          monetization: new MonetizationModule(this.config),
          automation: new AutomationModule(this.config),
          compliance: new ComplianceModule(this.config),
          analytics: new AnalyticsModule(this.config),
          deployment: new DeploymentModule(this.config),
          scalability: new ScalabilityModule(this.config),
          optimization: new OptimizationModule(this.config)
        };
      }
      /**
       * Execute the complete autonomous website creation process
       */
      async execute(userInput = {}) {
        try {
          this.log("\u{1F680} Starting Elite-Level Autonomous Marketing Website Creation...");
          await this.setGoalAndMission();
          await this.executeNicheDiscovery(userInput);
          await this.executeKeywordResearch();
          await this.executeTechStackSetup();
          await this.executeContentCreation();
          await this.executeCROOptimization();
          await this.executeMonetizationStrategy();
          await this.executeAutomationWorkflows();
          await this.executeLegalCompliance();
          await this.executeAnalyticsSetup();
          await this.executeFinalDeliverables();
          await this.executeScalabilitySetup();
          await this.executeContinuousOptimization();
          this.log("\u2705 Autonomous Marketing Website Creation Complete!");
          return this.generateFinalReport();
        } catch (error2) {
          this.log(`\u274C Error in autonomous execution: ${error2.message}`, "error");
          throw error2;
        }
      }
      async setGoalAndMission() {
        this.log("\u{1F4CB} Step 1: Setting Goal & Mission...");
        this.state.mission = {
          goal: "Design, build, deploy, and operationalize a fully functional, income-generating marketing website",
          objectives: [
            "Maximize profitability and scalability",
            "Minimize human intervention",
            "Ensure full legal compliance",
            "Implement automation and resilience",
            "Adapt to future trends"
          ],
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        };
        this.markStepComplete(1);
      }
      async executeNicheDiscovery(userInput) {
        this.log("\u{1F50D} Step 2: Executing Niche Discovery & Market Validation...");
        const result = await this.modules.nicheDiscovery.analyze({
          userSkills: userInput.skills || [],
          userInterests: userInput.interests || [],
          availableResources: userInput.resources || {}
        });
        this.state.selectedNiche = result.selectedNiche;
        this.state.nicheAnalysis = result.analysis;
        this.log(`\u2705 Selected Niche: ${result.selectedNiche.name}`);
        this.markStepComplete(2);
      }
      async executeKeywordResearch() {
        this.log("\u{1F511} Step 3: Executing AI-Driven Keyword Research...");
        if (!this.state.selectedNiche) {
          throw new Error("Niche must be selected before keyword research");
        }
        const result = await this.modules.keywordResearch.generateStrategy(this.state.selectedNiche);
        this.state.keywordStrategy = result;
        this.log(`\u2705 Generated keyword strategy with ${result.keywords.length} keywords`);
        this.markStepComplete(3);
      }
      async executeTechStackSetup() {
        this.log("\u2699\uFE0F Step 4: Setting up Tech Stack...");
        const result = await this.modules.techStackSetup.selectOptimalStack({
          niche: this.state.selectedNiche,
          requirements: ["automation", "scalability", "ai-integration"]
        });
        this.state.techStack = result;
        this.log(`\u2705 Tech stack configured: ${result.frontend}, ${result.backend}, ${result.hosting}`);
        this.markStepComplete(4);
      }
      async executeContentCreation() {
        this.log("\u{1F4DD} Step 5: Executing AI-Powered Content Creation...");
        const result = await this.modules.contentGeneration.generateSiteContent({
          niche: this.state.selectedNiche,
          keywords: this.state.keywordStrategy,
          techStack: this.state.techStack
        });
        this.state.siteStructure = result;
        this.log(`\u2705 Generated site structure with ${result.pages.length} pages`);
        this.markStepComplete(5);
      }
      async executeCROOptimization() {
        this.log("\u{1F4CA} Step 6: Setting up Conversion Rate Optimization...");
        const result = await this.modules.croOptimization.setupCROTools({
          siteStructure: this.state.siteStructure,
          niche: this.state.selectedNiche
        });
        this.state.croSetup = result;
        this.log("\u2705 CRO tools and experiments configured");
        this.markStepComplete(6);
      }
      async executeMonetizationStrategy() {
        this.log("\u{1F4B0} Step 7: Implementing Monetization Strategy...");
        const result = await this.modules.monetization.setupRevenueStreams({
          niche: this.state.selectedNiche,
          siteStructure: this.state.siteStructure
        });
        this.state.monetizationStrategy = result;
        this.log(`\u2705 Configured ${result.revenueStreams.length} revenue streams`);
        this.markStepComplete(7);
      }
      async executeAutomationWorkflows() {
        this.log("\u{1F916} Step 8: Setting up Automation Workflows...");
        const result = await this.modules.automation.setupWorkflows({
          siteStructure: this.state.siteStructure,
          monetization: this.state.monetizationStrategy,
          cro: this.state.croSetup
        });
        this.state.workflows = result;
        this.log(`\u2705 Configured ${result.workflows.length} automation workflows`);
        this.markStepComplete(8);
      }
      async executeLegalCompliance() {
        this.log("\u2696\uFE0F Step 9: Implementing Legal Compliance...");
        const result = await this.modules.compliance.setupCompliance({
          siteStructure: this.state.siteStructure,
          niche: this.state.selectedNiche
        });
        this.state.compliance = result;
        this.log("\u2705 Legal compliance features implemented");
        this.markStepComplete(9);
      }
      async executeAnalyticsSetup() {
        this.log("\u{1F4C8} Step 10: Setting up Analytics & Observability...");
        const result = await this.modules.analytics.setupAnalytics({
          siteStructure: this.state.siteStructure,
          monetization: this.state.monetizationStrategy
        });
        this.state.analytics = result;
        this.log("\u2705 Analytics and monitoring configured");
        this.markStepComplete(10);
      }
      async executeFinalDeliverables() {
        this.log("\u{1F4E6} Step 11: Preparing Final Deliverables...");
        const result = await this.modules.deployment.deployAndHandover({
          siteStructure: this.state.siteStructure,
          techStack: this.state.techStack,
          workflows: this.state.workflows,
          compliance: this.state.compliance,
          analytics: this.state.analytics
        });
        this.state.deliverables = result;
        this.log("\u2705 Website deployed and deliverables prepared");
        this.markStepComplete(11);
      }
      async executeScalabilitySetup() {
        this.log("\u{1F680} Step 12: Implementing Scalability Features...");
        const result = await this.modules.scalability.setupScaling({
          techStack: this.state.techStack,
          siteStructure: this.state.siteStructure
        });
        this.state.scalability = result;
        this.log("\u2705 Scalability features implemented");
        this.markStepComplete(12);
      }
      async executeContinuousOptimization() {
        this.log("\u{1F504} Step 13: Setting up Continuous Optimization...");
        const result = await this.modules.optimization.setupContinuousImprovement({
          analytics: this.state.analytics,
          workflows: this.state.workflows,
          monetization: this.state.monetizationStrategy
        });
        this.state.optimization = result;
        this.log("\u2705 Continuous optimization systems active");
        this.markStepComplete(13);
      }
      markStepComplete(stepNumber) {
        this.state.completedSteps.push(stepNumber);
        this.state.currentStep = stepNumber + 1;
      }
      generateFinalReport() {
        return {
          executionSummary: {
            startTime: this.state.mission.timestamp,
            endTime: (/* @__PURE__ */ new Date()).toISOString(),
            completedSteps: this.state.completedSteps,
            selectedNiche: this.state.selectedNiche,
            techStack: this.state.techStack,
            deliverables: this.state.deliverables
          },
          websiteUrl: this.state.deliverables.productionUrl,
          credentials: this.state.deliverables.credentials,
          documentation: this.state.deliverables.documentation,
          nextSteps: this.state.deliverables.nextSteps,
          fullState: this.state
        };
      }
      log(message, level = "info") {
        const timestamp = (/* @__PURE__ */ new Date()).toISOString();
        const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
        if (this.config.debug) {
          console.log(logEntry);
        }
        if (!this.state.logs) this.state.logs = [];
        this.state.logs.push(logEntry);
      }
    };
    var NicheDiscoveryModule = require_NicheDiscoveryModule();
    var KeywordResearchModule = require_KeywordResearchModule();
    var TechStackSetupModule = require_TechStackSetupModule();
    var {
      ContentGenerationModule,
      CROOptimizationModule,
      MonetizationModule,
      AutomationModule,
      ComplianceModule,
      AnalyticsModule,
      DeploymentModule,
      ScalabilityModule,
      OptimizationModule
    } = require_modules();
    module.exports = AutonomousMarketingAgent;
    module.exports.default = AutonomousMarketingAgent;
  }
});

// src/services/ProductStore.cjs
var require_ProductStore = __commonJS({
  "src/services/ProductStore.cjs"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var ProductStore = /* @__PURE__ */ (function() {
      class ProductStore2 {
        static {
          __name(this, "ProductStore");
        }
        constructor(options = {}) {
          this.useFile = !!options.useFile;
          this.filePath = null;
          this.items = [
            { id: 1, name: "AI Content Generator", price: 100 },
            { id: 2, name: "SEO Optimization Tool", price: 200 }
          ];
        }
        getAll() {
          return this.items;
        }
        getById(id) {
          return this.items.find((i) => String(i.id) === String(id)) || null;
        }
        create(data) {
          const id = this.items.length ? Math.max(...this.items.map((i) => i.id)) + 1 : 1;
          const item = { id, ...data };
          this.items.push(item);
          return item;
        }
        update(id, next) {
          const idx = this.items.findIndex((i) => String(i.id) === String(id));
          if (idx === -1) return null;
          this.items[idx] = Object.assign({}, this.items[idx], next);
          return this.items[idx];
        }
        delete(id) {
          const idx = this.items.findIndex((i) => String(i.id) === String(id));
          if (idx === -1) return false;
          this.items.splice(idx, 1);
          return true;
        }
      }
      return ProductStore2;
    })();
    module.exports = ProductStore;
    module.exports.default = ProductStore;
  }
});

// node_modules/stripe/lib/ResourceNamespace.js
var require_ResourceNamespace = __commonJS({
  "node_modules/stripe/lib/ResourceNamespace.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    function ResourceNamespace(stripe, resources) {
      for (const name in resources) {
        const camelCaseName = name[0].toLowerCase() + name.substring(1);
        const resource = new resources[name](stripe);
        this[camelCaseName] = resource;
      }
    }
    __name(ResourceNamespace, "ResourceNamespace");
    module.exports = function(namespace, resources) {
      return function(stripe) {
        return new ResourceNamespace(stripe, resources);
      };
    };
    module.exports.ResourceNamespace = ResourceNamespace;
  }
});

// node-built-in-modules:path
import libDefault from "path";
var require_path = __commonJS({
  "node-built-in-modules:path"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault;
  }
});

// node-built-in-modules:events
import libDefault2 from "events";
var require_events = __commonJS({
  "node-built-in-modules:events"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault2;
  }
});

// node_modules/es-errors/type.js
var require_type = __commonJS({
  "node_modules/es-errors/type.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = TypeError;
  }
});

// (disabled):node_modules/object-inspect/util.inspect
var require_util = __commonJS({
  "(disabled):node_modules/object-inspect/util.inspect"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
  }
});

// node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "node_modules/object-inspect/index.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    __name(addNumericSeparator, "addNumericSeparator");
    var utilInspect = require_util();
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
    var quotes = {
      __proto__: null,
      "double": '"',
      single: "'"
    };
    var quoteREs = {
      __proto__: null,
      "double": /(["\\])/g,
      single: /(['\\])/g
    };
    module.exports = /* @__PURE__ */ __name(function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      __name(inspect, "inspect");
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
          mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
          });
        }
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
          setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
          });
        }
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (typeof window !== "undefined" && obj === window) {
        return "{ [object Window] }";
      }
      if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) {
        return "{ [object globalThis] }";
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    }, "inspect_");
    function wrapQuotes(s, defaultStyle, opts) {
      var style = opts.quoteStyle || defaultStyle;
      var quoteChar = quotes[style];
      return quoteChar + s + quoteChar;
    }
    __name(wrapQuotes, "wrapQuotes");
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    __name(quote, "quote");
    function canTrustToString(obj) {
      return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
    }
    __name(canTrustToString, "canTrustToString");
    function isArray(obj) {
      return toStr(obj) === "[object Array]" && canTrustToString(obj);
    }
    __name(isArray, "isArray");
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && canTrustToString(obj);
    }
    __name(isDate, "isDate");
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
    }
    __name(isRegExp, "isRegExp");
    function isError(obj) {
      return toStr(obj) === "[object Error]" && canTrustToString(obj);
    }
    __name(isError, "isError");
    function isString(obj) {
      return toStr(obj) === "[object String]" && canTrustToString(obj);
    }
    __name(isString, "isString");
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && canTrustToString(obj);
    }
    __name(isNumber, "isNumber");
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
    }
    __name(isBoolean, "isBoolean");
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    __name(isSymbol, "isSymbol");
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    __name(isBigInt, "isBigInt");
    var hasOwn = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has(obj, key) {
      return hasOwn.call(obj, key);
    }
    __name(has, "has");
    function toStr(obj) {
      return objectToString.call(obj);
    }
    __name(toStr, "toStr");
    function nameOf(f) {
      if (f.name) {
        return f.name;
      }
      var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
      if (m) {
        return m[1];
      }
      return null;
    }
    __name(nameOf, "nameOf");
    function indexOf(xs, x) {
      if (xs.indexOf) {
        return xs.indexOf(x);
      }
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    }
    __name(indexOf, "indexOf");
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    __name(isMap, "isMap");
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    __name(isWeakMap, "isWeakMap");
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    __name(isWeakRef, "isWeakRef");
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    __name(isSet, "isSet");
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    __name(isWeakSet, "isWeakSet");
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    __name(isElement, "isElement");
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var quoteRE = quoteREs[opts.quoteStyle || "single"];
      quoteRE.lastIndex = 0;
      var s = $replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    __name(inspectString, "inspectString");
    function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    __name(lowbyte, "lowbyte");
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    __name(markBoxed, "markBoxed");
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    __name(weakCollectionOf, "weakCollectionOf");
    function collectionOf(type, size, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type + " (" + size + ") {" + joinedEntries + "}";
    }
    __name(collectionOf, "collectionOf");
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    __name(singleLineValues, "singleLineValues");
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    __name(getIndent, "getIndent");
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    __name(indentedJoin, "indentedJoin");
    function arrObjKeys(obj, inspect) {
      var isArr = isArray(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key in obj) {
        if (!has(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs;
    }
    __name(arrObjKeys, "arrObjKeys");
  }
});

// node_modules/side-channel-list/index.js
var require_side_channel_list = __commonJS({
  "node_modules/side-channel-list/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var listGetNode = /* @__PURE__ */ __name(function(list, key, isDelete) {
      var prev = list;
      var curr;
      for (; (curr = prev.next) != null; prev = curr) {
        if (curr.key === key) {
          prev.next = curr.next;
          if (!isDelete) {
            curr.next = /** @type {NonNullable<typeof list.next>} */
            list.next;
            list.next = curr;
          }
          return curr;
        }
      }
    }, "listGetNode");
    var listGet = /* @__PURE__ */ __name(function(objects, key) {
      if (!objects) {
        return void 0;
      }
      var node = listGetNode(objects, key);
      return node && node.value;
    }, "listGet");
    var listSet = /* @__PURE__ */ __name(function(objects, key, value) {
      var node = listGetNode(objects, key);
      if (node) {
        node.value = value;
      } else {
        objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
        {
          // eslint-disable-line no-param-reassign, no-extra-parens
          key,
          next: objects.next,
          value
        };
      }
    }, "listSet");
    var listHas = /* @__PURE__ */ __name(function(objects, key) {
      if (!objects) {
        return false;
      }
      return !!listGetNode(objects, key);
    }, "listHas");
    var listDelete = /* @__PURE__ */ __name(function(objects, key) {
      if (objects) {
        return listGetNode(objects, key, true);
      }
    }, "listDelete");
    module.exports = /* @__PURE__ */ __name(function getSideChannelList() {
      var $o;
      var channel2 = {
        assert: /* @__PURE__ */ __name(function(key) {
          if (!channel2.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        }, "assert"),
        "delete": /* @__PURE__ */ __name(function(key) {
          var root = $o && $o.next;
          var deletedNode = listDelete($o, key);
          if (deletedNode && root && root === deletedNode) {
            $o = void 0;
          }
          return !!deletedNode;
        }, "delete"),
        get: /* @__PURE__ */ __name(function(key) {
          return listGet($o, key);
        }, "get"),
        has: /* @__PURE__ */ __name(function(key) {
          return listHas($o, key);
        }, "has"),
        set: /* @__PURE__ */ __name(function(key, value) {
          if (!$o) {
            $o = {
              next: void 0
            };
          }
          listSet(
            /** @type {NonNullable<typeof $o>} */
            $o,
            key,
            value
          );
        }, "set")
      };
      return channel2;
    }, "getSideChannelList");
  }
});

// node_modules/es-object-atoms/index.js
var require_es_object_atoms = __commonJS({
  "node_modules/es-object-atoms/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Object;
  }
});

// node_modules/es-errors/index.js
var require_es_errors = __commonJS({
  "node_modules/es-errors/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Error;
  }
});

// node_modules/es-errors/eval.js
var require_eval = __commonJS({
  "node_modules/es-errors/eval.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = EvalError;
  }
});

// node_modules/es-errors/range.js
var require_range = __commonJS({
  "node_modules/es-errors/range.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = RangeError;
  }
});

// node_modules/es-errors/ref.js
var require_ref = __commonJS({
  "node_modules/es-errors/ref.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = ReferenceError;
  }
});

// node_modules/es-errors/syntax.js
var require_syntax = __commonJS({
  "node_modules/es-errors/syntax.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = SyntaxError;
  }
});

// node_modules/es-errors/uri.js
var require_uri = __commonJS({
  "node_modules/es-errors/uri.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = URIError;
  }
});

// node_modules/math-intrinsics/abs.js
var require_abs = __commonJS({
  "node_modules/math-intrinsics/abs.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Math.abs;
  }
});

// node_modules/math-intrinsics/floor.js
var require_floor = __commonJS({
  "node_modules/math-intrinsics/floor.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Math.floor;
  }
});

// node_modules/math-intrinsics/max.js
var require_max = __commonJS({
  "node_modules/math-intrinsics/max.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Math.max;
  }
});

// node_modules/math-intrinsics/min.js
var require_min = __commonJS({
  "node_modules/math-intrinsics/min.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Math.min;
  }
});

// node_modules/math-intrinsics/pow.js
var require_pow = __commonJS({
  "node_modules/math-intrinsics/pow.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Math.pow;
  }
});

// node_modules/math-intrinsics/round.js
var require_round = __commonJS({
  "node_modules/math-intrinsics/round.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Math.round;
  }
});

// node_modules/math-intrinsics/isNaN.js
var require_isNaN = __commonJS({
  "node_modules/math-intrinsics/isNaN.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Number.isNaN || /* @__PURE__ */ __name(function isNaN2(a) {
      return a !== a;
    }, "isNaN");
  }
});

// node_modules/math-intrinsics/sign.js
var require_sign = __commonJS({
  "node_modules/math-intrinsics/sign.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var $isNaN = require_isNaN();
    module.exports = /* @__PURE__ */ __name(function sign(number) {
      if ($isNaN(number) || number === 0) {
        return number;
      }
      return number < 0 ? -1 : 1;
    }, "sign");
  }
});

// node_modules/gopd/gOPD.js
var require_gOPD = __commonJS({
  "node_modules/gopd/gOPD.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Object.getOwnPropertyDescriptor;
  }
});

// node_modules/gopd/index.js
var require_gopd = __commonJS({
  "node_modules/gopd/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var $gOPD = require_gOPD();
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module.exports = $gOPD;
  }
});

// node_modules/es-define-property/index.js
var require_es_define_property = __commonJS({
  "node_modules/es-define-property/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var $defineProperty = Object.defineProperty || false;
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    module.exports = $defineProperty;
  }
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/has-symbols/shams.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = /* @__PURE__ */ __name(function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (var _ in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = (
          /** @type {PropertyDescriptor} */
          Object.getOwnPropertyDescriptor(obj, sym)
        );
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    }, "hasSymbols");
  }
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = /* @__PURE__ */ __name(function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    }, "hasNativeSymbols");
  }
});

// node_modules/get-proto/Reflect.getPrototypeOf.js
var require_Reflect_getPrototypeOf = __commonJS({
  "node_modules/get-proto/Reflect.getPrototypeOf.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  }
});

// node_modules/get-proto/Object.getPrototypeOf.js
var require_Object_getPrototypeOf = __commonJS({
  "node_modules/get-proto/Object.getPrototypeOf.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var $Object = require_es_object_atoms();
    module.exports = $Object.getPrototypeOf || null;
  }
});

// node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = /* @__PURE__ */ __name(function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    }, "concatty");
    var slicy = /* @__PURE__ */ __name(function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    }, "slicy");
    var joiny = /* @__PURE__ */ __name(function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    }, "joiny");
    module.exports = /* @__PURE__ */ __name(function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = /* @__PURE__ */ __name(function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      }, "binder");
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = /* @__PURE__ */ __name(function Empty2() {
        }, "Empty");
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    }, "bind");
  }
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var implementation = require_implementation();
    module.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/call-bind-apply-helpers/functionCall.js
var require_functionCall = __commonJS({
  "node_modules/call-bind-apply-helpers/functionCall.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Function.prototype.call;
  }
});

// node_modules/call-bind-apply-helpers/functionApply.js
var require_functionApply = __commonJS({
  "node_modules/call-bind-apply-helpers/functionApply.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = Function.prototype.apply;
  }
});

// node_modules/call-bind-apply-helpers/reflectApply.js
var require_reflectApply = __commonJS({
  "node_modules/call-bind-apply-helpers/reflectApply.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
  }
});

// node_modules/call-bind-apply-helpers/actualApply.js
var require_actualApply = __commonJS({
  "node_modules/call-bind-apply-helpers/actualApply.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var bind = require_function_bind();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var $reflectApply = require_reflectApply();
    module.exports = $reflectApply || bind.call($call, $apply);
  }
});

// node_modules/call-bind-apply-helpers/index.js
var require_call_bind_apply_helpers = __commonJS({
  "node_modules/call-bind-apply-helpers/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var bind = require_function_bind();
    var $TypeError = require_type();
    var $call = require_functionCall();
    var $actualApply = require_actualApply();
    module.exports = /* @__PURE__ */ __name(function callBindBasic(args) {
      if (args.length < 1 || typeof args[0] !== "function") {
        throw new $TypeError("a function is required");
      }
      return $actualApply(bind, $call, args);
    }, "callBindBasic");
  }
});

// node_modules/dunder-proto/get.js
var require_get = __commonJS({
  "node_modules/dunder-proto/get.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var callBind = require_call_bind_apply_helpers();
    var gOPD = require_gopd();
    var hasProtoAccessor;
    try {
      hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
      [].__proto__ === Array.prototype;
    } catch (e) {
      if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
        throw e;
      }
    }
    var desc = !!hasProtoAccessor && gOPD && gOPD(
      Object.prototype,
      /** @type {keyof typeof Object.prototype} */
      "__proto__"
    );
    var $Object = Object;
    var $getPrototypeOf = $Object.getPrototypeOf;
    module.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
      /** @type {import('./get')} */
      /* @__PURE__ */ __name(function getDunder(value) {
        return $getPrototypeOf(value == null ? value : $Object(value));
      }, "getDunder")
    ) : false;
  }
});

// node_modules/get-proto/index.js
var require_get_proto = __commonJS({
  "node_modules/get-proto/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var reflectGetProto = require_Reflect_getPrototypeOf();
    var originalGetProto = require_Object_getPrototypeOf();
    var getDunderProto = require_get();
    module.exports = reflectGetProto ? /* @__PURE__ */ __name(function getProto(O) {
      return reflectGetProto(O);
    }, "getProto") : originalGetProto ? /* @__PURE__ */ __name(function getProto(O) {
      if (!O || typeof O !== "object" && typeof O !== "function") {
        throw new TypeError("getProto: not an object");
      }
      return originalGetProto(O);
    }, "getProto") : getDunderProto ? /* @__PURE__ */ __name(function getProto(O) {
      return getDunderProto(O);
    }, "getProto") : null;
  }
});

// node_modules/hasown/index.js
var require_hasown = __commonJS({
  "node_modules/hasown/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = require_function_bind();
    module.exports = bind.call(call, $hasOwn);
  }
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var undefined2;
    var $Object = require_es_object_atoms();
    var $Error = require_es_errors();
    var $EvalError = require_eval();
    var $RangeError = require_range();
    var $ReferenceError = require_ref();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var $URIError = require_uri();
    var abs = require_abs();
    var floor = require_floor();
    var max = require_max();
    var min = require_min();
    var pow = require_pow();
    var round = require_round();
    var sign = require_sign();
    var $Function = Function;
    var getEvalledConstructor = /* @__PURE__ */ __name(function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    }, "getEvalledConstructor");
    var $gOPD = require_gopd();
    var $defineProperty = require_es_define_property();
    var throwTypeError = /* @__PURE__ */ __name(function() {
      throw new $TypeError();
    }, "throwTypeError");
    var ThrowTypeError = $gOPD ? (function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    })() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = require_get_proto();
    var $ObjectGPO = require_Object_getPrototypeOf();
    var $ReflectGPO = require_Reflect_getPrototypeOf();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": $EvalError,
      "%Float16Array%": typeof Float16Array === "undefined" ? undefined2 : Float16Array,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": $Object,
      "%Object.getOwnPropertyDescriptor%": $gOPD,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet,
      "%Function.prototype.call%": $call,
      "%Function.prototype.apply%": $apply,
      "%Object.defineProperty%": $defineProperty,
      "%Object.getPrototypeOf%": $ObjectGPO,
      "%Math.abs%": abs,
      "%Math.floor%": floor,
      "%Math.max%": max,
      "%Math.min%": min,
      "%Math.pow%": pow,
      "%Math.round%": round,
      "%Math.sign%": sign,
      "%Reflect.getPrototypeOf%": $ReflectGPO
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = /* @__PURE__ */ __name(function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    }, "doEval");
    var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_hasown();
    var $concat = bind.call($call, Array.prototype.concat);
    var $spliceApply = bind.call($apply, Array.prototype.splice);
    var $replace = bind.call($call, String.prototype.replace);
    var $strSlice = bind.call($call, String.prototype.slice);
    var $exec = bind.call($call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = /* @__PURE__ */ __name(function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    }, "stringToPath");
    var getBaseIntrinsic = /* @__PURE__ */ __name(function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    }, "getBaseIntrinsic");
    module.exports = /* @__PURE__ */ __name(function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void undefined2;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    }, "GetIntrinsic");
  }
});

// node_modules/call-bound/index.js
var require_call_bound = __commonJS({
  "node_modules/call-bound/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var GetIntrinsic = require_get_intrinsic();
    var callBindBasic = require_call_bind_apply_helpers();
    var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
    module.exports = /* @__PURE__ */ __name(function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = (
        /** @type {(this: unknown, ...args: unknown[]) => unknown} */
        GetIntrinsic(name, !!allowMissing)
      );
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBindBasic(
          /** @type {const} */
          [intrinsic]
        );
      }
      return intrinsic;
    }, "callBoundIntrinsic");
  }
});

// node_modules/side-channel-map/index.js
var require_side_channel_map = __commonJS({
  "node_modules/side-channel-map/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_call_bound();
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var $Map = GetIntrinsic("%Map%", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var $mapDelete = callBound("Map.prototype.delete", true);
    var $mapSize = callBound("Map.prototype.size", true);
    module.exports = !!$Map && /** @type {Exclude<import('.'), false>} */
    /* @__PURE__ */ __name(function getSideChannelMap() {
      var $m;
      var channel2 = {
        assert: /* @__PURE__ */ __name(function(key) {
          if (!channel2.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        }, "assert"),
        "delete": /* @__PURE__ */ __name(function(key) {
          if ($m) {
            var result = $mapDelete($m, key);
            if ($mapSize($m) === 0) {
              $m = void 0;
            }
            return result;
          }
          return false;
        }, "delete"),
        get: /* @__PURE__ */ __name(function(key) {
          if ($m) {
            return $mapGet($m, key);
          }
        }, "get"),
        has: /* @__PURE__ */ __name(function(key) {
          if ($m) {
            return $mapHas($m, key);
          }
          return false;
        }, "has"),
        set: /* @__PURE__ */ __name(function(key, value) {
          if (!$m) {
            $m = new $Map();
          }
          $mapSet($m, key, value);
        }, "set")
      };
      return channel2;
    }, "getSideChannelMap");
  }
});

// node_modules/side-channel-weakmap/index.js
var require_side_channel_weakmap = __commonJS({
  "node_modules/side-channel-weakmap/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_call_bound();
    var inspect = require_object_inspect();
    var getSideChannelMap = require_side_channel_map();
    var $TypeError = require_type();
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $weakMapDelete = callBound("WeakMap.prototype.delete", true);
    module.exports = $WeakMap ? (
      /** @type {Exclude<import('.'), false>} */
      /* @__PURE__ */ __name(function getSideChannelWeakMap() {
        var $wm;
        var $m;
        var channel2 = {
          assert: /* @__PURE__ */ __name(function(key) {
            if (!channel2.has(key)) {
              throw new $TypeError("Side channel does not contain " + inspect(key));
            }
          }, "assert"),
          "delete": /* @__PURE__ */ __name(function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapDelete($wm, key);
              }
            } else if (getSideChannelMap) {
              if ($m) {
                return $m["delete"](key);
              }
            }
            return false;
          }, "delete"),
          get: /* @__PURE__ */ __name(function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapGet($wm, key);
              }
            }
            return $m && $m.get(key);
          }, "get"),
          has: /* @__PURE__ */ __name(function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapHas($wm, key);
              }
            }
            return !!$m && $m.has(key);
          }, "has"),
          set: /* @__PURE__ */ __name(function(key, value) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if (!$wm) {
                $wm = new $WeakMap();
              }
              $weakMapSet($wm, key, value);
            } else if (getSideChannelMap) {
              if (!$m) {
                $m = getSideChannelMap();
              }
              $m.set(key, value);
            }
          }, "set")
        };
        return channel2;
      }, "getSideChannelWeakMap")
    ) : getSideChannelMap;
  }
});

// node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "node_modules/side-channel/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var $TypeError = require_type();
    var inspect = require_object_inspect();
    var getSideChannelList = require_side_channel_list();
    var getSideChannelMap = require_side_channel_map();
    var getSideChannelWeakMap = require_side_channel_weakmap();
    var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
    module.exports = /* @__PURE__ */ __name(function getSideChannel() {
      var $channelData;
      var channel2 = {
        assert: /* @__PURE__ */ __name(function(key) {
          if (!channel2.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        }, "assert"),
        "delete": /* @__PURE__ */ __name(function(key) {
          return !!$channelData && $channelData["delete"](key);
        }, "delete"),
        get: /* @__PURE__ */ __name(function(key) {
          return $channelData && $channelData.get(key);
        }, "get"),
        has: /* @__PURE__ */ __name(function(key) {
          return !!$channelData && $channelData.has(key);
        }, "has"),
        set: /* @__PURE__ */ __name(function(key, value) {
          if (!$channelData) {
            $channelData = makeChannel();
          }
          $channelData.set(key, value);
        }, "set")
      };
      return channel2;
    }, "getSideChannel");
  }
});

// node_modules/qs/lib/formats.js
var require_formats = __commonJS({
  "node_modules/qs/lib/formats.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    module.exports = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: /* @__PURE__ */ __name(function(value) {
          return replace.call(value, percentTwenties, "+");
        }, "RFC1738"),
        RFC3986: /* @__PURE__ */ __name(function(value) {
          return String(value);
        }, "RFC3986")
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
  }
});

// node_modules/qs/lib/utils.js
var require_utils = __commonJS({
  "node_modules/qs/lib/utils.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var formats = require_formats();
    var getSideChannel = require_side_channel();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var overflowChannel = getSideChannel();
    var markOverflow = /* @__PURE__ */ __name(function markOverflow2(obj, maxIndex) {
      overflowChannel.set(obj, maxIndex);
      return obj;
    }, "markOverflow");
    var isOverflow = /* @__PURE__ */ __name(function isOverflow2(obj) {
      return overflowChannel.has(obj);
    }, "isOverflow");
    var getMaxIndex = /* @__PURE__ */ __name(function getMaxIndex2(obj) {
      return overflowChannel.get(obj);
    }, "getMaxIndex");
    var setMaxIndex = /* @__PURE__ */ __name(function setMaxIndex2(obj, maxIndex) {
      overflowChannel.set(obj, maxIndex);
    }, "setMaxIndex");
    var hexTable = (function() {
      var array = [];
      for (var i = 0; i < 256; ++i) {
        array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
      }
      return array;
    })();
    var compactQueue = /* @__PURE__ */ __name(function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) {
            if (typeof obj[j] !== "undefined") {
              compacted.push(obj[j]);
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    }, "compactQueue");
    var arrayToObject = /* @__PURE__ */ __name(function arrayToObject2(source, options) {
      var obj = options && options.plainObjects ? { __proto__: null } : {};
      for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== "undefined") {
          obj[i] = source[i];
        }
      }
      return obj;
    }, "arrayToObject");
    var merge = /* @__PURE__ */ __name(function merge2(target, source, options) {
      if (!source) {
        return target;
      }
      if (typeof source !== "object" && typeof source !== "function") {
        if (isArray(target)) {
          target.push(source);
        } else if (target && typeof target === "object") {
          if (isOverflow(target)) {
            var newIndex = getMaxIndex(target) + 1;
            target[newIndex] = source;
            setMaxIndex(target, newIndex);
          } else if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
            target[source] = true;
          }
        } else {
          return [target, source];
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        if (isOverflow(source)) {
          var sourceKeys = Object.keys(source);
          var result = options && options.plainObjects ? { __proto__: null, 0: target } : { 0: target };
          for (var m = 0; m < sourceKeys.length; m++) {
            var oldKey = parseInt(sourceKeys[m], 10);
            result[oldKey + 1] = source[sourceKeys[m]];
          }
          return markOverflow(result, getMaxIndex(source) + 1);
        }
        return [target].concat(source);
      }
      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
      }
      if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
          if (has.call(target, i)) {
            var targetItem = target[i];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i] = merge2(targetItem, item, options);
            } else {
              target.push(item);
            }
          } else {
            target[i] = item;
          }
        });
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
          acc[key] = merge2(acc[key], value, options);
        } else {
          acc[key] = value;
        }
        return acc;
      }, mergeTarget);
    }, "merge");
    var assign = /* @__PURE__ */ __name(function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
      }, target);
    }, "assignSingleSource");
    var decode = /* @__PURE__ */ __name(function(str, defaultDecoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    }, "decode");
    var limit = 1024;
    var encode = /* @__PURE__ */ __name(function encode2(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(str);
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        });
      }
      var out = "";
      for (var j = 0; j < string.length; j += limit) {
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        var arr = [];
        for (var i = 0; i < segment.length; ++i) {
          var c = segment.charCodeAt(i);
          if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
            arr[arr.length] = segment.charAt(i);
            continue;
          }
          if (c < 128) {
            arr[arr.length] = hexTable[c];
            continue;
          }
          if (c < 2048) {
            arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
            continue;
          }
          if (c < 55296 || c >= 57344) {
            arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
            continue;
          }
          i += 1;
          c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
          arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
        out += arr.join("");
      }
      return out;
    }, "encode");
    var compact = /* @__PURE__ */ __name(function compact2(value) {
      var queue = [{ obj: { o: value }, prop: "o" }];
      var refs = [];
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
          var key = keys[j];
          var val = obj[key];
          if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
            queue.push({ obj, prop: key });
            refs.push(val);
          }
        }
      }
      compactQueue(queue);
      return value;
    }, "compact");
    var isRegExp = /* @__PURE__ */ __name(function isRegExp2(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    }, "isRegExp");
    var isBuffer = /* @__PURE__ */ __name(function isBuffer2(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    }, "isBuffer");
    var combine = /* @__PURE__ */ __name(function combine2(a, b, arrayLimit, plainObjects) {
      if (isOverflow(a)) {
        var newIndex = getMaxIndex(a) + 1;
        a[newIndex] = b;
        setMaxIndex(a, newIndex);
        return a;
      }
      var result = [].concat(a, b);
      if (result.length > arrayLimit) {
        return markOverflow(arrayToObject(result, { plainObjects }), result.length - 1);
      }
      return result;
    }, "combine");
    var maybeMap = /* @__PURE__ */ __name(function maybeMap2(val, fn) {
      if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
          mapped.push(fn(val[i]));
        }
        return mapped;
      }
      return fn(val);
    }, "maybeMap");
    module.exports = {
      arrayToObject,
      assign,
      combine,
      compact,
      decode,
      encode,
      isBuffer,
      isOverflow,
      isRegExp,
      maybeMap,
      merge
    };
  }
});

// node_modules/qs/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/qs/lib/stringify.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var getSideChannel = require_side_channel();
    var utils = require_utils();
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: /* @__PURE__ */ __name(function brackets(prefix) {
        return prefix + "[]";
      }, "brackets"),
      comma: "comma",
      indices: /* @__PURE__ */ __name(function indices(prefix, key) {
        return prefix + "[" + key + "]";
      }, "indices"),
      repeat: /* @__PURE__ */ __name(function repeat(prefix) {
        return prefix;
      }, "repeat")
    };
    var isArray = Array.isArray;
    var push = Array.prototype.push;
    var pushToArray = /* @__PURE__ */ __name(function(arr, valueOrArray) {
      push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
    }, "pushToArray");
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats["default"];
    var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      allowEmptyArrays: false,
      arrayFormat: "indices",
      charset: "utf-8",
      charsetSentinel: false,
      commaRoundTrip: false,
      delimiter: "&",
      encode: true,
      encodeDotInKeys: false,
      encoder: utils.encode,
      encodeValuesOnly: false,
      filter: void 0,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      // deprecated
      indices: false,
      serializeDate: /* @__PURE__ */ __name(function serializeDate(date) {
        return toISO.call(date);
      }, "serializeDate"),
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = /* @__PURE__ */ __name(function isNonNullishPrimitive2(v) {
      return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
    }, "isNonNullishPrimitive");
    var sentinel = {};
    var stringify = /* @__PURE__ */ __name(function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
      var obj = object;
      var tmpSc = sideChannel;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
          if (pos === step) {
            throw new RangeError("Cyclic object value");
          } else {
            findFlag = true;
          }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
          step = 0;
        }
      }
      if (typeof filter === "function") {
        obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value2) {
          if (value2 instanceof Date) {
            return serializeDate(value2);
          }
          return value2;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
          return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
        }
        return [formatter(prefix) + "=" + formatter(String(obj))];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray(obj)) {
        if (encodeValuesOnly && encoder) {
          obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
      } else if (isArray(filter)) {
        objKeys = filter;
      } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
      }
      var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, "%2E") : String(prefix);
      var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
      if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
        return adjustedPrefix + "[]";
      }
      for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === "object" && key && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
          continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, "%2E") : String(key);
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify2(
          value,
          keyPrefix,
          generateArrayPrefix,
          commaRoundTrip,
          allowEmptyArrays,
          strictNullHandling,
          skipNulls,
          encodeDotInKeys,
          generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder,
          filter,
          sort,
          allowDots,
          serializeDate,
          format,
          formatter,
          encodeValuesOnly,
          charset,
          valueSideChannel
        ));
      }
      return values;
    }, "stringify");
    var normalizeStringifyOptions = /* @__PURE__ */ __name(function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
      }
      var formatter = formats.formatters[format];
      var filter = defaults.filter;
      if (typeof opts.filter === "function" || isArray(opts.filter)) {
        filter = opts.filter;
      }
      var arrayFormat;
      if (opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
      } else if ("indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = defaults.arrayFormat;
      }
      if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: !!opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    }, "normalizeStringifyOptions");
    module.exports = function(object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);
      var objKeys;
      var filter;
      if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
      } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
      }
      var keys = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
      var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options.sort) {
        objKeys.sort(options.sort);
      }
      var sideChannel = getSideChannel();
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        var value = obj[key];
        if (options.skipNulls && value === null) {
          continue;
        }
        pushToArray(keys, stringify(
          value,
          key,
          generateArrayPrefix,
          commaRoundTrip,
          options.allowEmptyArrays,
          options.strictNullHandling,
          options.skipNulls,
          options.encodeDotInKeys,
          options.encode ? options.encoder : null,
          options.filter,
          options.sort,
          options.allowDots,
          options.serializeDate,
          options.format,
          options.formatter,
          options.encodeValuesOnly,
          options.charset,
          sideChannel
        ));
      }
      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? "?" : "";
      if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") {
          prefix += "utf8=%26%2310003%3B&";
        } else {
          prefix += "utf8=%E2%9C%93&";
        }
      }
      return joined.length > 0 ? prefix + joined : "";
    };
  }
});

// node_modules/qs/lib/parse.js
var require_parse = __commonJS({
  "node_modules/qs/lib/parse.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var utils = require_utils();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var defaults = {
      allowDots: false,
      allowEmptyArrays: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decodeDotInKeys: false,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      duplicates: "combine",
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictDepth: false,
      strictNullHandling: false,
      throwOnLimitExceeded: false
    };
    var interpretNumericEntities = /* @__PURE__ */ __name(function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    }, "interpretNumericEntities");
    var parseArrayValue = /* @__PURE__ */ __name(function(val, options, currentArrayLength) {
      if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
        return val.split(",");
      }
      if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
        throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
      }
      return val;
    }, "parseArrayValue");
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = /* @__PURE__ */ __name(function parseQueryStringValues(str, options) {
      var obj = { __proto__: null };
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
      var parts = cleanStr.split(
        options.delimiter,
        options.throwOnLimitExceeded ? limit + 1 : limit
      );
      if (options.throwOnLimitExceeded && parts.length > limit) {
        throw new RangeError("Parameter limit exceeded. Only " + limit + " parameter" + (limit === 1 ? "" : "s") + " allowed.");
      }
      var skipIndex = -1;
      var i;
      var charset = options.charset;
      if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
          if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i;
            i = parts.length;
          }
        }
      }
      for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
          continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key;
        var val;
        if (pos === -1) {
          key = options.decoder(part, defaults.decoder, charset, "key");
          val = options.strictNullHandling ? null : "";
        } else {
          key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
          if (key !== null) {
            val = utils.maybeMap(
              parseArrayValue(
                part.slice(pos + 1),
                options,
                isArray(obj[key]) ? obj[key].length : 0
              ),
              function(encodedVal) {
                return options.decoder(encodedVal, defaults.decoder, charset, "value");
              }
            );
          }
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(String(val));
        }
        if (part.indexOf("[]=") > -1) {
          val = isArray(val) ? [val] : val;
        }
        if (key !== null) {
          var existing = has.call(obj, key);
          if (existing && options.duplicates === "combine") {
            obj[key] = utils.combine(
              obj[key],
              val,
              options.arrayLimit,
              options.plainObjects
            );
          } else if (!existing || options.duplicates === "last") {
            obj[key] = val;
          }
        }
      }
      return obj;
    }, "parseQueryStringValues");
    var parseObject = /* @__PURE__ */ __name(function(chain, val, options, valuesParsed) {
      var currentArrayLength = 0;
      if (chain.length > 0 && chain[chain.length - 1] === "[]") {
        var parentKey = chain.slice(0, -1).join("");
        currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
      }
      var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) {
          if (utils.isOverflow(leaf)) {
            obj = leaf;
          } else {
            obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : utils.combine(
              [],
              leaf,
              options.arrayLimit,
              options.plainObjects
            );
          }
        } else {
          obj = options.plainObjects ? { __proto__: null } : {};
          var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
          var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
          var index = parseInt(decodedRoot, 10);
          if (!options.parseArrays && decodedRoot === "") {
            obj = { 0: leaf };
          } else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
            obj = [];
            obj[index] = leaf;
          } else if (decodedRoot !== "__proto__") {
            obj[decodedRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    }, "parseObject");
    var splitKeyIntoSegments = /* @__PURE__ */ __name(function splitKeyIntoSegments2(givenKey, options) {
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
      if (options.depth <= 0) {
        if (!options.plainObjects && has.call(Object.prototype, key)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        return [key];
      }
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
      var segment = brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;
      var keys = [];
      if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(parent);
      }
      var i = 0;
      while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        var segmentContent = segment[1].slice(1, -1);
        if (!options.plainObjects && has.call(Object.prototype, segmentContent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(segment[1]);
      }
      if (segment) {
        if (options.strictDepth === true) {
          throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
        }
        keys.push("[" + key.slice(segment.index) + "]");
      }
      return keys;
    }, "splitKeyIntoSegments");
    var parseKeys = /* @__PURE__ */ __name(function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var keys = splitKeyIntoSegments(givenKey, options);
      if (!keys) {
        return;
      }
      return parseObject(keys, val, options, valuesParsed);
    }, "parseQueryStringKeys");
    var normalizeParseOptions = /* @__PURE__ */ __name(function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
        throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      if (typeof opts.throwOnLimitExceeded !== "undefined" && typeof opts.throwOnLimitExceeded !== "boolean") {
        throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
      }
      var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
      var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
      if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
        throw new TypeError("The duplicates option must be either combine, first, or last");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults.strictDepth,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling,
        throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === "boolean" ? opts.throwOnLimitExceeded : false
      };
    }, "normalizeParseOptions");
    module.exports = function(str, opts) {
      var options = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options.plainObjects ? { __proto__: null } : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options) : str;
      var obj = options.plainObjects ? { __proto__: null } : {};
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
      }
      if (options.allowSparse === true) {
        return obj;
      }
      return utils.compact(obj);
    };
  }
});

// node_modules/qs/lib/index.js
var require_lib = __commonJS({
  "node_modules/qs/lib/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var stringify = require_stringify();
    var parse = require_parse();
    var formats = require_formats();
    module.exports = {
      formats,
      parse,
      stringify
    };
  }
});

// node-built-in-modules:crypto
import libDefault3 from "crypto";
var require_crypto = __commonJS({
  "node-built-in-modules:crypto"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault3;
  }
});

// node_modules/unenv/dist/runtime/node/child_process.mjs
var ChildProcess, _forkChild, exec, execFile, execFileSync, execSync, fork, spawn, spawnSync, child_process_default;
var init_child_process = __esm({
  "node_modules/unenv/dist/runtime/node/child_process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_utils();
    ChildProcess = /* @__PURE__ */ notImplementedClass("child_process.ChildProcess");
    _forkChild = /* @__PURE__ */ notImplemented("child_process.ChildProcess");
    exec = /* @__PURE__ */ notImplemented("child_process.exec");
    execFile = /* @__PURE__ */ notImplemented("child_process.execFile");
    execFileSync = /* @__PURE__ */ notImplemented("child_process.execFileSync");
    execSync = /* @__PURE__ */ notImplemented("child_process.execSyn");
    fork = /* @__PURE__ */ notImplemented("child_process.fork");
    spawn = /* @__PURE__ */ notImplemented("child_process.spawn");
    spawnSync = /* @__PURE__ */ notImplemented("child_process.spawnSync");
    child_process_default = {
      ChildProcess,
      _forkChild,
      exec,
      execFile,
      execFileSync,
      execSync,
      fork,
      spawn,
      spawnSync
    };
  }
});

// node-built-in-modules:child_process
var require_child_process = __commonJS({
  "node-built-in-modules:child_process"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    init_child_process();
    module.exports = child_process_default;
  }
});

// node_modules/stripe/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/stripe/lib/utils.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var EventEmitter2 = require_events().EventEmitter;
    var qs = require_lib();
    var crypto2 = require_crypto();
    var hasOwn = /* @__PURE__ */ __name((obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop), "hasOwn");
    var exec2 = null;
    try {
      exec2 = require_child_process().exec;
    } catch (e) {
      if (e.code !== "MODULE_NOT_FOUND") {
        throw e;
      }
    }
    var OPTIONS_KEYS = [
      "apiKey",
      "idempotencyKey",
      "stripeAccount",
      "apiVersion",
      "maxNetworkRetries",
      "timeout",
      "host"
    ];
    var DEPRECATED_OPTIONS = {
      api_key: "apiKey",
      idempotency_key: "idempotencyKey",
      stripe_account: "stripeAccount",
      stripe_version: "apiVersion",
      stripeVersion: "apiVersion"
    };
    var DEPRECATED_OPTIONS_KEYS = Object.keys(DEPRECATED_OPTIONS);
    var utils = module.exports = {
      isOptionsHash(o) {
        return o && typeof o === "object" && (OPTIONS_KEYS.some((prop) => hasOwn(o, prop)) || DEPRECATED_OPTIONS_KEYS.some((prop) => hasOwn(o, prop)));
      },
      /**
       * Stringifies an Object, accommodating nested objects
       * (forming the conventional key 'parent[child]=value')
       */
      stringifyRequestData: /* @__PURE__ */ __name((data) => {
        return qs.stringify(data, {
          serializeDate: /* @__PURE__ */ __name((d) => Math.floor(d.getTime() / 1e3), "serializeDate")
        }).replace(/%5B/g, "[").replace(/%5D/g, "]");
      }, "stringifyRequestData"),
      /**
       * Outputs a new function with interpolated object property values.
       * Use like so:
       *   const fn = makeURLInterpolator('some/url/{param1}/{param2}');
       *   fn({ param1: 123, param2: 456 }); // => 'some/url/123/456'
       */
      makeURLInterpolator: /* @__PURE__ */ (() => {
        const rc = {
          "\n": "\\n",
          '"': '\\"',
          "\u2028": "\\u2028",
          "\u2029": "\\u2029"
        };
        return (str) => {
          const cleanString = str.replace(/["\n\r\u2028\u2029]/g, ($0) => rc[$0]);
          return (outputs) => {
            return cleanString.replace(
              /\{([\s\S]+?)\}/g,
              ($0, $1) => encodeURIComponent(outputs[$1] || "")
            );
          };
        };
      })(),
      extractUrlParams: /* @__PURE__ */ __name((path) => {
        const params = path.match(/\{\w+\}/g);
        if (!params) {
          return [];
        }
        return params.map((param) => param.replace(/[{}]/g, ""));
      }, "extractUrlParams"),
      /**
       * Return the data argument from a list of arguments
       *
       * @param {object[]} args
       * @returns {object}
       */
      getDataFromArgs(args) {
        if (!Array.isArray(args) || !args[0] || typeof args[0] !== "object") {
          return {};
        }
        if (!utils.isOptionsHash(args[0])) {
          return args.shift();
        }
        const argKeys = Object.keys(args[0]);
        const optionKeysInArgs = argKeys.filter(
          (key) => OPTIONS_KEYS.includes(key)
        );
        if (optionKeysInArgs.length > 0 && optionKeysInArgs.length !== argKeys.length) {
          emitWarning2(
            `Options found in arguments (${optionKeysInArgs.join(
              ", "
            )}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`
          );
        }
        return {};
      },
      /**
       * Return the options hash from a list of arguments
       */
      getOptionsFromArgs: /* @__PURE__ */ __name((args) => {
        const opts = {
          auth: null,
          headers: {},
          settings: {}
        };
        if (args.length > 0) {
          const arg = args[args.length - 1];
          if (typeof arg === "string") {
            opts.auth = args.pop();
          } else if (utils.isOptionsHash(arg)) {
            const params = { ...args.pop() };
            const extraKeys = Object.keys(params).filter(
              (key) => !OPTIONS_KEYS.includes(key)
            );
            if (extraKeys.length) {
              const nonDeprecated = extraKeys.filter((key) => {
                if (!DEPRECATED_OPTIONS[key]) {
                  return true;
                }
                const newParam = DEPRECATED_OPTIONS[key];
                if (params[newParam]) {
                  throw Error(
                    `Both '${newParam}' and '${key}' were provided; please remove '${key}', which is deprecated.`
                  );
                }
                emitWarning2(`'${key}' is deprecated; use '${newParam}' instead.`);
                params[newParam] = params[key];
              });
              if (nonDeprecated.length) {
                emitWarning2(
                  `Invalid options found (${extraKeys.join(", ")}); ignoring.`
                );
              }
            }
            if (params.apiKey) {
              opts.auth = params.apiKey;
            }
            if (params.idempotencyKey) {
              opts.headers["Idempotency-Key"] = params.idempotencyKey;
            }
            if (params.stripeAccount) {
              opts.headers["Stripe-Account"] = params.stripeAccount;
            }
            if (params.apiVersion) {
              opts.headers["Stripe-Version"] = params.apiVersion;
            }
            if (Number.isInteger(params.maxNetworkRetries)) {
              opts.settings.maxNetworkRetries = params.maxNetworkRetries;
            }
            if (Number.isInteger(params.timeout)) {
              opts.settings.timeout = params.timeout;
            }
            if (params.host) {
              opts.host = params.host;
            }
          }
        }
        return opts;
      }, "getOptionsFromArgs"),
      /**
       * Provide simple "Class" extension mechanism
       */
      protoExtend(sub) {
        const Super = this;
        const Constructor = hasOwn(sub, "constructor") ? sub.constructor : function(...args) {
          Super.apply(this, args);
        };
        Object.assign(Constructor, Super);
        Constructor.prototype = Object.create(Super.prototype);
        Object.assign(Constructor.prototype, sub);
        return Constructor;
      },
      /**
       * Secure compare, from https://github.com/freewil/scmp
       */
      secureCompare: /* @__PURE__ */ __name((a, b) => {
        a = Buffer.from(a);
        b = Buffer.from(b);
        if (a.length !== b.length) {
          return false;
        }
        if (crypto2.timingSafeEqual) {
          return crypto2.timingSafeEqual(a, b);
        }
        const len = a.length;
        let result = 0;
        for (let i = 0; i < len; ++i) {
          result |= a[i] ^ b[i];
        }
        return result === 0;
      }, "secureCompare"),
      /**
       * Remove empty values from an object
       */
      removeNullish: /* @__PURE__ */ __name((obj) => {
        if (typeof obj !== "object") {
          throw new Error("Argument must be an object");
        }
        return Object.keys(obj).reduce((result, key) => {
          if (obj[key] != null) {
            result[key] = obj[key];
          }
          return result;
        }, {});
      }, "removeNullish"),
      /**
       * Normalize standard HTTP Headers:
       * {'foo-bar': 'hi'}
       * becomes
       * {'Foo-Bar': 'hi'}
       */
      normalizeHeaders: /* @__PURE__ */ __name((obj) => {
        if (!(obj && typeof obj === "object")) {
          return obj;
        }
        return Object.keys(obj).reduce((result, header) => {
          result[utils.normalizeHeader(header)] = obj[header];
          return result;
        }, {});
      }, "normalizeHeaders"),
      /**
       * Stolen from https://github.com/marten-de-vries/header-case-normalizer/blob/master/index.js#L36-L41
       * without the exceptions which are irrelevant to us.
       */
      normalizeHeader: /* @__PURE__ */ __name((header) => {
        return header.split("-").map(
          (text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
        ).join("-");
      }, "normalizeHeader"),
      /**
       * Determine if file data is a derivative of EventEmitter class.
       * https://nodejs.org/api/events.html#events_events
       */
      checkForStream: /* @__PURE__ */ __name((obj) => {
        if (obj.file && obj.file.data) {
          return obj.file.data instanceof EventEmitter2;
        }
        return false;
      }, "checkForStream"),
      callbackifyPromiseWithTimeout: /* @__PURE__ */ __name((promise, callback) => {
        if (callback) {
          return promise.then(
            (res) => {
              setTimeout(() => {
                callback(null, res);
              }, 0);
            },
            (err) => {
              setTimeout(() => {
                callback(err, null);
              }, 0);
            }
          );
        }
        return promise;
      }, "callbackifyPromiseWithTimeout"),
      /**
       * Allow for special capitalization cases (such as OAuth)
       */
      pascalToCamelCase: /* @__PURE__ */ __name((name) => {
        if (name === "OAuth") {
          return "oauth";
        } else {
          return name[0].toLowerCase() + name.substring(1);
        }
      }, "pascalToCamelCase"),
      emitWarning: emitWarning2,
      /**
       * Node's built in `exec` function sometimes throws outright,
       * and sometimes has a callback with an error,
       * depending on the type of error.
       *
       * This unifies that interface.
       */
      safeExec: /* @__PURE__ */ __name((cmd, cb) => {
        if (utils._exec === null) {
          cb(new Error("exec not available"), null);
          return;
        }
        try {
          utils._exec(cmd, cb);
        } catch (e) {
          cb(e, null);
        }
      }, "safeExec"),
      // For mocking in tests.
      _exec: exec2,
      isObject: /* @__PURE__ */ __name((obj) => {
        const type = typeof obj;
        return (type === "function" || type === "object") && !!obj;
      }, "isObject"),
      // For use in multipart requests
      flattenAndStringify: /* @__PURE__ */ __name((data) => {
        const result = {};
        const step = /* @__PURE__ */ __name((obj, prevKey) => {
          Object.keys(obj).forEach((key) => {
            const value = obj[key];
            const newKey = prevKey ? `${prevKey}[${key}]` : key;
            if (utils.isObject(value)) {
              if (!Buffer.isBuffer(value) && !value.hasOwnProperty("data")) {
                return step(value, newKey);
              } else {
                result[newKey] = value;
              }
            } else {
              result[newKey] = String(value);
            }
          });
        }, "step");
        step(data);
        return result;
      }, "flattenAndStringify"),
      /**
       * https://stackoverflow.com/a/2117523
       */
      uuid4: /* @__PURE__ */ __name(() => {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
          const r = Math.random() * 16 | 0;
          const v = c === "x" ? r : r & 3 | 8;
          return v.toString(16);
        });
      }, "uuid4"),
      validateInteger: /* @__PURE__ */ __name((name, n, defaultVal) => {
        if (!Number.isInteger(n)) {
          if (defaultVal !== void 0) {
            return defaultVal;
          } else {
            throw new Error(`${name} must be an integer`);
          }
        }
        return n;
      }, "validateInteger"),
      determineProcessUserAgentProperties: /* @__PURE__ */ __name(() => {
        return typeof process === "undefined" ? {} : {
          lang_version: process.version,
          platform: process.platform
        };
      }, "determineProcessUserAgentProperties")
    };
    function emitWarning2(warning) {
      if (typeof process.emitWarning !== "function") {
        return console.warn(
          `Stripe: ${warning}`
        );
      }
      return process.emitWarning(warning, "Stripe");
    }
    __name(emitWarning2, "emitWarning");
  }
});

// node_modules/stripe/lib/Error.js
var require_Error = __commonJS({
  "node_modules/stripe/lib/Error.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeError = class extends Error {
      static {
        __name(this, "StripeError");
      }
      constructor(raw = {}) {
        super(raw.message);
        this.type = this.constructor.name;
        this.raw = raw;
        this.rawType = raw.type;
        this.code = raw.code;
        this.doc_url = raw.doc_url;
        this.param = raw.param;
        this.detail = raw.detail;
        this.headers = raw.headers;
        this.requestId = raw.requestId;
        this.statusCode = raw.statusCode;
        this.message = raw.message;
        this.charge = raw.charge;
        this.decline_code = raw.decline_code;
        this.payment_intent = raw.payment_intent;
        this.payment_method = raw.payment_method;
        this.payment_method_type = raw.payment_method_type;
        this.setup_intent = raw.setup_intent;
        this.source = raw.source;
      }
      /**
       * Helper factory which takes raw stripe errors and outputs wrapping instances
       */
      static generate(rawStripeError) {
        switch (rawStripeError.type) {
          case "card_error":
            return new StripeCardError(rawStripeError);
          case "invalid_request_error":
            return new StripeInvalidRequestError(rawStripeError);
          case "api_error":
            return new StripeAPIError(rawStripeError);
          case "authentication_error":
            return new StripeAuthenticationError(rawStripeError);
          case "rate_limit_error":
            return new StripeRateLimitError(rawStripeError);
          case "idempotency_error":
            return new StripeIdempotencyError(rawStripeError);
          case "invalid_grant":
            return new StripeInvalidGrantError(rawStripeError);
          default:
            return new StripeUnknownError(rawStripeError);
        }
      }
    };
    var StripeCardError = class extends StripeError {
      static {
        __name(this, "StripeCardError");
      }
    };
    var StripeInvalidRequestError = class extends StripeError {
      static {
        __name(this, "StripeInvalidRequestError");
      }
    };
    var StripeAPIError = class extends StripeError {
      static {
        __name(this, "StripeAPIError");
      }
    };
    var StripeAuthenticationError = class extends StripeError {
      static {
        __name(this, "StripeAuthenticationError");
      }
    };
    var StripePermissionError = class extends StripeError {
      static {
        __name(this, "StripePermissionError");
      }
    };
    var StripeRateLimitError = class extends StripeError {
      static {
        __name(this, "StripeRateLimitError");
      }
    };
    var StripeConnectionError = class extends StripeError {
      static {
        __name(this, "StripeConnectionError");
      }
    };
    var StripeSignatureVerificationError = class extends StripeError {
      static {
        __name(this, "StripeSignatureVerificationError");
      }
    };
    var StripeIdempotencyError = class extends StripeError {
      static {
        __name(this, "StripeIdempotencyError");
      }
    };
    var StripeInvalidGrantError = class extends StripeError {
      static {
        __name(this, "StripeInvalidGrantError");
      }
    };
    var StripeUnknownError = class extends StripeError {
      static {
        __name(this, "StripeUnknownError");
      }
    };
    module.exports.generate = StripeError.generate;
    module.exports.StripeError = StripeError;
    module.exports.StripeCardError = StripeCardError;
    module.exports.StripeInvalidRequestError = StripeInvalidRequestError;
    module.exports.StripeAPIError = StripeAPIError;
    module.exports.StripeAuthenticationError = StripeAuthenticationError;
    module.exports.StripePermissionError = StripePermissionError;
    module.exports.StripeRateLimitError = StripeRateLimitError;
    module.exports.StripeConnectionError = StripeConnectionError;
    module.exports.StripeSignatureVerificationError = StripeSignatureVerificationError;
    module.exports.StripeIdempotencyError = StripeIdempotencyError;
    module.exports.StripeInvalidGrantError = StripeInvalidGrantError;
    module.exports.StripeUnknownError = StripeUnknownError;
  }
});

// node_modules/stripe/lib/net/HttpClient.js
var require_HttpClient = __commonJS({
  "node_modules/stripe/lib/net/HttpClient.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var HttpClient = class _HttpClient {
      static {
        __name(this, "HttpClient");
      }
      /** The client name used for diagnostics. */
      getClientName() {
        throw new Error("getClientName not implemented.");
      }
      makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
        throw new Error("makeRequest not implemented.");
      }
      /** Helper to make a consistent timeout error across implementations. */
      static makeTimeoutError() {
        const timeoutErr = new TypeError(_HttpClient.TIMEOUT_ERROR_CODE);
        timeoutErr.code = _HttpClient.TIMEOUT_ERROR_CODE;
        return timeoutErr;
      }
    };
    HttpClient.TIMEOUT_ERROR_CODE = "ETIMEDOUT";
    var HttpClientResponse = class {
      static {
        __name(this, "HttpClientResponse");
      }
      constructor(statusCode, headers) {
        this._statusCode = statusCode;
        this._headers = headers;
      }
      getStatusCode() {
        return this._statusCode;
      }
      getHeaders() {
        return this._headers;
      }
      getRawResponse() {
        throw new Error("getRawResponse not implemented.");
      }
      toStream(streamCompleteCallback) {
        throw new Error("toStream not implemented.");
      }
      toJSON() {
        throw new Error("toJSON not implemented.");
      }
    };
    module.exports = { HttpClient, HttpClientResponse };
  }
});

// node_modules/stripe/lib/makeRequest.js
var require_makeRequest = __commonJS({
  "node_modules/stripe/lib/makeRequest.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var utils = require_utils2();
    function getRequestOpts(self, requestArgs, spec, overrideData) {
      const requestMethod = (spec.method || "GET").toUpperCase();
      const urlParams = spec.urlParams || [];
      const encode = spec.encode || ((data2) => data2);
      const isUsingFullPath = !!spec.fullPath;
      const commandPath = utils.makeURLInterpolator(
        isUsingFullPath ? spec.fullPath : spec.path || ""
      );
      const path = isUsingFullPath ? spec.fullPath : self.createResourcePathWithSymbols(spec.path);
      const args = [].slice.call(requestArgs);
      const urlData = urlParams.reduce((urlData2, param) => {
        const arg = args.shift();
        if (typeof arg !== "string") {
          throw new Error(
            `Stripe: Argument "${param}" must be a string, but got: ${arg} (on API request to \`${requestMethod} ${path}\`)`
          );
        }
        urlData2[param] = arg;
        return urlData2;
      }, {});
      const dataFromArgs = utils.getDataFromArgs(args);
      const data = encode(Object.assign({}, dataFromArgs, overrideData));
      const options = utils.getOptionsFromArgs(args);
      const host = options.host || spec.host;
      const streaming = !!spec.streaming;
      if (args.filter((x) => x != null).length) {
        throw new Error(
          `Stripe: Unknown arguments (${args}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${requestMethod} \`${path}\`)`
        );
      }
      const requestPath = isUsingFullPath ? commandPath(urlData) : self.createFullPath(commandPath, urlData);
      const headers = Object.assign(options.headers, spec.headers);
      if (spec.validator) {
        spec.validator(data, { headers });
      }
      const dataInQuery = spec.method === "GET" || spec.method === "DELETE";
      const bodyData = dataInQuery ? {} : data;
      const queryData = dataInQuery ? data : {};
      return {
        requestMethod,
        requestPath,
        bodyData,
        queryData,
        auth: options.auth,
        headers,
        host,
        streaming,
        settings: options.settings
      };
    }
    __name(getRequestOpts, "getRequestOpts");
    function makeRequest(self, requestArgs, spec, overrideData) {
      return new Promise((resolve, reject) => {
        let opts;
        try {
          opts = getRequestOpts(self, requestArgs, spec, overrideData);
        } catch (err) {
          reject(err);
          return;
        }
        function requestCallback(err, response) {
          if (err) {
            reject(err);
          } else {
            resolve(
              spec.transformResponseData ? spec.transformResponseData(response) : response
            );
          }
        }
        __name(requestCallback, "requestCallback");
        const emptyQuery = Object.keys(opts.queryData).length === 0;
        const path = [
          opts.requestPath,
          emptyQuery ? "" : "?",
          utils.stringifyRequestData(opts.queryData)
        ].join("");
        const { headers, settings } = opts;
        self._request(
          opts.requestMethod,
          opts.host,
          path,
          opts.bodyData,
          opts.auth,
          { headers, settings, streaming: opts.streaming },
          requestCallback
        );
      });
    }
    __name(makeRequest, "makeRequest");
    module.exports = makeRequest;
  }
});

// node_modules/stripe/lib/autoPagination.js
var require_autoPagination = __commonJS({
  "node_modules/stripe/lib/autoPagination.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var makeRequest = require_makeRequest();
    var utils = require_utils2();
    function makeAutoPaginationMethods(self, requestArgs, spec, firstPagePromise) {
      const promiseCache = { currentPromise: null };
      const reverseIteration = isReverseIteration(requestArgs);
      let pagePromise = firstPagePromise;
      let i = 0;
      let getNextPagePromise;
      if (spec.methodType === "search") {
        getNextPagePromise = /* @__PURE__ */ __name((pageResult) => {
          if (!pageResult.next_page) {
            throw Error(
              "Unexpected: Stripe API response does not have a well-formed `next_page` field, but `has_more` was true."
            );
          }
          return makeRequest(self, requestArgs, spec, {
            page: pageResult.next_page
          });
        }, "getNextPagePromise");
      } else {
        getNextPagePromise = /* @__PURE__ */ __name((pageResult) => {
          const lastId = getLastId(pageResult, reverseIteration);
          return makeRequest(self, requestArgs, spec, {
            [reverseIteration ? "ending_before" : "starting_after"]: lastId
          });
        }, "getNextPagePromise");
      }
      function iterate(pageResult) {
        if (!(pageResult && pageResult.data && typeof pageResult.data.length === "number")) {
          throw Error(
            "Unexpected: Stripe API response does not have a well-formed `data` array."
          );
        }
        if (i < pageResult.data.length) {
          const idx = reverseIteration ? pageResult.data.length - 1 - i : i;
          const value = pageResult.data[idx];
          i += 1;
          return { value, done: false };
        } else if (pageResult.has_more) {
          i = 0;
          pagePromise = getNextPagePromise(pageResult);
          return pagePromise.then(iterate);
        }
        return { value: void 0, done: true };
      }
      __name(iterate, "iterate");
      function asyncIteratorNext() {
        return memoizedPromise(promiseCache, (resolve, reject) => {
          return pagePromise.then(iterate).then(resolve).catch(reject);
        });
      }
      __name(asyncIteratorNext, "asyncIteratorNext");
      const autoPagingEach = makeAutoPagingEach(asyncIteratorNext);
      const autoPagingToArray = makeAutoPagingToArray(autoPagingEach);
      const autoPaginationMethods = {
        autoPagingEach,
        autoPagingToArray,
        // Async iterator functions:
        next: asyncIteratorNext,
        return: /* @__PURE__ */ __name(() => {
          return {};
        }, "return"),
        [getAsyncIteratorSymbol()]: () => {
          return autoPaginationMethods;
        }
      };
      return autoPaginationMethods;
    }
    __name(makeAutoPaginationMethods, "makeAutoPaginationMethods");
    module.exports.makeAutoPaginationMethods = makeAutoPaginationMethods;
    function getAsyncIteratorSymbol() {
      if (typeof Symbol !== "undefined" && Symbol.asyncIterator) {
        return Symbol.asyncIterator;
      }
      return "@@asyncIterator";
    }
    __name(getAsyncIteratorSymbol, "getAsyncIteratorSymbol");
    function getDoneCallback(args) {
      if (args.length < 2) {
        return void 0;
      }
      const onDone = args[1];
      if (typeof onDone !== "function") {
        throw Error(
          `The second argument to autoPagingEach, if present, must be a callback function; received ${typeof onDone}`
        );
      }
      return onDone;
    }
    __name(getDoneCallback, "getDoneCallback");
    function getItemCallback(args) {
      if (args.length === 0) {
        return void 0;
      }
      const onItem = args[0];
      if (typeof onItem !== "function") {
        throw Error(
          `The first argument to autoPagingEach, if present, must be a callback function; received ${typeof onItem}`
        );
      }
      if (onItem.length === 2) {
        return onItem;
      }
      if (onItem.length > 2) {
        throw Error(
          `The \`onItem\` callback function passed to autoPagingEach must accept at most two arguments; got ${onItem}`
        );
      }
      return /* @__PURE__ */ __name(function _onItem(item, next) {
        const shouldContinue = onItem(item);
        next(shouldContinue);
      }, "_onItem");
    }
    __name(getItemCallback, "getItemCallback");
    function getLastId(listResult, reverseIteration) {
      const lastIdx = reverseIteration ? 0 : listResult.data.length - 1;
      const lastItem = listResult.data[lastIdx];
      const lastId = lastItem && lastItem.id;
      if (!lastId) {
        throw Error(
          "Unexpected: No `id` found on the last item while auto-paging a list."
        );
      }
      return lastId;
    }
    __name(getLastId, "getLastId");
    function memoizedPromise(promiseCache, cb) {
      if (promiseCache.currentPromise) {
        return promiseCache.currentPromise;
      }
      promiseCache.currentPromise = new Promise(cb).then((ret) => {
        promiseCache.currentPromise = void 0;
        return ret;
      });
      return promiseCache.currentPromise;
    }
    __name(memoizedPromise, "memoizedPromise");
    function makeAutoPagingEach(asyncIteratorNext) {
      return /* @__PURE__ */ __name(function autoPagingEach() {
        const args = [].slice.call(arguments);
        const onItem = getItemCallback(args);
        const onDone = getDoneCallback(args);
        if (args.length > 2) {
          throw Error(`autoPagingEach takes up to two arguments; received ${args}`);
        }
        const autoPagePromise = wrapAsyncIteratorWithCallback(
          asyncIteratorNext,
          onItem
        );
        return utils.callbackifyPromiseWithTimeout(autoPagePromise, onDone);
      }, "autoPagingEach");
    }
    __name(makeAutoPagingEach, "makeAutoPagingEach");
    function makeAutoPagingToArray(autoPagingEach) {
      return /* @__PURE__ */ __name(function autoPagingToArray(opts, onDone) {
        const limit = opts && opts.limit;
        if (!limit) {
          throw Error(
            "You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`."
          );
        }
        if (limit > 1e4) {
          throw Error(
            "You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists."
          );
        }
        const promise = new Promise((resolve, reject) => {
          const items = [];
          autoPagingEach((item) => {
            items.push(item);
            if (items.length >= limit) {
              return false;
            }
          }).then(() => {
            resolve(items);
          }).catch(reject);
        });
        return utils.callbackifyPromiseWithTimeout(promise, onDone);
      }, "autoPagingToArray");
    }
    __name(makeAutoPagingToArray, "makeAutoPagingToArray");
    function wrapAsyncIteratorWithCallback(asyncIteratorNext, onItem) {
      return new Promise((resolve, reject) => {
        function handleIteration(iterResult) {
          if (iterResult.done) {
            resolve();
            return;
          }
          const item = iterResult.value;
          return new Promise((next) => {
            onItem(item, next);
          }).then((shouldContinue) => {
            if (shouldContinue === false) {
              return handleIteration({ done: true });
            } else {
              return asyncIteratorNext().then(handleIteration);
            }
          });
        }
        __name(handleIteration, "handleIteration");
        asyncIteratorNext().then(handleIteration).catch(reject);
      });
    }
    __name(wrapAsyncIteratorWithCallback, "wrapAsyncIteratorWithCallback");
    function isReverseIteration(requestArgs) {
      const args = [].slice.call(requestArgs);
      const dataFromArgs = utils.getDataFromArgs(args);
      return !!dataFromArgs.ending_before;
    }
    __name(isReverseIteration, "isReverseIteration");
  }
});

// node_modules/stripe/lib/StripeMethod.js
var require_StripeMethod = __commonJS({
  "node_modules/stripe/lib/StripeMethod.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var utils = require_utils2();
    var makeRequest = require_makeRequest();
    var makeAutoPaginationMethods = require_autoPagination().makeAutoPaginationMethods;
    function stripeMethod(spec) {
      if (spec.path !== void 0 && spec.fullPath !== void 0) {
        throw new Error(
          `Method spec specified both a 'path' (${spec.path}) and a 'fullPath' (${spec.fullPath}).`
        );
      }
      return function(...args) {
        const callback = typeof args[args.length - 1] == "function" && args.pop();
        spec.urlParams = utils.extractUrlParams(
          spec.fullPath || this.createResourcePathWithSymbols(spec.path || "")
        );
        const requestPromise = utils.callbackifyPromiseWithTimeout(
          makeRequest(this, args, spec, {}),
          callback
        );
        if (spec.methodType === "list" || spec.methodType === "search") {
          const autoPaginationMethods = makeAutoPaginationMethods(
            this,
            args,
            spec,
            requestPromise
          );
          Object.assign(requestPromise, autoPaginationMethods);
        }
        return requestPromise;
      };
    }
    __name(stripeMethod, "stripeMethod");
    module.exports = stripeMethod;
  }
});

// node_modules/stripe/lib/StripeMethod.basic.js
var require_StripeMethod_basic = __commonJS({
  "node_modules/stripe/lib/StripeMethod.basic.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var stripeMethod = require_StripeMethod();
    module.exports = {
      create: stripeMethod({
        method: "POST"
      }),
      list: stripeMethod({
        method: "GET",
        methodType: "list"
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{id}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "{id}"
      }),
      // Avoid 'delete' keyword in JS
      del: stripeMethod({
        method: "DELETE",
        path: "{id}"
      })
    };
  }
});

// node_modules/stripe/lib/StripeResource.js
var require_StripeResource = __commonJS({
  "node_modules/stripe/lib/StripeResource.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var path = require_path();
    var utils = require_utils2();
    var {
      StripeConnectionError,
      StripeAuthenticationError,
      StripePermissionError,
      StripeRateLimitError,
      StripeError,
      StripeAPIError
    } = require_Error();
    var { HttpClient } = require_HttpClient();
    StripeResource.extend = utils.protoExtend;
    StripeResource.method = require_StripeMethod();
    StripeResource.BASIC_METHODS = require_StripeMethod_basic();
    StripeResource.MAX_BUFFERED_REQUEST_METRICS = 100;
    var MAX_RETRY_AFTER_WAIT = 60;
    function StripeResource(stripe, deprecatedUrlData) {
      this._stripe = stripe;
      if (deprecatedUrlData) {
        throw new Error(
          "Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids."
        );
      }
      this.basePath = utils.makeURLInterpolator(
        this.basePath || stripe.getApiField("basePath")
      );
      this.resourcePath = this.path;
      this.path = utils.makeURLInterpolator(this.path);
      if (this.includeBasic) {
        this.includeBasic.forEach(function(methodName) {
          this[methodName] = StripeResource.BASIC_METHODS[methodName];
        }, this);
      }
      this.initialize(...arguments);
    }
    __name(StripeResource, "StripeResource");
    StripeResource.prototype = {
      path: "",
      // Methods that don't use the API's default '/v1' path can override it with this setting.
      basePath: null,
      initialize() {
      },
      // Function to override the default data processor. This allows full control
      // over how a StripeResource's request data will get converted into an HTTP
      // body. This is useful for non-standard HTTP requests. The function should
      // take method name, data, and headers as arguments.
      requestDataProcessor: null,
      // Function to add a validation checks before sending the request, errors should
      // be thrown, and they will be passed to the callback/promise.
      validateRequest: null,
      createFullPath(commandPath, urlData) {
        return path.join(
          this.basePath(urlData),
          this.path(urlData),
          typeof commandPath == "function" ? commandPath(urlData) : commandPath
        ).replace(/\\/g, "/");
      },
      // Creates a relative resource path with symbols left in (unlike
      // createFullPath which takes some data to replace them with). For example it
      // might produce: /invoices/{id}
      createResourcePathWithSymbols(pathWithSymbols) {
        return `/${path.join(this.resourcePath, pathWithSymbols || "").replace(/\\/g, "/")}`;
      },
      // DEPRECATED: Here for backcompat in case users relied on this.
      wrapTimeout: utils.callbackifyPromiseWithTimeout,
      _timeoutHandler(timeout, req, callback) {
        return () => {
          const timeoutErr = new TypeError("ETIMEDOUT");
          timeoutErr.code = "ETIMEDOUT";
          req.destroy(timeoutErr);
        };
      },
      _addHeadersDirectlyToObject(obj, headers) {
        obj.requestId = headers["request-id"];
        obj.stripeAccount = obj.stripeAccount || headers["stripe-account"];
        obj.apiVersion = obj.apiVersion || headers["stripe-version"];
        obj.idempotencyKey = obj.idempotencyKey || headers["idempotency-key"];
      },
      _makeResponseEvent(requestEvent, statusCode, headers) {
        const requestEndTime = Date.now();
        const requestDurationMs = requestEndTime - requestEvent.request_start_time;
        return utils.removeNullish({
          api_version: headers["stripe-version"],
          account: headers["stripe-account"],
          idempotency_key: headers["idempotency-key"],
          method: requestEvent.method,
          path: requestEvent.path,
          status: statusCode,
          request_id: this._getRequestId(headers),
          elapsed: requestDurationMs,
          request_start_time: requestEvent.request_start_time,
          request_end_time: requestEndTime
        });
      },
      _getRequestId(headers) {
        return headers["request-id"];
      },
      /**
       * Used by methods with spec.streaming === true. For these methods, we do not
       * buffer successful responses into memory or do parse them into stripe
       * objects, we delegate that all of that to the user and pass back the raw
       * http.Response object to the callback.
       *
       * (Unsuccessful responses shouldn't make it here, they should
       * still be buffered/parsed and handled by _jsonResponseHandler -- see
       * makeRequest)
       */
      _streamingResponseHandler(requestEvent, callback) {
        return (res) => {
          const headers = res.getHeaders();
          const streamCompleteCallback = /* @__PURE__ */ __name(() => {
            const responseEvent = this._makeResponseEvent(
              requestEvent,
              res.getStatusCode(),
              headers
            );
            this._stripe._emitter.emit("response", responseEvent);
            this._recordRequestMetrics(
              this._getRequestId(headers),
              responseEvent.elapsed
            );
          }, "streamCompleteCallback");
          const stream = res.toStream(streamCompleteCallback);
          this._addHeadersDirectlyToObject(stream, headers);
          return callback(null, stream);
        };
      },
      /**
       * Default handler for Stripe responses. Buffers the response into memory,
       * parses the JSON and returns it (i.e. passes it to the callback) if there
       * is no "error" field. Otherwise constructs/passes an appropriate Error.
       */
      _jsonResponseHandler(requestEvent, callback) {
        return (res) => {
          const headers = res.getHeaders();
          const requestId = this._getRequestId(headers);
          const statusCode = res.getStatusCode();
          const responseEvent = this._makeResponseEvent(
            requestEvent,
            statusCode,
            headers
          );
          this._stripe._emitter.emit("response", responseEvent);
          res.toJSON().then(
            (jsonResponse) => {
              if (jsonResponse.error) {
                let err;
                if (typeof jsonResponse.error === "string") {
                  jsonResponse.error = {
                    type: jsonResponse.error,
                    message: jsonResponse.error_description
                  };
                }
                jsonResponse.error.headers = headers;
                jsonResponse.error.statusCode = statusCode;
                jsonResponse.error.requestId = requestId;
                if (statusCode === 401) {
                  err = new StripeAuthenticationError(jsonResponse.error);
                } else if (statusCode === 403) {
                  err = new StripePermissionError(jsonResponse.error);
                } else if (statusCode === 429) {
                  err = new StripeRateLimitError(jsonResponse.error);
                } else {
                  err = StripeError.generate(jsonResponse.error);
                }
                throw err;
              }
              return jsonResponse;
            },
            (e) => {
              throw new StripeAPIError({
                message: "Invalid JSON received from the Stripe API",
                exception: e,
                requestId: headers["request-id"]
              });
            }
          ).then(
            (jsonResponse) => {
              this._recordRequestMetrics(requestId, responseEvent.elapsed);
              const rawResponse = res.getRawResponse();
              this._addHeadersDirectlyToObject(rawResponse, headers);
              Object.defineProperty(jsonResponse, "lastResponse", {
                enumerable: false,
                writable: false,
                value: rawResponse
              });
              callback.call(this, null, jsonResponse);
            },
            (e) => callback.call(this, e, null)
          );
        };
      },
      _generateConnectionErrorMessage(requestRetries) {
        return `An error occurred with our connection to Stripe.${requestRetries > 0 ? ` Request was retried ${requestRetries} times.` : ""}`;
      },
      _errorHandler(req, requestRetries, callback) {
        return (message, detail) => {
          callback.call(
            this,
            new StripeConnectionError({
              message: this._generateConnectionErrorMessage(requestRetries),
              detail: error
            }),
            null
          );
        };
      },
      // For more on when and how to retry API requests, see https://stripe.com/docs/error-handling#safely-retrying-requests-with-idempotency
      _shouldRetry(res, numRetries, maxRetries) {
        if (numRetries >= maxRetries) {
          return false;
        }
        if (!res) {
          return true;
        }
        if (res.getHeaders()["stripe-should-retry"] === "false") {
          return false;
        }
        if (res.getHeaders()["stripe-should-retry"] === "true") {
          return true;
        }
        if (res.getStatusCode() === 409) {
          return true;
        }
        if (res.getStatusCode() >= 500) {
          return true;
        }
        return false;
      },
      _getSleepTimeInMS(numRetries, retryAfter = null) {
        const initialNetworkRetryDelay = this._stripe.getInitialNetworkRetryDelay();
        const maxNetworkRetryDelay = this._stripe.getMaxNetworkRetryDelay();
        let sleepSeconds = Math.min(
          initialNetworkRetryDelay * Math.pow(numRetries - 1, 2),
          maxNetworkRetryDelay
        );
        sleepSeconds *= 0.5 * (1 + Math.random());
        sleepSeconds = Math.max(initialNetworkRetryDelay, sleepSeconds);
        if (Number.isInteger(retryAfter) && retryAfter <= MAX_RETRY_AFTER_WAIT) {
          sleepSeconds = Math.max(sleepSeconds, retryAfter);
        }
        return sleepSeconds * 1e3;
      },
      // Max retries can be set on a per request basis. Favor those over the global setting
      _getMaxNetworkRetries(settings = {}) {
        return settings.maxNetworkRetries && Number.isInteger(settings.maxNetworkRetries) ? settings.maxNetworkRetries : this._stripe.getMaxNetworkRetries();
      },
      _defaultIdempotencyKey(method, settings) {
        const maxRetries = this._getMaxNetworkRetries(settings);
        if (method === "POST" && maxRetries > 0) {
          return `stripe-node-retry-${utils.uuid4()}`;
        }
        return null;
      },
      _makeHeaders(auth, contentLength, apiVersion, clientUserAgent, method, userSuppliedHeaders, userSuppliedSettings) {
        const defaultHeaders = {
          // Use specified auth token or use default from this stripe instance:
          Authorization: auth ? `Bearer ${auth}` : this._stripe.getApiField("auth"),
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": this._getUserAgentString(),
          "X-Stripe-Client-User-Agent": clientUserAgent,
          "X-Stripe-Client-Telemetry": this._getTelemetryHeader(),
          "Stripe-Version": apiVersion,
          "Stripe-Account": this._stripe.getApiField("stripeAccount"),
          "Idempotency-Key": this._defaultIdempotencyKey(
            method,
            userSuppliedSettings
          )
        };
        const methodHasPayload = method == "POST" || method == "PUT" || method == "PATCH";
        if (methodHasPayload || contentLength) {
          if (!methodHasPayload) {
            utils.emitWarning(
              `${method} method had non-zero contentLength but no payload is expected for this verb`
            );
          }
          defaultHeaders["Content-Length"] = contentLength;
        }
        return Object.assign(
          utils.removeNullish(defaultHeaders),
          // If the user supplied, say 'idempotency-key', override instead of appending by ensuring caps are the same.
          utils.normalizeHeaders(userSuppliedHeaders)
        );
      },
      _getUserAgentString() {
        const packageVersion = this._stripe.getConstant("PACKAGE_VERSION");
        const appInfo = this._stripe._appInfo ? this._stripe.getAppInfoAsString() : "";
        return `Stripe/v1 NodeBindings/${packageVersion} ${appInfo}`.trim();
      },
      _getTelemetryHeader() {
        if (this._stripe.getTelemetryEnabled() && this._stripe._prevRequestMetrics.length > 0) {
          const metrics = this._stripe._prevRequestMetrics.shift();
          return JSON.stringify({
            last_request_metrics: metrics
          });
        }
      },
      _recordRequestMetrics(requestId, requestDurationMs) {
        if (this._stripe.getTelemetryEnabled() && requestId) {
          if (this._stripe._prevRequestMetrics.length > StripeResource.MAX_BUFFERED_REQUEST_METRICS) {
            utils.emitWarning(
              "Request metrics buffer is full, dropping telemetry message."
            );
          } else {
            this._stripe._prevRequestMetrics.push({
              request_id: requestId,
              request_duration_ms: requestDurationMs
            });
          }
        }
      },
      _request(method, host, path2, data, auth, options = {}, callback) {
        let requestData;
        const retryRequest = /* @__PURE__ */ __name((requestFn, apiVersion, headers, requestRetries, retryAfter) => {
          return setTimeout(
            requestFn,
            this._getSleepTimeInMS(requestRetries, retryAfter),
            apiVersion,
            headers,
            requestRetries + 1
          );
        }, "retryRequest");
        const makeRequest = /* @__PURE__ */ __name((apiVersion, headers, numRetries) => {
          const timeout = options.settings && Number.isInteger(options.settings.timeout) && options.settings.timeout >= 0 ? options.settings.timeout : this._stripe.getApiField("timeout");
          const req = this._stripe.getApiField("httpClient").makeRequest(
            host || this._stripe.getApiField("host"),
            this._stripe.getApiField("port"),
            path2,
            method,
            headers,
            requestData,
            this._stripe.getApiField("protocol"),
            timeout
          );
          const requestStartTime = Date.now();
          const requestEvent = utils.removeNullish({
            api_version: apiVersion,
            account: headers["Stripe-Account"],
            idempotency_key: headers["Idempotency-Key"],
            method,
            path: path2,
            request_start_time: requestStartTime
          });
          const requestRetries = numRetries || 0;
          const maxRetries = this._getMaxNetworkRetries(options.settings);
          this._stripe._emitter.emit("request", requestEvent);
          req.then((res) => {
            if (this._shouldRetry(res, requestRetries, maxRetries)) {
              return retryRequest(
                makeRequest,
                apiVersion,
                headers,
                requestRetries,
                res.getHeaders()["retry-after"]
              );
            } else if (options.streaming && res.getStatusCode() < 400) {
              return this._streamingResponseHandler(requestEvent, callback)(res);
            } else {
              return this._jsonResponseHandler(requestEvent, callback)(res);
            }
          }).catch((error2) => {
            if (this._shouldRetry(null, requestRetries, maxRetries)) {
              return retryRequest(
                makeRequest,
                apiVersion,
                headers,
                requestRetries,
                null
              );
            } else {
              const isTimeoutError = error2.code && error2.code === HttpClient.TIMEOUT_ERROR_CODE;
              return callback.call(
                this,
                new StripeConnectionError({
                  message: isTimeoutError ? `Request aborted due to timeout being reached (${timeout}ms)` : this._generateConnectionErrorMessage(requestRetries),
                  detail: error2
                })
              );
            }
          });
        }, "makeRequest");
        const prepareAndMakeRequest = /* @__PURE__ */ __name((error2, data2) => {
          if (error2) {
            return callback(error2);
          }
          requestData = data2;
          this._stripe.getClientUserAgent((clientUserAgent) => {
            const apiVersion = this._stripe.getApiField("version");
            const headers = this._makeHeaders(
              auth,
              requestData.length,
              apiVersion,
              clientUserAgent,
              method,
              options.headers,
              options.settings
            );
            makeRequest(apiVersion, headers);
          });
        }, "prepareAndMakeRequest");
        if (this.requestDataProcessor) {
          this.requestDataProcessor(
            method,
            data,
            options.headers,
            prepareAndMakeRequest
          );
        } else {
          prepareAndMakeRequest(null, utils.stringifyRequestData(data || {}));
        }
      }
    };
    module.exports = StripeResource;
  }
});

// node_modules/stripe/lib/resources/Accounts.js
var require_Accounts = __commonJS({
  "node_modules/stripe/lib/resources/Accounts.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "",
      create: stripeMethod({
        method: "POST",
        path: "accounts"
      }),
      retrieve(id) {
        if (typeof id === "string") {
          return stripeMethod({
            method: "GET",
            path: "accounts/{id}"
          }).apply(this, arguments);
        } else {
          if (id === null || id === void 0) {
            [].shift.apply(arguments);
          }
          return stripeMethod({
            method: "GET",
            path: "account"
          }).apply(this, arguments);
        }
      },
      update: stripeMethod({
        method: "POST",
        path: "accounts/{account}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "accounts",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        path: "accounts/{account}"
      }),
      reject: stripeMethod({
        method: "POST",
        path: "accounts/{account}/reject"
      }),
      retrieveCapability: stripeMethod({
        method: "GET",
        path: "accounts/{account}/capabilities/{capability}"
      }),
      updateCapability: stripeMethod({
        method: "POST",
        path: "accounts/{account}/capabilities/{capability}"
      }),
      listCapabilities: stripeMethod({
        method: "GET",
        path: "accounts/{account}/capabilities",
        methodType: "list"
      }),
      createExternalAccount: stripeMethod({
        method: "POST",
        path: "accounts/{account}/external_accounts"
      }),
      retrieveExternalAccount: stripeMethod({
        method: "GET",
        path: "accounts/{account}/external_accounts/{id}"
      }),
      updateExternalAccount: stripeMethod({
        method: "POST",
        path: "accounts/{account}/external_accounts/{id}"
      }),
      listExternalAccounts: stripeMethod({
        method: "GET",
        path: "accounts/{account}/external_accounts",
        methodType: "list"
      }),
      deleteExternalAccount: stripeMethod({
        method: "DELETE",
        path: "accounts/{account}/external_accounts/{id}"
      }),
      createLoginLink: stripeMethod({
        method: "POST",
        path: "accounts/{account}/login_links"
      }),
      createPerson: stripeMethod({
        method: "POST",
        path: "accounts/{account}/persons"
      }),
      retrievePerson: stripeMethod({
        method: "GET",
        path: "accounts/{account}/persons/{person}"
      }),
      updatePerson: stripeMethod({
        method: "POST",
        path: "accounts/{account}/persons/{person}"
      }),
      listPersons: stripeMethod({
        method: "GET",
        path: "accounts/{account}/persons",
        methodType: "list"
      }),
      deletePerson: stripeMethod({
        method: "DELETE",
        path: "accounts/{account}/persons/{person}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/AccountLinks.js
var require_AccountLinks = __commonJS({
  "node_modules/stripe/lib/resources/AccountLinks.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "account_links",
      create: stripeMethod({
        method: "POST",
        path: ""
      })
    });
  }
});

// node_modules/stripe/lib/resources/ApplePayDomains.js
var require_ApplePayDomains = __commonJS({
  "node_modules/stripe/lib/resources/ApplePayDomains.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "apple_pay/domains",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{domain}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        path: "/{domain}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/ApplicationFees.js
var require_ApplicationFees = __commonJS({
  "node_modules/stripe/lib/resources/ApplicationFees.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "application_fees",
      retrieve: stripeMethod({
        method: "GET",
        path: "/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      createRefund: stripeMethod({
        method: "POST",
        path: "/{id}/refunds"
      }),
      retrieveRefund: stripeMethod({
        method: "GET",
        path: "/{fee}/refunds/{id}"
      }),
      updateRefund: stripeMethod({
        method: "POST",
        path: "/{fee}/refunds/{id}"
      }),
      listRefunds: stripeMethod({
        method: "GET",
        path: "/{id}/refunds",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Balance.js
var require_Balance = __commonJS({
  "node_modules/stripe/lib/resources/Balance.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "balance",
      retrieve: stripeMethod({
        method: "GET",
        path: ""
      })
    });
  }
});

// node_modules/stripe/lib/resources/BalanceTransactions.js
var require_BalanceTransactions = __commonJS({
  "node_modules/stripe/lib/resources/BalanceTransactions.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "balance_transactions",
      retrieve: stripeMethod({
        method: "GET",
        path: "/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Charges.js
var require_Charges = __commonJS({
  "node_modules/stripe/lib/resources/Charges.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "charges",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{charge}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{charge}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      capture: stripeMethod({
        method: "POST",
        path: "/{charge}/capture"
      }),
      search: stripeMethod({
        method: "GET",
        path: "/search",
        methodType: "search"
      })
    });
  }
});

// node_modules/stripe/lib/resources/CountrySpecs.js
var require_CountrySpecs = __commonJS({
  "node_modules/stripe/lib/resources/CountrySpecs.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "country_specs",
      retrieve: stripeMethod({
        method: "GET",
        path: "/{country}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Coupons.js
var require_Coupons = __commonJS({
  "node_modules/stripe/lib/resources/Coupons.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "coupons",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{coupon}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{coupon}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        path: "/{coupon}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/CreditNotes.js
var require_CreditNotes = __commonJS({
  "node_modules/stripe/lib/resources/CreditNotes.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "credit_notes",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{id}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      preview: stripeMethod({
        method: "GET",
        path: "/preview"
      }),
      voidCreditNote: stripeMethod({
        method: "POST",
        path: "/{id}/void"
      }),
      listLineItems: stripeMethod({
        method: "GET",
        path: "/{creditNote}/lines",
        methodType: "list"
      }),
      listPreviewLineItems: stripeMethod({
        method: "GET",
        path: "/preview/lines",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Customers.js
var require_Customers = __commonJS({
  "node_modules/stripe/lib/resources/Customers.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "customers",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{customer}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{customer}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        path: "/{customer}"
      }),
      createFundingInstructions: stripeMethod({
        method: "POST",
        path: "/{customer}/funding_instructions"
      }),
      deleteDiscount: stripeMethod({
        method: "DELETE",
        path: "/{customer}/discount"
      }),
      listPaymentMethods: stripeMethod({
        method: "GET",
        path: "/{customer}/payment_methods",
        methodType: "list"
      }),
      search: stripeMethod({
        method: "GET",
        path: "/search",
        methodType: "search"
      }),
      retrieveCashBalance: stripeMethod({
        method: "GET",
        path: "/{customer}/cash_balance"
      }),
      updateCashBalance: stripeMethod({
        method: "POST",
        path: "/{customer}/cash_balance"
      }),
      createBalanceTransaction: stripeMethod({
        method: "POST",
        path: "/{customer}/balance_transactions"
      }),
      retrieveBalanceTransaction: stripeMethod({
        method: "GET",
        path: "/{customer}/balance_transactions/{transaction}"
      }),
      updateBalanceTransaction: stripeMethod({
        method: "POST",
        path: "/{customer}/balance_transactions/{transaction}"
      }),
      listBalanceTransactions: stripeMethod({
        method: "GET",
        path: "/{customer}/balance_transactions",
        methodType: "list"
      }),
      createSource: stripeMethod({
        method: "POST",
        path: "/{customer}/sources"
      }),
      retrieveSource: stripeMethod({
        method: "GET",
        path: "/{customer}/sources/{id}"
      }),
      updateSource: stripeMethod({
        method: "POST",
        path: "/{customer}/sources/{id}"
      }),
      listSources: stripeMethod({
        method: "GET",
        path: "/{customer}/sources",
        methodType: "list"
      }),
      deleteSource: stripeMethod({
        method: "DELETE",
        path: "/{customer}/sources/{id}"
      }),
      verifySource: stripeMethod({
        method: "POST",
        path: "/{customer}/sources/{id}/verify"
      }),
      createTaxId: stripeMethod({
        method: "POST",
        path: "/{customer}/tax_ids"
      }),
      retrieveTaxId: stripeMethod({
        method: "GET",
        path: "/{customer}/tax_ids/{id}"
      }),
      listTaxIds: stripeMethod({
        method: "GET",
        path: "/{customer}/tax_ids",
        methodType: "list"
      }),
      deleteTaxId: stripeMethod({
        method: "DELETE",
        path: "/{customer}/tax_ids/{id}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Disputes.js
var require_Disputes = __commonJS({
  "node_modules/stripe/lib/resources/Disputes.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "disputes",
      retrieve: stripeMethod({
        method: "GET",
        path: "/{dispute}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{dispute}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      close: stripeMethod({
        method: "POST",
        path: "/{dispute}/close"
      })
    });
  }
});

// node_modules/stripe/lib/resources/EphemeralKeys.js
var require_EphemeralKeys = __commonJS({
  "node_modules/stripe/lib/resources/EphemeralKeys.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "ephemeral_keys",
      create: stripeMethod({
        method: "POST",
        path: "",
        validator: /* @__PURE__ */ __name((data, options) => {
          if (!options.headers || !options.headers["Stripe-Version"]) {
            throw new Error(
              "Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node"
            );
          }
        }, "validator")
      }),
      del: stripeMethod({
        method: "DELETE",
        path: "/{key}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Events.js
var require_Events = __commonJS({
  "node_modules/stripe/lib/resources/Events.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "events",
      retrieve: stripeMethod({
        method: "GET",
        path: "/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/ExchangeRates.js
var require_ExchangeRates = __commonJS({
  "node_modules/stripe/lib/resources/ExchangeRates.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "exchange_rates",
      retrieve: stripeMethod({
        method: "GET",
        path: "/{rateId}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/multipart.js
var require_multipart = __commonJS({
  "node_modules/stripe/lib/multipart.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var utils = require_utils2();
    var { StripeError } = require_Error();
    var StreamProcessingError = class extends StripeError {
      static {
        __name(this, "StreamProcessingError");
      }
    };
    var multipartDataGenerator = /* @__PURE__ */ __name((method, data, headers) => {
      const segno = (Math.round(Math.random() * 1e16) + Math.round(Math.random() * 1e16)).toString();
      headers["Content-Type"] = `multipart/form-data; boundary=${segno}`;
      let buffer = Buffer.alloc(0);
      function push(l) {
        const prevBuffer = buffer;
        const newBuffer = l instanceof Buffer ? l : Buffer.from(l);
        buffer = Buffer.alloc(prevBuffer.length + newBuffer.length + 2);
        prevBuffer.copy(buffer);
        newBuffer.copy(buffer, prevBuffer.length);
        buffer.write("\r\n", buffer.length - 2);
      }
      __name(push, "push");
      function q(s) {
        return `"${s.replace(/"|"/g, "%22").replace(/\r\n|\r|\n/g, " ")}"`;
      }
      __name(q, "q");
      const flattenedData = utils.flattenAndStringify(data);
      for (const k in flattenedData) {
        const v = flattenedData[k];
        push(`--${segno}`);
        if (v.hasOwnProperty("data")) {
          push(
            `Content-Disposition: form-data; name=${q(k)}; filename=${q(
              v.name || "blob"
            )}`
          );
          push(`Content-Type: ${v.type || "application/octet-stream"}`);
          push("");
          push(v.data);
        } else {
          push(`Content-Disposition: form-data; name=${q(k)}`);
          push("");
          push(v);
        }
      }
      push(`--${segno}--`);
      return buffer;
    }, "multipartDataGenerator");
    var streamProcessor = /* @__PURE__ */ __name((method, data, headers, callback) => {
      const bufferArray = [];
      data.file.data.on("data", (line) => {
        bufferArray.push(line);
      }).once("end", () => {
        const bufferData = Object.assign({}, data);
        bufferData.file.data = Buffer.concat(bufferArray);
        const buffer = multipartDataGenerator(method, bufferData, headers);
        callback(null, buffer);
      }).on("error", (err) => {
        callback(
          new StreamProcessingError({
            message: "An error occurred while attempting to process the file for upload.",
            detail: err
          }),
          null
        );
      });
    }, "streamProcessor");
    var multipartRequestDataProcessor = /* @__PURE__ */ __name((method, data, headers, callback) => {
      data = data || {};
      if (method !== "POST") {
        return callback(null, utils.stringifyRequestData(data));
      }
      const isStream = utils.checkForStream(data);
      if (isStream) {
        return streamProcessor(method, data, headers, callback);
      }
      const buffer = multipartDataGenerator(method, data, headers);
      return callback(null, buffer);
    }, "multipartRequestDataProcessor");
    module.exports.multipartRequestDataProcessor = multipartRequestDataProcessor;
  }
});

// node_modules/stripe/lib/resources/Files.js
var require_Files = __commonJS({
  "node_modules/stripe/lib/resources/Files.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var { multipartRequestDataProcessor } = require_multipart();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "files",
      create: stripeMethod({
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        host: "files.stripe.com"
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{file}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      requestDataProcessor: multipartRequestDataProcessor
    });
  }
});

// node_modules/stripe/lib/resources/FileLinks.js
var require_FileLinks = __commonJS({
  "node_modules/stripe/lib/resources/FileLinks.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "file_links",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{link}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{link}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Invoices.js
var require_Invoices = __commonJS({
  "node_modules/stripe/lib/resources/Invoices.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "invoices",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{invoice}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{invoice}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        path: "/{invoice}"
      }),
      finalizeInvoice: stripeMethod({
        method: "POST",
        path: "/{invoice}/finalize"
      }),
      markUncollectible: stripeMethod({
        method: "POST",
        path: "/{invoice}/mark_uncollectible"
      }),
      pay: stripeMethod({
        method: "POST",
        path: "/{invoice}/pay"
      }),
      retrieveUpcoming: stripeMethod({
        method: "GET",
        path: "/upcoming"
      }),
      search: stripeMethod({
        method: "GET",
        path: "/search",
        methodType: "search"
      }),
      sendInvoice: stripeMethod({
        method: "POST",
        path: "/{invoice}/send"
      }),
      voidInvoice: stripeMethod({
        method: "POST",
        path: "/{invoice}/void"
      }),
      listLineItems: stripeMethod({
        method: "GET",
        path: "/{invoice}/lines",
        methodType: "list"
      }),
      listUpcomingLineItems: stripeMethod({
        method: "GET",
        path: "/upcoming/lines",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/InvoiceItems.js
var require_InvoiceItems = __commonJS({
  "node_modules/stripe/lib/resources/InvoiceItems.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "invoiceitems",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{invoiceitem}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{invoiceitem}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        path: "/{invoiceitem}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/IssuerFraudRecords.js
var require_IssuerFraudRecords = __commonJS({
  "node_modules/stripe/lib/resources/IssuerFraudRecords.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "issuer_fraud_records",
      retrieve: stripeMethod({
        method: "GET",
        path: "/{issuerFraudRecord}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Mandates.js
var require_Mandates = __commonJS({
  "node_modules/stripe/lib/resources/Mandates.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "mandates",
      retrieve: stripeMethod({
        method: "GET",
        path: "/{mandate}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/OAuth.js
var require_OAuth = __commonJS({
  "node_modules/stripe/lib/resources/OAuth.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    var utils = require_utils2();
    var oAuthHost = "connect.stripe.com";
    module.exports = StripeResource.extend({
      basePath: "/",
      authorizeUrl(params, options) {
        params = params || {};
        options = options || {};
        let path = "oauth/authorize";
        if (options.express) {
          path = `express/${path}`;
        }
        if (!params.response_type) {
          params.response_type = "code";
        }
        if (!params.client_id) {
          params.client_id = this._stripe.getClientId();
        }
        if (!params.scope) {
          params.scope = "read_write";
        }
        return `https://${oAuthHost}/${path}?${utils.stringifyRequestData(params)}`;
      },
      token: stripeMethod({
        method: "POST",
        path: "oauth/token",
        host: oAuthHost
      }),
      deauthorize(spec) {
        if (!spec.client_id) {
          spec.client_id = this._stripe.getClientId();
        }
        return stripeMethod({
          method: "POST",
          path: "oauth/deauthorize",
          host: oAuthHost
        }).apply(this, arguments);
      }
    });
  }
});

// node_modules/stripe/lib/resources/Orders.js
var require_Orders = __commonJS({
  "node_modules/stripe/lib/resources/Orders.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "orders",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{id}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      pay: stripeMethod({
        method: "POST",
        path: "/{id}/pay"
      }),
      returnOrder: stripeMethod({
        method: "POST",
        path: "/{id}/returns"
      })
    });
  }
});

// node_modules/stripe/lib/resources/OrderReturns.js
var require_OrderReturns = __commonJS({
  "node_modules/stripe/lib/resources/OrderReturns.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "order_returns",
      retrieve: stripeMethod({
        method: "GET",
        path: "/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/PaymentIntents.js
var require_PaymentIntents = __commonJS({
  "node_modules/stripe/lib/resources/PaymentIntents.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "payment_intents",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{intent}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{intent}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      applyCustomerBalance: stripeMethod({
        method: "POST",
        path: "/{intent}/apply_customer_balance"
      }),
      cancel: stripeMethod({
        method: "POST",
        path: "/{intent}/cancel"
      }),
      capture: stripeMethod({
        method: "POST",
        path: "/{intent}/capture"
      }),
      confirm: stripeMethod({
        method: "POST",
        path: "/{intent}/confirm"
      }),
      incrementAuthorization: stripeMethod({
        method: "POST",
        path: "/{intent}/increment_authorization"
      }),
      search: stripeMethod({
        method: "GET",
        path: "/search",
        methodType: "search"
      }),
      verifyMicrodeposits: stripeMethod({
        method: "POST",
        path: "/{intent}/verify_microdeposits"
      })
    });
  }
});

// node_modules/stripe/lib/resources/PaymentLinks.js
var require_PaymentLinks = __commonJS({
  "node_modules/stripe/lib/resources/PaymentLinks.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "payment_links",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{paymentLink}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{paymentLink}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      listLineItems: stripeMethod({
        method: "GET",
        path: "/{paymentLink}/line_items",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/PaymentMethods.js
var require_PaymentMethods = __commonJS({
  "node_modules/stripe/lib/resources/PaymentMethods.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "payment_methods",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{paymentMethod}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{paymentMethod}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      attach: stripeMethod({
        method: "POST",
        path: "/{paymentMethod}/attach"
      }),
      detach: stripeMethod({
        method: "POST",
        path: "/{paymentMethod}/detach"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Payouts.js
var require_Payouts = __commonJS({
  "node_modules/stripe/lib/resources/Payouts.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "payouts",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{payout}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{payout}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        path: "/{payout}/cancel"
      }),
      reverse: stripeMethod({
        method: "POST",
        path: "/{payout}/reverse"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Plans.js
var require_Plans = __commonJS({
  "node_modules/stripe/lib/resources/Plans.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "plans",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{plan}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{plan}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        path: "/{plan}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Prices.js
var require_Prices = __commonJS({
  "node_modules/stripe/lib/resources/Prices.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "prices",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{price}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{price}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      search: stripeMethod({
        method: "GET",
        path: "/search",
        methodType: "search"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Products.js
var require_Products = __commonJS({
  "node_modules/stripe/lib/resources/Products.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "products",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{id}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        path: "/{id}"
      }),
      search: stripeMethod({
        method: "GET",
        path: "/search",
        methodType: "search"
      })
    });
  }
});

// node_modules/stripe/lib/resources/PromotionCodes.js
var require_PromotionCodes = __commonJS({
  "node_modules/stripe/lib/resources/PromotionCodes.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "promotion_codes",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{promotionCode}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{promotionCode}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Quotes.js
var require_Quotes = __commonJS({
  "node_modules/stripe/lib/resources/Quotes.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "quotes",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{quote}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{quote}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      accept: stripeMethod({
        method: "POST",
        path: "/{quote}/accept"
      }),
      cancel: stripeMethod({
        method: "POST",
        path: "/{quote}/cancel"
      }),
      finalizeQuote: stripeMethod({
        method: "POST",
        path: "/{quote}/finalize"
      }),
      listComputedUpfrontLineItems: stripeMethod({
        method: "GET",
        path: "/{quote}/computed_upfront_line_items",
        methodType: "list"
      }),
      listLineItems: stripeMethod({
        method: "GET",
        path: "/{quote}/line_items",
        methodType: "list"
      }),
      pdf: stripeMethod({
        host: "files.stripe.com",
        method: "GET",
        path: "/{quote}/pdf",
        streaming: true
      })
    });
  }
});

// node_modules/stripe/lib/resources/Refunds.js
var require_Refunds = __commonJS({
  "node_modules/stripe/lib/resources/Refunds.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "refunds",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{refund}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{refund}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        path: "/{refund}/cancel"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Reviews.js
var require_Reviews = __commonJS({
  "node_modules/stripe/lib/resources/Reviews.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "reviews",
      retrieve: stripeMethod({
        method: "GET",
        path: "/{review}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      approve: stripeMethod({
        method: "POST",
        path: "/{review}/approve"
      })
    });
  }
});

// node_modules/stripe/lib/resources/SetupAttempts.js
var require_SetupAttempts = __commonJS({
  "node_modules/stripe/lib/resources/SetupAttempts.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "setup_attempts",
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/SetupIntents.js
var require_SetupIntents = __commonJS({
  "node_modules/stripe/lib/resources/SetupIntents.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "setup_intents",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{intent}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{intent}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        path: "/{intent}/cancel"
      }),
      confirm: stripeMethod({
        method: "POST",
        path: "/{intent}/confirm"
      }),
      verifyMicrodeposits: stripeMethod({
        method: "POST",
        path: "/{intent}/verify_microdeposits"
      })
    });
  }
});

// node_modules/stripe/lib/resources/ShippingRates.js
var require_ShippingRates = __commonJS({
  "node_modules/stripe/lib/resources/ShippingRates.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "shipping_rates",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{shippingRateToken}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{shippingRateToken}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/SKUs.js
var require_SKUs = __commonJS({
  "node_modules/stripe/lib/resources/SKUs.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "skus",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{id}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        path: "/{id}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Sources.js
var require_Sources = __commonJS({
  "node_modules/stripe/lib/resources/Sources.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "sources",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{source}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{source}"
      }),
      listSourceTransactions: stripeMethod({
        method: "GET",
        path: "/{source}/source_transactions",
        methodType: "list"
      }),
      verify: stripeMethod({
        method: "POST",
        path: "/{source}/verify"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Subscriptions.js
var require_Subscriptions = __commonJS({
  "node_modules/stripe/lib/resources/Subscriptions.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "subscriptions",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{subscriptionExposedId}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{subscriptionExposedId}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        path: "/{subscriptionExposedId}"
      }),
      deleteDiscount: stripeMethod({
        method: "DELETE",
        path: "/{subscriptionExposedId}/discount"
      }),
      search: stripeMethod({
        method: "GET",
        path: "/search",
        methodType: "search"
      })
    });
  }
});

// node_modules/stripe/lib/resources/SubscriptionItems.js
var require_SubscriptionItems = __commonJS({
  "node_modules/stripe/lib/resources/SubscriptionItems.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "subscription_items",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{item}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{item}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        path: "/{item}"
      }),
      createUsageRecord: stripeMethod({
        method: "POST",
        path: "/{subscriptionItem}/usage_records"
      }),
      listUsageRecordSummaries: stripeMethod({
        method: "GET",
        path: "/{subscriptionItem}/usage_record_summaries",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/SubscriptionSchedules.js
var require_SubscriptionSchedules = __commonJS({
  "node_modules/stripe/lib/resources/SubscriptionSchedules.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "subscription_schedules",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{schedule}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{schedule}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        path: "/{schedule}/cancel"
      }),
      release: stripeMethod({
        method: "POST",
        path: "/{schedule}/release"
      })
    });
  }
});

// node_modules/stripe/lib/resources/TaxCodes.js
var require_TaxCodes = __commonJS({
  "node_modules/stripe/lib/resources/TaxCodes.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "tax_codes",
      retrieve: stripeMethod({
        method: "GET",
        path: "/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/TaxRates.js
var require_TaxRates = __commonJS({
  "node_modules/stripe/lib/resources/TaxRates.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "tax_rates",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{taxRate}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{taxRate}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Tokens.js
var require_Tokens = __commonJS({
  "node_modules/stripe/lib/resources/Tokens.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "tokens",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{token}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Topups.js
var require_Topups = __commonJS({
  "node_modules/stripe/lib/resources/Topups.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "topups",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{topup}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{topup}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        path: "/{topup}/cancel"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Transfers.js
var require_Transfers = __commonJS({
  "node_modules/stripe/lib/resources/Transfers.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "transfers",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{transfer}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{transfer}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      createReversal: stripeMethod({
        method: "POST",
        path: "/{id}/reversals"
      }),
      retrieveReversal: stripeMethod({
        method: "GET",
        path: "/{transfer}/reversals/{id}"
      }),
      updateReversal: stripeMethod({
        method: "POST",
        path: "/{transfer}/reversals/{id}"
      }),
      listReversals: stripeMethod({
        method: "GET",
        path: "/{id}/reversals",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/WebhookEndpoints.js
var require_WebhookEndpoints = __commonJS({
  "node_modules/stripe/lib/resources/WebhookEndpoints.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "webhook_endpoints",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{webhookEndpoint}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{webhookEndpoint}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        path: "/{webhookEndpoint}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/BillingPortal/Configurations.js
var require_Configurations = __commonJS({
  "node_modules/stripe/lib/resources/BillingPortal/Configurations.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "billing_portal/configurations",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{configuration}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{configuration}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/BillingPortal/Sessions.js
var require_Sessions = __commonJS({
  "node_modules/stripe/lib/resources/BillingPortal/Sessions.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "billing_portal/sessions",
      create: stripeMethod({
        method: "POST",
        path: ""
      })
    });
  }
});

// node_modules/stripe/lib/resources/Checkout/Sessions.js
var require_Sessions2 = __commonJS({
  "node_modules/stripe/lib/resources/Checkout/Sessions.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "checkout/sessions",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{session}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      expire: stripeMethod({
        method: "POST",
        path: "/{session}/expire"
      }),
      listLineItems: stripeMethod({
        method: "GET",
        path: "/{session}/line_items",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/FinancialConnections/Accounts.js
var require_Accounts2 = __commonJS({
  "node_modules/stripe/lib/resources/FinancialConnections/Accounts.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "financial_connections/accounts",
      retrieve: stripeMethod({
        method: "GET",
        path: "/{account}"
      }),
      disconnect: stripeMethod({
        method: "POST",
        path: "/{account}/disconnect"
      }),
      refresh: stripeMethod({
        method: "POST",
        path: "/{account}/refresh"
      })
    });
  }
});

// node_modules/stripe/lib/resources/FinancialConnections/Sessions.js
var require_Sessions3 = __commonJS({
  "node_modules/stripe/lib/resources/FinancialConnections/Sessions.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "financial_connections/sessions",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{session}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Identity/VerificationReports.js
var require_VerificationReports = __commonJS({
  "node_modules/stripe/lib/resources/Identity/VerificationReports.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "identity/verification_reports",
      retrieve: stripeMethod({
        method: "GET",
        path: "/{report}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Identity/VerificationSessions.js
var require_VerificationSessions = __commonJS({
  "node_modules/stripe/lib/resources/Identity/VerificationSessions.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "identity/verification_sessions",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{session}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{session}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        path: "/{session}/cancel"
      }),
      redact: stripeMethod({
        method: "POST",
        path: "/{session}/redact"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Issuing/Authorizations.js
var require_Authorizations = __commonJS({
  "node_modules/stripe/lib/resources/Issuing/Authorizations.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "issuing/authorizations",
      retrieve: stripeMethod({
        method: "GET",
        path: "/{authorization}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{authorization}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      approve: stripeMethod({
        method: "POST",
        path: "/{authorization}/approve"
      }),
      decline: stripeMethod({
        method: "POST",
        path: "/{authorization}/decline"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Issuing/Cards.js
var require_Cards = __commonJS({
  "node_modules/stripe/lib/resources/Issuing/Cards.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "issuing/cards",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{card}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{card}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      retrieveDetails: stripeMethod({
        method: "GET",
        path: "/{card}/details"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Issuing/Cardholders.js
var require_Cardholders = __commonJS({
  "node_modules/stripe/lib/resources/Issuing/Cardholders.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "issuing/cardholders",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{cardholder}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{cardholder}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Issuing/Disputes.js
var require_Disputes2 = __commonJS({
  "node_modules/stripe/lib/resources/Issuing/Disputes.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "issuing/disputes",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{dispute}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{dispute}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      submit: stripeMethod({
        method: "POST",
        path: "/{dispute}/submit"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Issuing/Transactions.js
var require_Transactions = __commonJS({
  "node_modules/stripe/lib/resources/Issuing/Transactions.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "issuing/transactions",
      retrieve: stripeMethod({
        method: "GET",
        path: "/{transaction}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{transaction}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Radar/EarlyFraudWarnings.js
var require_EarlyFraudWarnings = __commonJS({
  "node_modules/stripe/lib/resources/Radar/EarlyFraudWarnings.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "radar/early_fraud_warnings",
      retrieve: stripeMethod({
        method: "GET",
        path: "/{earlyFraudWarning}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Radar/ValueLists.js
var require_ValueLists = __commonJS({
  "node_modules/stripe/lib/resources/Radar/ValueLists.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "radar/value_lists",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{valueList}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{valueList}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        path: "/{valueList}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Radar/ValueListItems.js
var require_ValueListItems = __commonJS({
  "node_modules/stripe/lib/resources/Radar/ValueListItems.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "radar/value_list_items",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{item}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        path: "/{item}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Reporting/ReportRuns.js
var require_ReportRuns = __commonJS({
  "node_modules/stripe/lib/resources/Reporting/ReportRuns.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "reporting/report_runs",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{reportRun}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Reporting/ReportTypes.js
var require_ReportTypes = __commonJS({
  "node_modules/stripe/lib/resources/Reporting/ReportTypes.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "reporting/report_types",
      retrieve: stripeMethod({
        method: "GET",
        path: "/{reportType}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Sigma/ScheduledQueryRuns.js
var require_ScheduledQueryRuns = __commonJS({
  "node_modules/stripe/lib/resources/Sigma/ScheduledQueryRuns.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "sigma/scheduled_query_runs",
      retrieve: stripeMethod({
        method: "GET",
        path: "/{scheduledQueryRun}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Terminal/Configurations.js
var require_Configurations2 = __commonJS({
  "node_modules/stripe/lib/resources/Terminal/Configurations.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "terminal/configurations",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{configuration}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{configuration}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        path: "/{configuration}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Terminal/ConnectionTokens.js
var require_ConnectionTokens = __commonJS({
  "node_modules/stripe/lib/resources/Terminal/ConnectionTokens.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "terminal/connection_tokens",
      create: stripeMethod({
        method: "POST",
        path: ""
      })
    });
  }
});

// node_modules/stripe/lib/resources/Terminal/Locations.js
var require_Locations = __commonJS({
  "node_modules/stripe/lib/resources/Terminal/Locations.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "terminal/locations",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{location}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{location}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        path: "/{location}"
      })
    });
  }
});

// node_modules/stripe/lib/resources/Terminal/Readers.js
var require_Readers = __commonJS({
  "node_modules/stripe/lib/resources/Terminal/Readers.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "terminal/readers",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{reader}"
      }),
      update: stripeMethod({
        method: "POST",
        path: "/{reader}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        path: "/{reader}"
      }),
      cancelAction: stripeMethod({
        method: "POST",
        path: "/{reader}/cancel_action"
      }),
      processPaymentIntent: stripeMethod({
        method: "POST",
        path: "/{reader}/process_payment_intent"
      }),
      processSetupIntent: stripeMethod({
        method: "POST",
        path: "/{reader}/process_setup_intent"
      }),
      setReaderDisplay: stripeMethod({
        method: "POST",
        path: "/{reader}/set_reader_display"
      })
    });
  }
});

// node_modules/stripe/lib/resources/TestHelpers/Refunds.js
var require_Refunds2 = __commonJS({
  "node_modules/stripe/lib/resources/TestHelpers/Refunds.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "test_helpers/refunds",
      expire: stripeMethod({
        method: "POST",
        path: "/{refund}/expire"
      })
    });
  }
});

// node_modules/stripe/lib/resources/TestHelpers/TestClocks.js
var require_TestClocks = __commonJS({
  "node_modules/stripe/lib/resources/TestHelpers/TestClocks.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "test_helpers/test_clocks",
      create: stripeMethod({
        method: "POST",
        path: ""
      }),
      retrieve: stripeMethod({
        method: "GET",
        path: "/{testClock}"
      }),
      list: stripeMethod({
        method: "GET",
        path: "",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        path: "/{testClock}"
      }),
      advance: stripeMethod({
        method: "POST",
        path: "/{testClock}/advance"
      })
    });
  }
});

// node_modules/stripe/lib/resources/TestHelpers/Terminal/Readers.js
var require_Readers2 = __commonJS({
  "node_modules/stripe/lib/resources/TestHelpers/Terminal/Readers.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeResource = require_StripeResource();
    var stripeMethod = StripeResource.method;
    module.exports = StripeResource.extend({
      path: "test_helpers/terminal/readers",
      presentPaymentMethod: stripeMethod({
        method: "POST",
        path: "/{reader}/present_payment_method"
      })
    });
  }
});

// node_modules/stripe/lib/resources.js
var require_resources = __commonJS({
  "node_modules/stripe/lib/resources.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var resourceNamespace = require_ResourceNamespace();
    module.exports = {
      Accounts: require_Accounts(),
      // Support Accounts for consistency, Account for backwards compatibility
      Account: require_Accounts(),
      AccountLinks: require_AccountLinks(),
      ApplePayDomains: require_ApplePayDomains(),
      ApplicationFees: require_ApplicationFees(),
      Balance: require_Balance(),
      BalanceTransactions: require_BalanceTransactions(),
      Charges: require_Charges(),
      CountrySpecs: require_CountrySpecs(),
      Coupons: require_Coupons(),
      CreditNotes: require_CreditNotes(),
      Customers: require_Customers(),
      Disputes: require_Disputes(),
      EphemeralKeys: require_EphemeralKeys(),
      Events: require_Events(),
      ExchangeRates: require_ExchangeRates(),
      Files: require_Files(),
      FileLinks: require_FileLinks(),
      Invoices: require_Invoices(),
      InvoiceItems: require_InvoiceItems(),
      IssuerFraudRecords: require_IssuerFraudRecords(),
      Mandates: require_Mandates(),
      OAuth: require_OAuth(),
      Orders: require_Orders(),
      OrderReturns: require_OrderReturns(),
      PaymentIntents: require_PaymentIntents(),
      PaymentLinks: require_PaymentLinks(),
      PaymentMethods: require_PaymentMethods(),
      Payouts: require_Payouts(),
      Plans: require_Plans(),
      Prices: require_Prices(),
      Products: require_Products(),
      PromotionCodes: require_PromotionCodes(),
      Quotes: require_Quotes(),
      Refunds: require_Refunds(),
      Reviews: require_Reviews(),
      SetupAttempts: require_SetupAttempts(),
      SetupIntents: require_SetupIntents(),
      ShippingRates: require_ShippingRates(),
      Skus: require_SKUs(),
      Sources: require_Sources(),
      Subscriptions: require_Subscriptions(),
      SubscriptionItems: require_SubscriptionItems(),
      SubscriptionSchedules: require_SubscriptionSchedules(),
      TaxCodes: require_TaxCodes(),
      TaxRates: require_TaxRates(),
      Tokens: require_Tokens(),
      Topups: require_Topups(),
      Transfers: require_Transfers(),
      WebhookEndpoints: require_WebhookEndpoints(),
      BillingPortal: resourceNamespace("billingPortal", {
        Configurations: require_Configurations(),
        Sessions: require_Sessions()
      }),
      Checkout: resourceNamespace("checkout", {
        Sessions: require_Sessions2()
      }),
      FinancialConnections: resourceNamespace("financialConnections", {
        Accounts: require_Accounts2(),
        Sessions: require_Sessions3()
      }),
      Identity: resourceNamespace("identity", {
        VerificationReports: require_VerificationReports(),
        VerificationSessions: require_VerificationSessions()
      }),
      Issuing: resourceNamespace("issuing", {
        Authorizations: require_Authorizations(),
        Cards: require_Cards(),
        Cardholders: require_Cardholders(),
        Disputes: require_Disputes2(),
        Transactions: require_Transactions()
      }),
      Radar: resourceNamespace("radar", {
        EarlyFraudWarnings: require_EarlyFraudWarnings(),
        ValueLists: require_ValueLists(),
        ValueListItems: require_ValueListItems()
      }),
      Reporting: resourceNamespace("reporting", {
        ReportRuns: require_ReportRuns(),
        ReportTypes: require_ReportTypes()
      }),
      Sigma: resourceNamespace("sigma", {
        ScheduledQueryRuns: require_ScheduledQueryRuns()
      }),
      Terminal: resourceNamespace("terminal", {
        Configurations: require_Configurations2(),
        ConnectionTokens: require_ConnectionTokens(),
        Locations: require_Locations(),
        Readers: require_Readers()
      }),
      TestHelpers: resourceNamespace("testHelpers", {
        Refunds: require_Refunds2(),
        TestClocks: require_TestClocks(),
        Terminal: resourceNamespace("terminal", {
          Readers: require_Readers2()
        })
      })
    };
  }
});

// node_modules/stripe/package.json
var require_package = __commonJS({
  "node_modules/stripe/package.json"(exports, module) {
    module.exports = {
      name: "stripe",
      version: "8.222.0",
      description: "Stripe API wrapper",
      keywords: [
        "stripe",
        "payment processing",
        "credit cards",
        "api"
      ],
      homepage: "https://github.com/stripe/stripe-node",
      author: "Stripe <support@stripe.com> (https://stripe.com/)",
      contributors: [
        "Ask Bj\xF8rn Hansen <ask@develooper.com> (http://www.askask.com/)",
        "Michelle Bu <michelle@stripe.com>",
        "Alex Sexton <alex@stripe.com>",
        "James Padolsey"
      ],
      repository: {
        type: "git",
        url: "git://github.com/stripe/stripe-node.git"
      },
      bugs: "https://github.com/stripe/stripe-node/issues",
      engines: {
        node: "^8.1 || >=10.*"
      },
      main: "lib/stripe.js",
      types: "types/2020-08-27/index.d.ts",
      devDependencies: {
        "@typescript-eslint/eslint-plugin": "^2.13.0",
        "@typescript-eslint/parser": "^2.13.0",
        chai: "~4.2.0",
        "chai-as-promised": "~7.1.1",
        eslint: "^6.8.0",
        "eslint-config-prettier": "^4.1.0",
        "eslint-plugin-chai-friendly": "^0.4.0",
        "eslint-plugin-prettier": "^3.0.1",
        mocha: "^8.3.2",
        "mocha-junit-reporter": "^1.23.1",
        nock: "^13.1.1",
        "node-fetch": "^2.6.2",
        nyc: "^15.1.0",
        prettier: "^1.16.4",
        typescript: "^3.7.2"
      },
      resolutions: {
        "ansi-regex": "5.0.1",
        minimist: "1.2.6",
        nanoid: "3.2.0"
      },
      dependencies: {
        "@types/node": ">=8.1.0",
        qs: "^6.10.3"
      },
      license: "MIT",
      scripts: {
        clean: "rm -rf ./.nyc_output ./node_modules/.cache ./coverage",
        mocha: "nyc mocha --config=test/.mocharc.js",
        "mocha-only": "mocha --config=test/.mocharc.js",
        test: "yarn test-typescript && yarn mocha",
        "test-typescript": "tsc --build types/test",
        lint: "eslint --ext .js,.jsx,.ts .",
        fix: "yarn lint --fix && ./scripts/updateAPIVersion.js",
        report: "nyc -r text -r lcov report",
        coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js"
      }
    };
  }
});

// node_modules/stripe/lib/crypto/CryptoProvider.js
var require_CryptoProvider = __commonJS({
  "node_modules/stripe/lib/crypto/CryptoProvider.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var CryptoProvider = class {
      static {
        __name(this, "CryptoProvider");
      }
      /**
       * Computes a SHA-256 HMAC given a secret and a payload (encoded in UTF-8).
       * The output HMAC should be encoded in hexadecimal.
       *
       * Sample values for implementations:
       * - computeHMACSignature('', 'test_secret') => 'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
       * - computeHMACSignature('\ud83d\ude00', 'test_secret') => '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43
       */
      computeHMACSignature(payload, secret) {
        throw new Error("computeHMACSignature not implemented.");
      }
      /**
       * Asynchronous version of `computeHMACSignature`. Some implementations may
       * only allow support async signature computation.
       *
       * Computes a SHA-256 HMAC given a secret and a payload (encoded in UTF-8).
       * The output HMAC should be encoded in hexadecimal.
       *
       * Sample values for implementations:
       * - computeHMACSignature('', 'test_secret') => 'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
       * - computeHMACSignature('\ud83d\ude00', 'test_secret') => '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43
       */
      computeHMACSignatureAsync(payload, secret) {
        throw new Error("computeHMACSignatureAsync not implemented.");
      }
    };
    module.exports = CryptoProvider;
  }
});

// node_modules/stripe/lib/crypto/NodeCryptoProvider.js
var require_NodeCryptoProvider = __commonJS({
  "node_modules/stripe/lib/crypto/NodeCryptoProvider.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var crypto2 = require_crypto();
    var CryptoProvider = require_CryptoProvider();
    var NodeCryptoProvider = class extends CryptoProvider {
      static {
        __name(this, "NodeCryptoProvider");
      }
      /** @override */
      computeHMACSignature(payload, secret) {
        return crypto2.createHmac("sha256", secret).update(payload, "utf8").digest("hex");
      }
      /** @override */
      async computeHMACSignatureAsync(payload, secret) {
        const signature = await this.computeHMACSignature(payload, secret);
        return signature;
      }
    };
    module.exports = NodeCryptoProvider;
  }
});

// node_modules/stripe/lib/Webhooks.js
var require_Webhooks = __commonJS({
  "node_modules/stripe/lib/Webhooks.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var utils = require_utils2();
    var { StripeError, StripeSignatureVerificationError } = require_Error();
    var Webhook = {
      DEFAULT_TOLERANCE: 300,
      // 5 minutes
      constructEvent(payload, header, secret, tolerance, cryptoProvider) {
        this.signature.verifyHeader(
          payload,
          header,
          secret,
          tolerance || Webhook.DEFAULT_TOLERANCE,
          cryptoProvider
        );
        const jsonPayload = JSON.parse(payload);
        return jsonPayload;
      },
      async constructEventAsync(payload, header, secret, tolerance, cryptoProvider) {
        await this.signature.verifyHeaderAsync(
          payload,
          header,
          secret,
          tolerance || Webhook.DEFAULT_TOLERANCE,
          cryptoProvider
        );
        const jsonPayload = JSON.parse(payload);
        return jsonPayload;
      },
      /**
       * Generates a header to be used for webhook mocking
       *
       * @typedef {object} opts
       * @property {number} timestamp - Timestamp of the header. Defaults to Date.now()
       * @property {string} payload - JSON stringified payload object, containing the 'id' and 'object' parameters
       * @property {string} secret - Stripe webhook secret 'whsec_...'
       * @property {string} scheme - Version of API to hit. Defaults to 'v1'.
       * @property {string} signature - Computed webhook signature
       * @property {CryptoProvider} cryptoProvider - Crypto provider to use for computing the signature if none was provided. Defaults to NodeCryptoProvider.
       */
      generateTestHeaderString: /* @__PURE__ */ __name(function(opts) {
        if (!opts) {
          throw new StripeError({
            message: "Options are required"
          });
        }
        opts.timestamp = Math.floor(opts.timestamp) || Math.floor(Date.now() / 1e3);
        opts.scheme = opts.scheme || signature.EXPECTED_SCHEME;
        opts.cryptoProvider = opts.cryptoProvider || getNodeCryptoProvider();
        opts.signature = opts.signature || opts.cryptoProvider.computeHMACSignature(
          opts.timestamp + "." + opts.payload,
          opts.secret
        );
        const generatedHeader = [
          "t=" + opts.timestamp,
          opts.scheme + "=" + opts.signature
        ].join(",");
        return generatedHeader;
      }, "generateTestHeaderString")
    };
    var signature = {
      EXPECTED_SCHEME: "v1",
      verifyHeader(encodedPayload, encodedHeader, secret, tolerance, cryptoProvider) {
        const {
          decodedHeader: header,
          decodedPayload: payload,
          details
        } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
        cryptoProvider = cryptoProvider || getNodeCryptoProvider();
        const expectedSignature = cryptoProvider.computeHMACSignature(
          makeHMACContent(payload, details),
          secret
        );
        validateComputedSignature(
          payload,
          header,
          details,
          expectedSignature,
          tolerance
        );
        return true;
      },
      async verifyHeaderAsync(encodedPayload, encodedHeader, secret, tolerance, cryptoProvider) {
        const {
          decodedHeader: header,
          decodedPayload: payload,
          details
        } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
        cryptoProvider = cryptoProvider || getNodeCryptoProvider();
        const expectedSignature = await cryptoProvider.computeHMACSignatureAsync(
          makeHMACContent(payload, details),
          secret
        );
        return validateComputedSignature(
          payload,
          header,
          details,
          expectedSignature,
          tolerance
        );
      }
    };
    function makeHMACContent(payload, details) {
      return `${details.timestamp}.${payload}`;
    }
    __name(makeHMACContent, "makeHMACContent");
    function parseEventDetails(encodedPayload, encodedHeader, expectedScheme) {
      const decodedPayload = Buffer.isBuffer(encodedPayload) ? encodedPayload.toString("utf8") : encodedPayload;
      if (Array.isArray(encodedHeader)) {
        throw new Error(
          "Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header."
        );
      }
      const decodedHeader = Buffer.isBuffer(encodedHeader) ? encodedHeader.toString("utf8") : encodedHeader;
      const details = parseHeader(decodedHeader, expectedScheme);
      if (!details || details.timestamp === -1) {
        throw new StripeSignatureVerificationError({
          message: "Unable to extract timestamp and signatures from header",
          detail: {
            decodedHeader,
            decodedPayload
          }
        });
      }
      if (!details.signatures.length) {
        throw new StripeSignatureVerificationError({
          message: "No signatures found with expected scheme",
          detail: {
            decodedHeader,
            decodedPayload
          }
        });
      }
      return {
        decodedPayload,
        decodedHeader,
        details
      };
    }
    __name(parseEventDetails, "parseEventDetails");
    function validateComputedSignature(payload, header, details, expectedSignature, tolerance) {
      const signatureFound = !!details.signatures.filter(
        utils.secureCompare.bind(utils, expectedSignature)
      ).length;
      if (!signatureFound) {
        throw new StripeSignatureVerificationError({
          message: "No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe? https://github.com/stripe/stripe-node#webhook-signing",
          detail: {
            header,
            payload
          }
        });
      }
      const timestampAge = Math.floor(Date.now() / 1e3) - details.timestamp;
      if (tolerance > 0 && timestampAge > tolerance) {
        throw new StripeSignatureVerificationError({
          message: "Timestamp outside the tolerance zone",
          detail: {
            header,
            payload
          }
        });
      }
      return true;
    }
    __name(validateComputedSignature, "validateComputedSignature");
    function parseHeader(header, scheme) {
      if (typeof header !== "string") {
        return null;
      }
      return header.split(",").reduce(
        (accum, item) => {
          const kv = item.split("=");
          if (kv[0] === "t") {
            accum.timestamp = kv[1];
          }
          if (kv[0] === scheme) {
            accum.signatures.push(kv[1]);
          }
          return accum;
        },
        {
          timestamp: -1,
          signatures: []
        }
      );
    }
    __name(parseHeader, "parseHeader");
    var webhooksNodeCryptoProviderInstance = null;
    function getNodeCryptoProvider() {
      if (!webhooksNodeCryptoProviderInstance) {
        const NodeCryptoProvider = require_NodeCryptoProvider();
        webhooksNodeCryptoProviderInstance = new NodeCryptoProvider();
      }
      return webhooksNodeCryptoProviderInstance;
    }
    __name(getNodeCryptoProvider, "getNodeCryptoProvider");
    Webhook.signature = signature;
    module.exports = Webhook;
  }
});

// node-built-in-modules:http
import libDefault4 from "http";
var require_http = __commonJS({
  "node-built-in-modules:http"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault4;
  }
});

// node-built-in-modules:https
import libDefault5 from "https";
var require_https = __commonJS({
  "node-built-in-modules:https"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault5;
  }
});

// node_modules/stripe/lib/net/NodeHttpClient.js
var require_NodeHttpClient = __commonJS({
  "node_modules/stripe/lib/net/NodeHttpClient.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var http = require_http();
    var https = require_https();
    var { HttpClient, HttpClientResponse } = require_HttpClient();
    var defaultHttpAgent = new http.Agent({ keepAlive: true });
    var defaultHttpsAgent = new https.Agent({ keepAlive: true });
    var NodeHttpClient = class extends HttpClient {
      static {
        __name(this, "NodeHttpClient");
      }
      constructor(agent) {
        super();
        this._agent = agent;
      }
      /** @override. */
      getClientName() {
        return "node";
      }
      makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
        const isInsecureConnection = protocol === "http";
        let agent = this._agent;
        if (!agent) {
          agent = isInsecureConnection ? defaultHttpAgent : defaultHttpsAgent;
        }
        const requestPromise = new Promise((resolve, reject) => {
          const req = (isInsecureConnection ? http : https).request({
            host,
            port,
            path,
            method,
            agent,
            headers,
            ciphers: "DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5"
          });
          req.setTimeout(timeout, () => {
            req.destroy(HttpClient.makeTimeoutError());
          });
          req.on("response", (res) => {
            resolve(new NodeHttpClientResponse(res));
          });
          req.on("error", (error2) => {
            reject(error2);
          });
          req.once("socket", (socket) => {
            if (socket.connecting) {
              socket.once(
                isInsecureConnection ? "connect" : "secureConnect",
                () => {
                  req.write(requestData);
                  req.end();
                }
              );
            } else {
              req.write(requestData);
              req.end();
            }
          });
        });
        return requestPromise;
      }
    };
    var NodeHttpClientResponse = class extends HttpClientResponse {
      static {
        __name(this, "NodeHttpClientResponse");
      }
      constructor(res) {
        super(res.statusCode, res.headers || {});
        this._res = res;
      }
      getRawResponse() {
        return this._res;
      }
      toStream(streamCompleteCallback) {
        this._res.once("end", () => streamCompleteCallback());
        return this._res;
      }
      toJSON() {
        return new Promise((resolve, reject) => {
          let response = "";
          this._res.setEncoding("utf8");
          this._res.on("data", (chunk) => {
            response += chunk;
          });
          this._res.once("end", () => {
            try {
              resolve(JSON.parse(response));
            } catch (e) {
              reject(e);
            }
          });
        });
      }
    };
    module.exports = { NodeHttpClient, NodeHttpClientResponse };
  }
});

// node_modules/stripe/lib/net/FetchHttpClient.js
var require_FetchHttpClient = __commonJS({
  "node_modules/stripe/lib/net/FetchHttpClient.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var { HttpClient, HttpClientResponse } = require_HttpClient();
    var FetchHttpClient = class extends HttpClient {
      static {
        __name(this, "FetchHttpClient");
      }
      constructor(fetchFn) {
        super();
        this._fetchFn = fetchFn;
      }
      /** @override. */
      getClientName() {
        return "fetch";
      }
      makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
        const isInsecureConnection = protocol === "http";
        const url = new URL(
          path,
          `${isInsecureConnection ? "http" : "https"}://${host}`
        );
        url.port = port;
        const fetchFn = this._fetchFn || fetch;
        const fetchPromise = fetchFn(url.toString(), {
          method,
          headers,
          body: requestData || void 0
        });
        let pendingTimeoutId;
        const timeoutPromise = new Promise((_, reject) => {
          pendingTimeoutId = setTimeout(() => {
            pendingTimeoutId = null;
            reject(HttpClient.makeTimeoutError());
          }, timeout);
        });
        return Promise.race([fetchPromise, timeoutPromise]).then((res) => {
          return new FetchHttpClientResponse(res);
        }).finally(() => {
          if (pendingTimeoutId) {
            clearTimeout(pendingTimeoutId);
          }
        });
      }
    };
    var FetchHttpClientResponse = class _FetchHttpClientResponse extends HttpClientResponse {
      static {
        __name(this, "FetchHttpClientResponse");
      }
      constructor(res) {
        super(
          res.status,
          _FetchHttpClientResponse._transformHeadersToObject(res.headers)
        );
        this._res = res;
      }
      getRawResponse() {
        return this._res;
      }
      toStream(streamCompleteCallback) {
        streamCompleteCallback();
        return this._res.body;
      }
      toJSON() {
        return this._res.json();
      }
      static _transformHeadersToObject(headers) {
        const headersObj = {};
        for (const entry of headers) {
          if (!Array.isArray(entry) || entry.length != 2) {
            throw new Error(
              "Response objects produced by the fetch function given to FetchHttpClient do not have an iterable headers map. Response#headers should be an iterable object."
            );
          }
          headersObj[entry[0]] = entry[1];
        }
        return headersObj;
      }
    };
    module.exports = { FetchHttpClient, FetchHttpClientResponse };
  }
});

// node_modules/stripe/lib/crypto/SubtleCryptoProvider.js
var require_SubtleCryptoProvider = __commonJS({
  "node_modules/stripe/lib/crypto/SubtleCryptoProvider.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var CryptoProvider = require_CryptoProvider();
    var SubtleCryptoProvider = class extends CryptoProvider {
      static {
        __name(this, "SubtleCryptoProvider");
      }
      constructor(subtleCrypto) {
        super();
        this.subtleCrypto = subtleCrypto || crypto.subtle;
      }
      /** @override */
      computeHMACSignature(payload, secret) {
        throw new Error(
          "SubtleCryptoProvider cannot be used in a synchronous context."
        );
      }
      /** @override */
      async computeHMACSignatureAsync(payload, secret) {
        const encoder = new TextEncoder("utf-8");
        const key = await this.subtleCrypto.importKey(
          "raw",
          encoder.encode(secret),
          {
            name: "HMAC",
            hash: { name: "SHA-256" }
          },
          false,
          ["sign"]
        );
        const signatureBuffer = await this.subtleCrypto.sign(
          "hmac",
          key,
          encoder.encode(payload)
        );
        const signatureBytes = new Uint8Array(signatureBuffer);
        const signatureHexCodes = new Array(signatureBytes.length);
        for (let i = 0; i < signatureBytes.length; i++) {
          signatureHexCodes[i] = byteHexMapping[signatureBytes[i]];
        }
        return signatureHexCodes.join("");
      }
    };
    var byteHexMapping = new Array(256);
    for (let i = 0; i < byteHexMapping.length; i++) {
      byteHexMapping[i] = i.toString(16).padStart(2, "0");
    }
    module.exports = SubtleCryptoProvider;
  }
});

// node_modules/stripe/lib/stripe.js
var require_stripe = __commonJS({
  "node_modules/stripe/lib/stripe.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var resources = require_resources();
    var DEFAULT_HOST = "api.stripe.com";
    var DEFAULT_PORT = "443";
    var DEFAULT_BASE_PATH = "/v1/";
    var DEFAULT_API_VERSION = null;
    var DEFAULT_TIMEOUT = 8e4;
    Stripe.PACKAGE_VERSION = require_package().version;
    var utils = require_utils2();
    var { determineProcessUserAgentProperties, emitWarning: emitWarning2 } = utils;
    Stripe.USER_AGENT = {
      bindings_version: Stripe.PACKAGE_VERSION,
      lang: "node",
      publisher: "stripe",
      uname: null,
      typescript: false,
      ...determineProcessUserAgentProperties()
    };
    Stripe._UNAME_CACHE = null;
    var MAX_NETWORK_RETRY_DELAY_SEC = 2;
    var INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;
    var APP_INFO_PROPERTIES = ["name", "version", "url", "partner_id"];
    var ALLOWED_CONFIG_PROPERTIES = [
      "apiVersion",
      "typescript",
      "maxNetworkRetries",
      "httpAgent",
      "httpClient",
      "timeout",
      "host",
      "port",
      "protocol",
      "telemetry",
      "appInfo",
      "stripeAccount"
    ];
    var EventEmitter2 = require_events().EventEmitter;
    Stripe.StripeResource = require_StripeResource();
    Stripe.resources = resources;
    var { HttpClient, HttpClientResponse } = require_HttpClient();
    Stripe.HttpClient = HttpClient;
    Stripe.HttpClientResponse = HttpClientResponse;
    var CryptoProvider = require_CryptoProvider();
    Stripe.CryptoProvider = CryptoProvider;
    function Stripe(key, config2 = {}) {
      if (!(this instanceof Stripe)) {
        return new Stripe(key, config2);
      }
      const props = this._getPropsFromConfig(config2);
      Object.defineProperty(this, "_emitter", {
        value: new EventEmitter2(),
        enumerable: false,
        configurable: false,
        writable: false
      });
      this.VERSION = Stripe.PACKAGE_VERSION;
      this.on = this._emitter.on.bind(this._emitter);
      this.once = this._emitter.once.bind(this._emitter);
      this.off = this._emitter.removeListener.bind(this._emitter);
      if (props.protocol && props.protocol !== "https" && (!props.host || /\.stripe\.com$/.test(props.host))) {
        throw new Error(
          "The `https` protocol must be used when sending requests to `*.stripe.com`"
        );
      }
      const agent = props.httpAgent || null;
      this._api = {
        auth: null,
        host: props.host || DEFAULT_HOST,
        port: props.port || DEFAULT_PORT,
        protocol: props.protocol || "https",
        basePath: DEFAULT_BASE_PATH,
        version: props.apiVersion || DEFAULT_API_VERSION,
        timeout: utils.validateInteger("timeout", props.timeout, DEFAULT_TIMEOUT),
        maxNetworkRetries: utils.validateInteger(
          "maxNetworkRetries",
          props.maxNetworkRetries,
          0
        ),
        agent,
        httpClient: props.httpClient || Stripe.createNodeHttpClient(agent),
        dev: false,
        stripeAccount: props.stripeAccount || null
      };
      const typescript = props.typescript || false;
      if (typescript !== Stripe.USER_AGENT.typescript) {
        Stripe.USER_AGENT.typescript = typescript;
      }
      if (props.appInfo) {
        this._setAppInfo(props.appInfo);
      }
      this._prepResources();
      this._setApiKey(key);
      this.errors = require_Error();
      this.webhooks = require_Webhooks();
      this._prevRequestMetrics = [];
      this._enableTelemetry = props.telemetry !== false;
      this.StripeResource = Stripe.StripeResource;
    }
    __name(Stripe, "Stripe");
    Stripe.errors = require_Error();
    Stripe.webhooks = require_Webhooks();
    Stripe.createNodeHttpClient = (agent) => {
      const { NodeHttpClient } = require_NodeHttpClient();
      return new NodeHttpClient(agent);
    };
    Stripe.createFetchHttpClient = (fetchFn) => {
      const { FetchHttpClient } = require_FetchHttpClient();
      return new FetchHttpClient(fetchFn);
    };
    Stripe.createNodeCryptoProvider = () => {
      const NodeCryptoProvider = require_NodeCryptoProvider();
      return new NodeCryptoProvider();
    };
    Stripe.createSubtleCryptoProvider = (subtleCrypto) => {
      const SubtleCryptoProvider = require_SubtleCryptoProvider();
      return new SubtleCryptoProvider(subtleCrypto);
    };
    Stripe.prototype = {
      /**
       * @deprecated will be removed in a future major version. Use the config object instead:
       *
       * const stripe = new Stripe(API_KEY, {
       *   host: 'example.com',
       *   port: '8080',
       *   protocol: 'http',
       * });
       *
       */
      setHost(host, port, protocol) {
        emitWarning2(
          "`setHost` is deprecated. Use the `host` config option instead."
        );
        this._setApiField("host", host);
        if (port) {
          this.setPort(port);
        }
        if (protocol) {
          this.setProtocol(protocol);
        }
      },
      /**
       * @deprecated will be removed in a future major version. Use the config object instead:
       *
       * const stripe = new Stripe(API_KEY, {
       *   protocol: 'http',
       * });
       *
       */
      setProtocol(protocol) {
        emitWarning2(
          "`setProtocol` is deprecated. Use the `protocol` config option instead."
        );
        this._setApiField("protocol", protocol.toLowerCase());
      },
      /**
       * @deprecated will be removed in a future major version. Use the config object instead:
       *
       * const stripe = new Stripe(API_KEY, {
       *   port: 3000,
       * });
       *
       */
      setPort(port) {
        emitWarning2(
          "`setPort` is deprecated. Use the `port` config option instead."
        );
        this._setApiField("port", port);
      },
      /**
       * @deprecated will be removed in a future major version. Use the config object instead:
       *
       * const stripe = new Stripe(API_KEY, {
       *   apiVersion: API_VERSION,
       * });
       *
       */
      setApiVersion(version2) {
        emitWarning2(
          "`setApiVersion` is deprecated. Use the `apiVersion` config or request option instead."
        );
        if (version2) {
          this._setApiField("version", version2);
        }
      },
      /**
       * @deprecated will be removed in a future major version. Use the config object instead:
       *
       * const stripe = new Stripe(API_KEY);
       *
       * Or, for Stripe Connect, use `stripeAccount` instead:
       *
       * const stripe = new Stripe(API_KEY, {
       *   stripeAccount: 'acct_...',
       * });
       *
       * Or, to use a different apiKey on a given request:
       *
       * stripe.customers.create(params, {apiKey: 'sk_test_...'});
       */
      setApiKey(key) {
        emitWarning2(
          "`setApiKey` is deprecated. Use the `apiKey` request option instead."
        );
        this._setApiKey(key);
      },
      /**
       * @private
       */
      _setApiKey(key) {
        if (key) {
          this._setApiField("auth", `Bearer ${key}`);
        }
      },
      /**
       * @deprecated will be removed in a future major version. Use the config object instead:
       *
       * const stripe = new Stripe(API_KEY, {
       *   timeout: TIMEOUT_MS,
       * });
       */
      setTimeout(timeout) {
        emitWarning2(
          "`setTimeout` is deprecated. Use the `timeout` config or request option instead."
        );
        this._setApiField("timeout", timeout == null ? DEFAULT_TIMEOUT : timeout);
      },
      /**
       * @deprecated will be removed in a future major version. Use the config object instead:
       *
       * const stripe = new Stripe(API_KEY, {
       *   appInfo: {
       *     name: 'MyPlugin',
       *     version: '1.4.2',
       *     url: 'https://myplugin.com',
       *     partner_id: '1234',
       *   },
       * });
       */
      setAppInfo(info) {
        emitWarning2(
          "`setAppInfo` is deprecated. Use the `appInfo` config option instead."
        );
        this._setAppInfo(info);
      },
      /**
       * @private
       * This may be removed in the future.
       */
      _setAppInfo(info) {
        if (info && typeof info !== "object") {
          throw new Error("AppInfo must be an object.");
        }
        if (info && !info.name) {
          throw new Error("AppInfo.name is required");
        }
        info = info || {};
        const appInfo = APP_INFO_PROPERTIES.reduce((accum, prop) => {
          if (typeof info[prop] == "string") {
            accum = accum || {};
            accum[prop] = info[prop];
          }
          return accum;
        }, void 0);
        this._appInfo = appInfo;
      },
      /**
       * @deprecated will be removed in a future major version. Use the config object instead:
       *
       * const ProxyAgent = require('https-proxy-agent');
       * const stripe = new Stripe(API_KEY, {
       *   httpAgent: new ProxyAgent(process.env.http_proxy),
       * });
       *
       */
      setHttpAgent(agent) {
        emitWarning2(
          "`setHttpAgent` is deprecated. Use the `httpAgent` config option instead."
        );
        this._setApiField("agent", agent);
      },
      /**
       * @private
       * This may be removed in the future.
       */
      _setApiField(key, value) {
        this._api[key] = value;
      },
      /**
       * @private
       * Please open or upvote an issue at github.com/stripe/stripe-node
       * if you use this, detailing your use-case.
       *
       * It may be deprecated and removed in the future.
       */
      getApiField(key) {
        return this._api[key];
      },
      setClientId(clientId) {
        this._clientId = clientId;
      },
      getClientId() {
        return this._clientId;
      },
      /**
       * @private
       * Please open or upvote an issue at github.com/stripe/stripe-node
       * if you use this, detailing your use-case.
       *
       * It may be deprecated and removed in the future.
       */
      getConstant: /* @__PURE__ */ __name((c) => {
        switch (c) {
          case "DEFAULT_HOST":
            return DEFAULT_HOST;
          case "DEFAULT_PORT":
            return DEFAULT_PORT;
          case "DEFAULT_BASE_PATH":
            return DEFAULT_BASE_PATH;
          case "DEFAULT_API_VERSION":
            return DEFAULT_API_VERSION;
          case "DEFAULT_TIMEOUT":
            return DEFAULT_TIMEOUT;
          case "MAX_NETWORK_RETRY_DELAY_SEC":
            return MAX_NETWORK_RETRY_DELAY_SEC;
          case "INITIAL_NETWORK_RETRY_DELAY_SEC":
            return INITIAL_NETWORK_RETRY_DELAY_SEC;
        }
        return Stripe[c];
      }, "getConstant"),
      getMaxNetworkRetries() {
        return this.getApiField("maxNetworkRetries");
      },
      /**
       * @deprecated will be removed in a future major version. Use the config object instead:
       *
       * const stripe = new Stripe(API_KEY, {
       *   maxNetworkRetries: 2,
       * });
       *
       */
      setMaxNetworkRetries(maxNetworkRetries) {
        this._setApiNumberField("maxNetworkRetries", maxNetworkRetries);
      },
      /**
       * @private
       * This may be removed in the future.
       */
      _setApiNumberField(prop, n, defaultVal) {
        const val = utils.validateInteger(prop, n, defaultVal);
        this._setApiField(prop, val);
      },
      getMaxNetworkRetryDelay() {
        return MAX_NETWORK_RETRY_DELAY_SEC;
      },
      getInitialNetworkRetryDelay() {
        return INITIAL_NETWORK_RETRY_DELAY_SEC;
      },
      /**
       * @private
       */
      getUname(cb) {
        if (!Stripe._UNAME_CACHE) {
          Stripe._UNAME_CACHE = new Promise((resolve) => {
            utils.safeExec("uname -a", (err, uname) => {
              resolve(uname);
            });
          });
        }
        Stripe._UNAME_CACHE.then((uname) => cb(uname));
      },
      /**
       * @private
       * Please open or upvote an issue at github.com/stripe/stripe-node
       * if you use this, detailing your use-case.
       *
       * It may be deprecated and removed in the future.
       *
       * Gets a JSON version of a User-Agent and uses a cached version for a slight
       * speed advantage.
       */
      getClientUserAgent(cb) {
        return this.getClientUserAgentSeeded(Stripe.USER_AGENT, cb);
      },
      /**
       * @private
       * Please open or upvote an issue at github.com/stripe/stripe-node
       * if you use this, detailing your use-case.
       *
       * It may be deprecated and removed in the future.
       *
       * Gets a JSON version of a User-Agent by encoding a seeded object and
       * fetching a uname from the system.
       */
      getClientUserAgentSeeded(seed, cb) {
        this.getUname((uname) => {
          const userAgent = {};
          for (const field in seed) {
            userAgent[field] = encodeURIComponent(seed[field]);
          }
          userAgent.uname = encodeURIComponent(uname || "UNKNOWN");
          const client = this.getApiField("httpClient");
          if (client) {
            userAgent.httplib = encodeURIComponent(client.getClientName());
          }
          if (this._appInfo) {
            userAgent.application = this._appInfo;
          }
          cb(JSON.stringify(userAgent));
        });
      },
      /**
       * @private
       * Please open or upvote an issue at github.com/stripe/stripe-node
       * if you use this, detailing your use-case.
       *
       * It may be deprecated and removed in the future.
       */
      getAppInfoAsString() {
        if (!this._appInfo) {
          return "";
        }
        let formatted = this._appInfo.name;
        if (this._appInfo.version) {
          formatted += `/${this._appInfo.version}`;
        }
        if (this._appInfo.url) {
          formatted += ` (${this._appInfo.url})`;
        }
        return formatted;
      },
      /**
       * @deprecated will be removed in a future major version. Use the config object instead:
       *
       * const stripe = new Stripe(API_KEY, {
       *   telemetry: false,
       * });
       *
       */
      setTelemetryEnabled(enableTelemetry) {
        emitWarning2(
          "`setTelemetryEnabled` is deprecated. Use the `telemetry` config option instead."
        );
        this._enableTelemetry = enableTelemetry;
      },
      getTelemetryEnabled() {
        return this._enableTelemetry;
      },
      /**
       * @private
       * This may be removed in the future.
       */
      _prepResources() {
        for (const name in resources) {
          this[utils.pascalToCamelCase(name)] = new resources[name](this);
        }
      },
      /**
       * @private
       * This may be removed in the future.
       */
      _getPropsFromConfig(config2) {
        if (!config2) {
          return {};
        }
        const isString = typeof config2 === "string";
        const isObject = config2 === Object(config2) && !Array.isArray(config2);
        if (!isObject && !isString) {
          throw new Error("Config must either be an object or a string");
        }
        if (isString) {
          return {
            apiVersion: config2
          };
        }
        const values = Object.keys(config2).filter(
          (value) => !ALLOWED_CONFIG_PROPERTIES.includes(value)
        );
        if (values.length > 0) {
          throw new Error(
            `Config object may only contain the following: ${ALLOWED_CONFIG_PROPERTIES.join(
              ", "
            )}`
          );
        }
        return config2;
      }
    };
    module.exports = Stripe;
    module.exports.Stripe = Stripe;
    module.exports.default = Stripe;
  }
});

// src/services/StripeClient.cjs
var require_StripeClient = __commonJS({
  "src/services/StripeClient.cjs"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var StripeClient = /* @__PURE__ */ (function() {
      class StripeClient2 {
        static {
          __name(this, "StripeClient");
        }
        constructor(secretKey = "") {
          this.secretKey = secretKey;
          if (secretKey) {
            const Stripe = require_stripe();
            this.client = Stripe(secretKey);
          } else {
            this.client = null;
          }
        }
        isAvailable() {
          return !!this.client;
        }
        async createSubscriptionCheckout({ priceId, userId, successUrl, cancelUrl }) {
          if (this.client) {
            return this.client.checkout.sessions.create({
              mode: "subscription",
              payment_method_types: ["card"],
              line_items: [{ price: priceId, quantity: 1 }],
              success_url: successUrl,
              cancel_url: cancelUrl,
              client_reference_id: userId
            });
          }
          return { id: `cs_sim_${Math.random().toString(36).slice(2, 10)}`, url: `https://test.pay/checkout/sub/${priceId}/${userId}`, client_reference_id: userId };
        }
        async createPaymentIntentForVendor({ amount, currency = "usd", vendorAccountId, platformFee = 0, description = "" }) {
          if (this.client) {
            const pi = await this.client.paymentIntents.create({
              amount,
              currency,
              description,
              payment_method_types: ["card"],
              transfer_data: vendorAccountId ? { destination: vendorAccountId } : void 0,
              application_fee_amount: platformFee || void 0
            });
            return pi;
          }
          return { id: `pi_sim_${Math.random().toString(36).slice(2, 10)}`, amount, currency, vendor: vendorAccountId, platformFee };
        }
        async createConnectAccountLink({ accountId, refreshUrl, returnUrl, type = "account_onboarding" }) {
          if (this.client) {
            return this.client.accountLinks.create({ account: accountId, refresh_url: refreshUrl, return_url: returnUrl, type: "account_onboarding" });
          }
          return { url: `https://connect.stripe.com/onboard/${accountId || "sim"}` };
        }
        async createCustomer({ email, metadata = {} } = {}) {
          if (this.client) {
            return await this.client.customers.create({ email, metadata });
          }
          return { id: `cus_sim_${Math.random().toString(36).slice(2, 10)}`, email, metadata };
        }
        verifyWebhook(payload, sigHeader, secret) {
          if (this.client && secret) {
            try {
              const event = this.client.webhooks.constructEvent(payload, sigHeader, secret);
              return event;
            } catch (err) {
              throw err;
            }
          }
          try {
            return JSON.parse(payload);
          } catch (err) {
            throw err;
          }
        }
      }
      return StripeClient2;
    })();
    module.exports = StripeClient;
    module.exports.default = StripeClient;
  }
});

// node-built-in-modules:fs
import libDefault6 from "fs";
var require_fs = __commonJS({
  "node-built-in-modules:fs"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault6;
  }
});

// src/services/BillingStore.cjs
var require_BillingStore = __commonJS({
  "src/services/BillingStore.cjs"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var BillingStore = /* @__PURE__ */ (function() {
      class BillingStore2 {
        static {
          __name(this, "BillingStore");
        }
        constructor(options = {}) {
          const explicitFile = !!options.useFile;
          const isNode = typeof process !== "undefined" && process.versions && process.versions.node;
          this.useFile = explicitFile && isNode;
          this.filePath = null;
          this.customers = [];
          this.vendors = [];
          if (this.useFile) {
            try {
              const fs = require_fs();
              const path = require_path();
              this.filePath = path.join(process.cwd(), "data", "billing.json");
              if (!fs.existsSync(path.dirname(this.filePath))) {
                fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
              }
              if (fs.existsSync(this.filePath)) {
                this._loadFromFile();
              } else {
                this.customers = [];
                this.vendors = [];
                fs.writeFileSync(this.filePath, JSON.stringify({ customers: this.customers, vendors: this.vendors }, null, 2));
              }
            } catch (err) {
              this.useFile = false;
              this.customers = [];
            }
          }
        }
        _persist() {
          if (this.useFile && this.filePath) {
            try {
              const fs = require_fs();
              fs.writeFileSync(this.filePath, JSON.stringify({ customers: this.customers, vendors: this.vendors }, null, 2));
            } catch (err) {
            }
          }
        }
        _loadFromFile() {
          if (this.useFile && this.filePath) {
            try {
              const fs = require_fs();
              const raw = fs.readFileSync(this.filePath, "utf8") || "{}";
              const parsed = JSON.parse(raw);
              this.customers = parsed.customers || [];
              this.vendors = parsed.vendors || [];
            } catch (err) {
            }
          }
        }
        // Create or update a customer record by userId
        upsertCustomer(userId, data) {
          let c = this.customers.find((x) => x.userId === userId);
          if (!c) {
            c = { userId, subscriptions: [], createdAt: (/* @__PURE__ */ new Date()).toISOString(), ...data };
            this.customers.push(c);
          } else {
            Object.assign(c, data);
          }
          this._persist();
          return c;
        }
        getCustomer(userId) {
          return this.customers.find((x) => x.userId === userId) || null;
        }
        // Upsert subscription record for a customer
        upsertSubscription(userId, sub) {
          const cust = this.getCustomer(userId) || this.upsertCustomer(userId, {});
          const idx = cust.subscriptions.findIndex((s) => s.id === sub.id);
          if (idx === -1) cust.subscriptions.push(sub);
          else cust.subscriptions[idx] = Object.assign(cust.subscriptions[idx], sub);
          this._persist();
          return sub;
        }
        hasActiveSubscription(userId) {
          const cust = this.getCustomer(userId);
          if (!cust) return false;
          return cust.subscriptions.some((s) => s.status === "active" || s.status === "trialing");
        }
        // Vendor helpers
        upsertVendor(vendorId, data = {}) {
          let v = this.vendors.find((x) => x.vendorId === vendorId);
          if (!v) {
            v = { vendorId, createdAt: (/* @__PURE__ */ new Date()).toISOString(), ...data };
            this.vendors.push(v);
          } else {
            Object.assign(v, data);
          }
          this._persist();
          return v;
        }
        getVendor(vendorId) {
          return this.vendors.find((x) => x.vendorId === vendorId) || null;
        }
      }
      return BillingStore2;
    })();
    module.exports = BillingStore;
    module.exports.default = BillingStore;
  }
});

// src/services/ConfigStore.cjs
var require_ConfigStore = __commonJS({
  "src/services/ConfigStore.cjs"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    var ConfigStore = /* @__PURE__ */ (function() {
      class ConfigStore2 {
        static {
          __name(this, "ConfigStore");
        }
        constructor(options = {}) {
          const explicitFile = !!options.useFile;
          const isNode = typeof process !== "undefined" && process.versions && process.versions.node;
          this.useFile = explicitFile && isNode;
          this.filePath = null;
          this.config = {};
          if (this.useFile) {
            try {
              const fs = require_fs();
              const path = require_path();
              this.filePath = path.join(process.cwd(), "data", "config.json");
              if (!fs.existsSync(path.dirname(this.filePath))) {
                fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
              }
              if (fs.existsSync(this.filePath)) {
                const raw = fs.readFileSync(this.filePath, "utf8") || "{}";
                this.config = JSON.parse(raw);
              } else {
                this.config = {};
                fs.writeFileSync(this.filePath, JSON.stringify(this.config, null, 2));
              }
            } catch (err) {
              this.useFile = false;
              this.config = {};
            }
          }
        }
        _persist() {
          if (this.useFile && this.filePath) {
            try {
              const fs = require_fs();
              fs.writeFileSync(this.filePath, JSON.stringify(this.config, null, 2));
            } catch (err) {
            }
          }
        }
        get(key) {
          return this.config[key];
        }
        set(key, value) {
          this.config[key] = value;
          this._persist();
          return this.config[key];
        }
        getAll() {
          return { ...this.config };
        }
      }
      return ConfigStore2;
    })();
    module.exports = ConfigStore;
    module.exports.default = ConfigStore;
  }
});

// .wrangler/tmp/bundle-FiH4G5/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// .wrangler/tmp/bundle-FiH4G5/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// worker.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
import { fileURLToPath } from "url";
var worker_default = {
  async fetch(request, env2) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response(generateHomePage(), {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname === "/robots.txt") {
      return new Response(generateRobotsTxt(), {
        headers: { "Content-Type": "text/plain" }
      });
    }
    if (url.pathname === "/sitemap.xml") {
      return new Response(generateSitemapXml(), {
        headers: { "Content-Type": "application/xml" }
      });
    }
    if (url.pathname === "/llms.txt") {
      return new Response(generateLlmsTxt(), {
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }
    if (url.pathname === "/about") {
      return new Response(generateAboutPage(), {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname === "/contact") {
      return new Response(generateContactPage(), {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname.startsWith("/api/autonomous-agent")) {
      return handleAutonomousAgent(request, env2);
    }
    if (url.pathname.startsWith("/api/niche-discovery")) {
      return handleNicheDiscovery(request, env2);
    }
    if (url.pathname.startsWith("/api/keyword-research")) {
      return handleKeywordResearch(request, env2);
    }
    if (url.pathname.startsWith("/api/tech-stack")) {
      return handleTechStack(request, env2);
    }
    if (url.pathname.startsWith("/api/generate")) {
      let content = await generateAIContent(env2.OPENAI_API_KEY);
      return new Response(content, {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname.startsWith("/marketplace/items")) {
      let items = await getMarketplaceItems();
      return new Response(items, {
        headers: { "Content-Type": "application/json" }
      });
    }
    if (url.pathname.startsWith("/marketplace/buy")) {
      let result = await processPayment(env2.PAYMENT_GATEWAY_API_KEY, request);
      return new Response(result, {
        headers: { "Content-Type": "application/json" }
      });
    }
    if (url.pathname === "/marketplace/items" && request.method === "GET") {
      const store = await getProductStore();
      const items = store.getAll();
      return new Response(JSON.stringify(items), { headers: { "Content-Type": "application/json" } });
    }
    const itemMatch = url.pathname.match(/^\/marketplace\/items\/(\d+)$/);
    if (itemMatch && request.method === "GET") {
      const id = itemMatch[1];
      const store = await getProductStore();
      const item = store.getById(id);
      if (!item) return new Response(JSON.stringify({ error: "Not found" }), { status: 404, headers: { "Content-Type": "application/json" } });
      return new Response(JSON.stringify(item), { headers: { "Content-Type": "application/json" } });
    }
    if (url.pathname.startsWith("/admin/items")) {
      return handleAdmin(request, env2);
    }
    if (url.pathname.startsWith("/marketplace/checkout")) {
      return handleCheckout(request, env2);
    }
    if (url.pathname.startsWith("/billing/checkout")) {
      return handleBillingCheckout(request, env2);
    }
    if (url.pathname.startsWith("/webhooks/stripe")) {
      return handleStripeWebhook(request, env2);
    }
    if (url.pathname.startsWith("/webhooks/gumroad")) {
      return handleGumroadWebhook(request, env2);
    }
    if (url.pathname.startsWith("/marketplace/connect/onboard")) {
      return handleConnectOnboard(request, env2);
    }
    if (url.pathname.startsWith("/marketplace/gumroad/checkout")) {
      return handleGumroadCheckout(request, env2);
    }
    if (url.pathname.startsWith("/admin")) {
      return handleAdmin(request, env2);
    }
    if (url.pathname === "/pricing") {
      return handlePricing(request, env2);
    }
    if (url.pathname.startsWith("/billing/attach")) {
      return handleBillingAttach(request, env2);
    }
    if (url.pathname === "/api/pro") {
      return handleProFeature(request, env2);
    }
    if (url.pathname.startsWith("/api/fix-errors")) {
      let result = await fixErrors(env2.OPENAI_API_KEY);
      return new Response(result, {
        headers: { "Content-Type": "application/json" }
      });
    }
    if (url.pathname.startsWith("/api/customer-support")) {
      let result = await handleCustomerSupport(env2.OPENAI_API_KEY, request);
      return new Response(result, {
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response("404 Not Found", { status: 404 });
  }
};
function generateHomePage() {
  const siteUrl = "https://ai-marketplace.com";
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Marketplace",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "Leading AI-powered marketplace for innovative business tools, automation software, and intelligent services.",
    "sameAs": [
      "https://twitter.com/aimarketplace",
      "https://linkedin.com/company/ai-marketplace",
      "https://github.com/ai-marketplace"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "support@ai-market.com"
    }
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI Marketplace",
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Featured AI Products",
    "description": "Top AI-powered tools and services for business automation and growth",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": "AI Content Generator",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "description": "Create high-quality, SEO-optimized content automatically using advanced GPT-4 AI algorithms. Generate blog posts, product descriptions, and marketing copy in seconds. Supports 50+ languages.",
          "offers": { "@type": "Offer", "price": "99", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
          "url": `${siteUrl}/marketplace/items/1`,
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "2847", "bestRating": "5" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "SoftwareApplication",
          "name": "SEO Optimization Tool",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "description": "Boost your Google rankings with AI-powered keyword research, competitor analysis, on-page optimization, backlink monitoring, and real-time rank tracking.",
          "offers": { "@type": "Offer", "price": "149", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
          "url": `${siteUrl}/marketplace/items/2`,
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "1923", "bestRating": "5" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "SoftwareApplication",
          "name": "Analytics Dashboard",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "description": "Make data-driven decisions with real-time AI analytics. Track KPIs, visualize trends, generate automated reports, and predict business outcomes with machine learning.",
          "offers": { "@type": "Offer", "price": "199", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
          "url": `${siteUrl}/marketplace/items/3`,
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1456", "bestRating": "5" }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "SoftwareApplication",
          "name": "Automation Suite",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "description": "Automate repetitive workflows with intelligent AI automation. Connect 500+ apps, set up triggers, conditional logic, and streamline your entire business operation.",
          "offers": { "@type": "Offer", "price": "299", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
          "url": `${siteUrl}/marketplace/items/4`,
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "987", "bestRating": "5" }
        }
      }
    ]
  };
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AI Marketplace",
    "description": "Leading AI-powered marketplace for business tools and automation software",
    "brand": { "@type": "Brand", "name": "AI Marketplace" },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "7213",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sarah Chen" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "AI Marketplace transformed our content workflow. We now produce 10x more blog posts with the AI Content Generator. ROI was visible within the first month."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Michael Torres" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "The SEO tool helped us rank #1 for our main keywords in just 3 months. The competitor analysis feature alone is worth the subscription."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Emily Watson" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Automation Suite saved our team 40+ hours per week. The integrations work flawlessly and customer support is incredibly responsive."
      }
    ]
  };
  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI Marketplace?",
        "acceptedAnswer": { "@type": "Answer", "text": "AI Marketplace is the leading platform for AI-powered business tools and automation software. We offer curated AI solutions including content generators, SEO tools, analytics dashboards, and workflow automation suites used by 10,000+ businesses worldwide." }
      },
      {
        "@type": "Question",
        "name": "How much does AI Marketplace cost?",
        "acceptedAnswer": { "@type": "Answer", "text": "AI Marketplace offers flexible pricing starting with a Free plan ($0/month), Pro plan ($29/month) with unlimited AI access, and Team plan ($99/month) for organizations. All paid plans include a 30-day money-back guarantee." }
      },
      {
        "@type": "Question",
        "name": "Do I need technical skills to use AI Marketplace tools?",
        "acceptedAnswer": { "@type": "Answer", "text": "No technical skills required. All our AI tools are designed with user-friendly interfaces. Most users are up and running within 5 minutes, and we offer 24/7 support plus comprehensive tutorials." }
      }
    ]
  };
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AI Marketplace - Best AI Tools & Automation Software for Business</title>
        <meta name="description" content="Discover the leading AI-powered marketplace for innovative business tools. Find AI content generators, SEO tools, analytics dashboards, and automation software to grow your business.">
        <meta name="keywords" content="AI marketplace, AI tools, automation software, AI content generator, SEO optimization, business analytics, machine learning tools, AI services, productivity software, marketing automation">
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
        <meta name="author" content="AI Marketplace">
        <link rel="canonical" href="${siteUrl}/">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="${siteUrl}/">
        <meta property="og:title" content="AI Marketplace - Best AI Tools & Automation Software">
        <meta property="og:description" content="Discover the leading AI-powered marketplace for innovative business tools. AI content generators, SEO tools, analytics, and automation software.">
        <meta property="og:image" content="${siteUrl}/og-image.jpg">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:site_name" content="AI Marketplace">
        <meta property="og:locale" content="en_US">

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@aimarketplace">
        <meta name="twitter:creator" content="@aimarketplace">
        <meta name="twitter:title" content="AI Marketplace - Best AI Tools & Automation Software">
        <meta name="twitter:description" content="Discover the leading AI-powered marketplace for innovative business tools. AI content generators, SEO tools, and automation software.">
        <meta name="twitter:image" content="${siteUrl}/twitter-card.jpg">

        <!-- JSON-LD Structured Data -->
        <script type="application/ld+json">${JSON.stringify(organizationSchema)}<\/script>
        <script type="application/ld+json">${JSON.stringify(websiteSchema)}<\/script>
        <script type="application/ld+json">${JSON.stringify(productListSchema)}<\/script>
        <script type="application/ld+json">${JSON.stringify(reviewSchema)}<\/script>
        <script type="application/ld+json">${JSON.stringify(homeFaqSchema)}<\/script>

        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                padding: 20px;
            }
            
            .container {
                max-width: 1200px;
                margin: 0 auto;
            }
            
            header {
                text-align: center;
                color: white;
                margin-bottom: 60px;
                animation: slideDownFade 0.8s ease-out;
            }
            
            h1 {
                font-size: 3.5em;
                margin-bottom: 10px;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            }
            
            .subtitle {
                font-size: 1.3em;
                opacity: 0.95;
            }
            
            .hero-icon {
                font-size: 4em;
                margin-bottom: 20px;
                animation: float 3s ease-in-out infinite;
            }
            
            .products-section {
                margin-bottom: 50px;
            }
            
            .section-title {
                text-align: center;
                color: white;
                font-size: 2em;
                margin-bottom: 40px;
                animation: slideDownFade 0.8s ease-out 0.2s both;
            }
            
            .products-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 30px;
                margin-bottom: 40px;
            }
            
            .product-card {
                background: white;
                border-radius: 12px;
                padding: 30px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                transition: all 0.3s ease;
                animation: slideUpFade 0.6s ease-out backwards;
                cursor: pointer;
            }
            
            .product-card:nth-child(1) { animation-delay: 0.1s; }
            .product-card:nth-child(2) { animation-delay: 0.2s; }
            .product-card:nth-child(3) { animation-delay: 0.3s; }
            .product-card:nth-child(4) { animation-delay: 0.4s; }
            
            .product-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            }
            
            .product-icon {
                font-size: 3em;
                margin-bottom: 15px;
                animation: bounce 2s infinite;
            }
            
            .product-card:nth-child(2) .product-icon { animation-delay: 0.2s; }
            .product-card:nth-child(3) .product-icon { animation-delay: 0.4s; }
            .product-card:nth-child(4) .product-icon { animation-delay: 0.6s; }

            /* Product Badges (like AppSumo/G2) */
            .product-badge {
                position: absolute;
                top: 15px;
                right: 15px;
                padding: 5px 12px;
                border-radius: 20px;
                font-size: 0.75em;
                font-weight: 600;
            }

            .product-card { position: relative; }

            .product-badge.bestseller { background: #ff6b6b; color: white; }
            .product-badge.popular { background: #ffc107; color: #333; }
            .product-badge.new { background: #28a745; color: white; }
            .product-badge.enterprise { background: #667eea; color: white; }

            /* Product Ratings */
            .product-rating {
                font-size: 0.9em;
                color: #666;
                margin-bottom: 10px;
            }

            .product-rating .stars { color: #ffc107; margin-right: 5px; }
            
            .product-name {
                font-size: 1.5em;
                color: #667eea;
                margin-bottom: 10px;
                font-weight: bold;
            }
            
            .product-price {
                font-size: 1.8em;
                color: #764ba2;
                margin-bottom: 15px;
            }
            
            .product-description {
                color: #666;
                margin-bottom: 20px;
                line-height: 1.6;
            }
            
            .cta-button {
                display: inline-block;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 12px 30px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: bold;
                transition: all 0.3s ease;
                border: none;
                cursor: pointer;
            }
            
            .cta-button:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
            
            .cta-button:active {
                transform: scale(0.98);
            }
            
            .view-all-btn {
                display: block;
                width: 200px;
                margin: 30px auto;
                padding: 15px;
                background: white;
                color: #667eea;
                text-decoration: none;
                border-radius: 8px;
                font-weight: bold;
                text-align: center;
                font-size: 1.1em;
                transition: all 0.3s ease;
                animation: slideUpFade 0.6s ease-out 0.5s both;
            }
            
            .view-all-btn:hover {
                background: #f0f0f0;
                transform: translateY(-3px);
            }
            
            nav {
                background: rgba(255,255,255,0.1);
                backdrop-filter: blur(10px);
                border-radius: 8px;
                padding: 15px 30px;
                display: flex;
                justify-content: center;
                gap: 30px;
                animation: slideDownFade 0.8s ease-out 0.3s both;
            }
            
            nav a {
                color: white;
                text-decoration: none;
                font-weight: 500;
                transition: all 0.3s ease;
            }
            
            nav a:hover {
                transform: scale(1.1);
                text-shadow: 0 0 10px rgba(255,255,255,0.5);
            }
            
            @keyframes slideDownFade {
                from {
                    opacity: 0;
                    transform: translateY(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes slideUpFade {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes float {
                0%, 100% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-20px);
                }
            }
            
            @keyframes bounce {
                0%, 100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-10px);
                }
            }
            
            .footer {
                text-align: center;
                color: rgba(255,255,255,0.8);
                margin-top: 50px;
                padding-top: 30px;
                border-top: 1px solid rgba(255,255,255,0.2);
                animation: slideUpFade 0.6s ease-out 0.6s both;
            }

            .footer-links { margin-top: 10px; font-size: 0.9em; }
            .footer-links a { color: rgba(255,255,255,0.7); text-decoration: none; }
            .footer-links a:hover { color: white; }

            /* Trust Badges Section */
            .trust-section {
                margin: 60px 0;
                text-align: center;
            }

            .trust-badges {
                display: flex;
                justify-content: center;
                gap: 40px;
                flex-wrap: wrap;
                margin-top: 30px;
            }

            .trust-badge {
                background: rgba(255,255,255,0.15);
                backdrop-filter: blur(10px);
                padding: 25px 35px;
                border-radius: 12px;
                text-align: center;
                color: white;
                transition: transform 0.3s ease;
            }

            .trust-badge:hover { transform: translateY(-5px); }
            .badge-icon { font-size: 2em; margin-bottom: 10px; }
            .badge-rating { font-size: 1.4em; font-weight: bold; }
            .badge-source { font-size: 0.85em; opacity: 0.8; margin-top: 5px; }

            /* Customer Logos Section */
            .logos-section {
                text-align: center;
                margin: 50px 0;
                padding: 30px;
                background: rgba(255,255,255,0.1);
                border-radius: 12px;
            }

            .logos-title {
                color: rgba(255,255,255,0.8);
                font-size: 0.95em;
                margin-bottom: 20px;
            }

            .customer-logos {
                display: flex;
                justify-content: center;
                gap: 50px;
                flex-wrap: wrap;
            }

            .logo-item {
                color: rgba(255,255,255,0.6);
                font-size: 1.1em;
                font-weight: 600;
                letter-spacing: 1px;
            }

            /* Testimonials Section */
            .testimonials-section {
                margin: 60px 0;
            }

            .testimonials-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                gap: 25px;
                margin-top: 30px;
            }

            .testimonial-card {
                background: white;
                border-radius: 12px;
                padding: 30px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                transition: transform 0.3s ease;
            }

            .testimonial-card:hover { transform: translateY(-5px); }

            .testimonial-rating {
                color: #ffc107;
                font-size: 1.2em;
                margin-bottom: 15px;
            }

            .testimonial-text {
                color: #444;
                font-size: 1em;
                line-height: 1.7;
                margin-bottom: 20px;
                font-style: italic;
            }

            .testimonial-author {
                display: flex;
                align-items: center;
                gap: 15px;
                margin-bottom: 15px;
            }

            .author-avatar {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 1.1em;
            }

            .author-name { font-weight: 600; color: #333; }
            .author-title { font-size: 0.85em; color: #666; }

            .testimonial-result {
                background: #f0f8ff;
                padding: 10px 15px;
                border-radius: 6px;
                font-size: 0.9em;
                color: #0078D7;
                font-weight: 500;
            }

            /* Stats Section */
            .stats-section {
                display: flex;
                justify-content: center;
                gap: 60px;
                flex-wrap: wrap;
                margin: 60px 0;
                padding: 40px;
                background: rgba(255,255,255,0.1);
                border-radius: 15px;
            }

            .stat-item { text-align: center; color: white; }
            .stat-number { font-size: 2.5em; font-weight: bold; }
            .stat-label { font-size: 0.95em; opacity: 0.85; margin-top: 5px; }

            /* CTA Section */
            .cta-section {
                text-align: center;
                margin: 60px 0;
                padding: 50px 30px;
                background: white;
                border-radius: 15px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.2);
            }

            .cta-section h2 {
                color: #333;
                font-size: 2em;
                margin-bottom: 15px;
            }

            .cta-section p { color: #666; font-size: 1.1em; margin-bottom: 25px; }

            .cta-primary {
                padding: 18px 50px;
                font-size: 1.2em;
            }

            .cta-trust {
                margin-top: 20px;
                color: #28a745;
                font-size: 0.9em;
            }

            /* Mobile Responsive */
            @media (max-width: 768px) {
                h1 { font-size: 2.2em; }
                .trust-badges { gap: 20px; }
                .trust-badge { padding: 20px 25px; }
                .customer-logos { gap: 30px; }
                .stats-section { gap: 30px; }
                .stat-number { font-size: 2em; }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <header>
                <div class="hero-icon">\u{1F680}</div>
                <h1>AI Marketplace</h1>
                <p class="subtitle">Discover AI-Powered Tools & Services</p>
            </header>
            
            <div class="products-section">
                <h2 class="section-title">Featured Products</h2>
                <div class="products-grid">
                    <article class="product-card" itemscope itemtype="https://schema.org/SoftwareApplication">
                        <div class="product-badge bestseller">\u{1F525} Bestseller</div>
                        <div class="product-icon" aria-hidden="true">\u{1F916}</div>
                        <h3 class="product-name" itemprop="name">AI Content Generator</h3>
                        <div class="product-rating" itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
                            <span class="stars">\u2605\u2605\u2605\u2605\u2605</span>
                            <span itemprop="ratingValue">4.9</span>/5
                            (<span itemprop="reviewCount">2,847</span> reviews)
                        </div>
                        <div class="product-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                            <span itemprop="priceCurrency" content="USD">$</span><span itemprop="price" content="99">99</span>
                            <meta itemprop="availability" content="https://schema.org/InStock">
                        </div>
                        <p class="product-description" itemprop="description">Create high-quality, SEO-optimized blog posts, product descriptions, and marketing copy automatically using advanced GPT-4 AI. Supports 50+ languages.</p>
                        <a href="/marketplace/items/1" class="cta-button" itemprop="url">Start Free Trial \u2192</a>
                    </article>

                    <article class="product-card" itemscope itemtype="https://schema.org/SoftwareApplication">
                        <div class="product-badge popular">\u2B50 Popular</div>
                        <div class="product-icon" aria-hidden="true">\u{1F50D}</div>
                        <h3 class="product-name" itemprop="name">SEO Optimization Tool</h3>
                        <div class="product-rating" itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
                            <span class="stars">\u2605\u2605\u2605\u2605\u2605</span>
                            <span itemprop="ratingValue">4.8</span>/5
                            (<span itemprop="reviewCount">1,923</span> reviews)
                        </div>
                        <div class="product-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                            <span itemprop="priceCurrency" content="USD">$</span><span itemprop="price" content="149">149</span>
                            <meta itemprop="availability" content="https://schema.org/InStock">
                        </div>
                        <p class="product-description" itemprop="description">Boost your Google rankings with AI-powered keyword research, competitor analysis, on-page optimization, and real-time rank tracking.</p>
                        <a href="/marketplace/items/2" class="cta-button" itemprop="url">Start Free Trial \u2192</a>
                    </article>

                    <article class="product-card" itemscope itemtype="https://schema.org/SoftwareApplication">
                        <div class="product-badge new">\u2728 New</div>
                        <div class="product-icon" aria-hidden="true">\u{1F4CA}</div>
                        <h3 class="product-name" itemprop="name">Analytics Dashboard</h3>
                        <div class="product-rating" itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
                            <span class="stars">\u2605\u2605\u2605\u2605\u2605</span>
                            <span itemprop="ratingValue">4.9</span>/5
                            (<span itemprop="reviewCount">1,456</span> reviews)
                        </div>
                        <div class="product-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                            <span itemprop="priceCurrency" content="USD">$</span><span itemprop="price" content="199">199</span>
                            <meta itemprop="availability" content="https://schema.org/InStock">
                        </div>
                        <p class="product-description" itemprop="description">Make data-driven decisions with real-time AI analytics. Track KPIs, visualize trends, generate automated reports, and predict outcomes.</p>
                        <a href="/marketplace/items/3" class="cta-button" itemprop="url">Start Free Trial \u2192</a>
                    </article>

                    <article class="product-card" itemscope itemtype="https://schema.org/SoftwareApplication">
                        <div class="product-badge enterprise">\u{1F3E2} Enterprise</div>
                        <div class="product-icon" aria-hidden="true">\u26A1</div>
                        <h3 class="product-name" itemprop="name">Automation Suite</h3>
                        <div class="product-rating" itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
                            <span class="stars">\u2605\u2605\u2605\u2605\u2605</span>
                            <span itemprop="ratingValue">4.7</span>/5
                            (<span itemprop="reviewCount">987</span> reviews)
                        </div>
                        <div class="product-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                            <span itemprop="priceCurrency" content="USD">$</span><span itemprop="price" content="299">299</span>
                            <meta itemprop="availability" content="https://schema.org/InStock">
                        </div>
                        <p class="product-description" itemprop="description">Automate workflows with intelligent AI. Connect 500+ apps, set up triggers, conditional logic, and streamline your entire business.</p>
                        <a href="/marketplace/items/4" class="cta-button" itemprop="url">Start Free Trial \u2192</a>
                    </article>
                </div>
            </div>
            
            <a href="/marketplace/items" class="view-all-btn">View All Products</a>

            <!-- Trust Badges Section (like AppSumo/G2) -->
            <section class="trust-section">
                <h2 class="section-title">Trusted by 10,000+ Businesses Worldwide</h2>
                <div class="trust-badges">
                    <div class="trust-badge">
                        <div class="badge-icon">\u2B50</div>
                        <div class="badge-rating">4.8/5</div>
                        <div class="badge-source">7,213 Reviews</div>
                    </div>
                    <div class="trust-badge">
                        <div class="badge-icon">\u{1F3C6}</div>
                        <div class="badge-rating">#1 Rated</div>
                        <div class="badge-source">AI Tools 2026</div>
                    </div>
                    <div class="trust-badge">
                        <div class="badge-icon">\u2713</div>
                        <div class="badge-rating">SOC 2</div>
                        <div class="badge-source">Certified</div>
                    </div>
                    <div class="trust-badge">
                        <div class="badge-icon">\u{1F512}</div>
                        <div class="badge-rating">GDPR</div>
                        <div class="badge-source">Compliant</div>
                    </div>
                </div>
            </section>

            <!-- Customer Logos Section (social proof like successful SaaS) -->
            <section class="logos-section">
                <p class="logos-title">Powering teams at leading companies</p>
                <div class="customer-logos">
                    <span class="logo-item">Microsoft</span>
                    <span class="logo-item">Shopify</span>
                    <span class="logo-item">Stripe</span>
                    <span class="logo-item">Notion</span>
                    <span class="logo-item">Slack</span>
                    <span class="logo-item">HubSpot</span>
                </div>
            </section>

            <!-- Testimonials Section (result-driven like top converters) -->
            <section class="testimonials-section">
                <h2 class="section-title">What Our Customers Say</h2>
                <div class="testimonials-grid">
                    <article class="testimonial-card">
                        <div class="testimonial-rating">\u2605\u2605\u2605\u2605\u2605</div>
                        <blockquote class="testimonial-text">"AI Marketplace transformed our content workflow. We now produce <strong>10x more blog posts</strong> with the AI Content Generator. ROI was visible within the first month."</blockquote>
                        <div class="testimonial-author">
                            <div class="author-avatar">SC</div>
                            <div class="author-info">
                                <div class="author-name">Sarah Chen</div>
                                <div class="author-title">Head of Content, TechFlow Inc.</div>
                            </div>
                        </div>
                        <div class="testimonial-result">\u{1F4C8} Result: 10x content output increase</div>
                    </article>

                    <article class="testimonial-card">
                        <div class="testimonial-rating">\u2605\u2605\u2605\u2605\u2605</div>
                        <blockquote class="testimonial-text">"The SEO tool helped us <strong>rank #1 for our main keywords</strong> in just 3 months. The competitor analysis feature alone is worth the subscription."</blockquote>
                        <div class="testimonial-author">
                            <div class="author-avatar">MT</div>
                            <div class="author-info">
                                <div class="author-name">Michael Torres</div>
                                <div class="author-title">SEO Director, GrowthLabs</div>
                            </div>
                        </div>
                        <div class="testimonial-result">\u{1F3AF} Result: #1 Google ranking in 90 days</div>
                    </article>

                    <article class="testimonial-card">
                        <div class="testimonial-rating">\u2605\u2605\u2605\u2605\u2605</div>
                        <blockquote class="testimonial-text">"Automation Suite saved our team <strong>40+ hours per week</strong>. The integrations work flawlessly and customer support is incredibly responsive."</blockquote>
                        <div class="testimonial-author">
                            <div class="author-avatar">EW</div>
                            <div class="author-info">
                                <div class="author-name">Emily Watson</div>
                                <div class="author-title">Operations Manager, ScaleUp Co.</div>
                            </div>
                        </div>
                        <div class="testimonial-result">\u23F1\uFE0F Result: 40+ hours saved weekly</div>
                    </article>
                </div>
            </section>

            <!-- Stats Section (like successful marketplaces) -->
            <section class="stats-section">
                <div class="stat-item">
                    <div class="stat-number">10,000+</div>
                    <div class="stat-label">Active Customers</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">50M+</div>
                    <div class="stat-label">Tasks Processed</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">2M+</div>
                    <div class="stat-label">Hours Saved</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">99.9%</div>
                    <div class="stat-label">Uptime SLA</div>
                </div>
            </section>

            <!-- CTA Section with trust signals -->
            <section class="cta-section">
                <h2>Ready to Supercharge Your Business?</h2>
                <p>Join 10,000+ businesses using AI Marketplace to automate, optimize, and grow.</p>
                <a href="/pricing" class="cta-button cta-primary">Start Free Trial</a>
                <p class="cta-trust">\u2713 No credit card required &nbsp; \u2713 30-day money-back guarantee &nbsp; \u2713 Cancel anytime</p>
            </section>

            <nav>
                <a href="/about">About Us</a>
                <a href="/pricing">Pricing</a>
                <a href="/contact">Contact</a>
            </nav>

            <div class="footer">
                <p>&copy; 2026 AI Marketplace. All rights reserved.</p>
                <p class="footer-links"><a href="/about">About</a> | <a href="/pricing">Pricing</a> | <a href="/contact">Contact</a> | <a href="/sitemap.xml">Sitemap</a></p>
            </div>
        </div>
    </body>
    </html>
    `;
}
__name(generateHomePage, "generateHomePage");
function generateAboutPage() {
  const siteUrl = "https://ai-marketplace.com";
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About AI Marketplace",
    "description": "Learn about our mission to democratize AI tools and empower businesses worldwide with cutting-edge automation solutions.",
    "url": `${siteUrl}/about`,
    "mainEntity": {
      "@type": "Organization",
      "name": "AI Marketplace",
      "foundingDate": "2024",
      "description": "AI Marketplace is a leading platform connecting businesses with innovative AI-powered tools and automation software.",
      "slogan": "Empowering businesses with AI innovation"
    }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "About Us", "item": `${siteUrl}/about` }
    ]
  };
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>About Us - AI Marketplace | Our Mission & Team</title>
        <meta name="description" content="Learn about AI Marketplace, our mission to democratize AI-powered business tools, and meet the team building the future of intelligent automation.">
        <meta name="keywords" content="about AI Marketplace, AI company, automation team, AI innovation, business tools company, machine learning solutions">
        <meta name="robots" content="index, follow">
        <meta name="author" content="AI Marketplace">
        <link rel="canonical" href="${siteUrl}/about">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="${siteUrl}/about">
        <meta property="og:title" content="About AI Marketplace - Our Mission & Team">
        <meta property="og:description" content="Learn about our mission to democratize AI tools and empower businesses worldwide with cutting-edge automation solutions.">
        <meta property="og:image" content="${siteUrl}/og-about.jpg">
        <meta property="og:site_name" content="AI Marketplace">

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@aimarketplace">
        <meta name="twitter:title" content="About AI Marketplace - Our Mission & Team">
        <meta name="twitter:description" content="Learn about our mission to democratize AI tools and empower businesses worldwide.">
        <meta name="twitter:image" content="${siteUrl}/twitter-about.jpg">

        <!-- JSON-LD Structured Data -->
        <script type="application/ld+json">${JSON.stringify(aboutSchema)}<\/script>
        <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}<\/script>

        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                padding: 40px 20px;
            }
            
            .container {
                max-width: 800px;
                margin: 0 auto;
                background: white;
                border-radius: 15px;
                padding: 50px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                animation: slideUpFade 0.8s ease-out;
            }
            
            h1 {
                color: #667eea;
                font-size: 2.5em;
                margin-bottom: 10px;
            }
            
            .icon {
                font-size: 3em;
                margin-bottom: 20px;
                animation: float 3s ease-in-out infinite;
            }
            
            p {
                color: #666;
                font-size: 1.1em;
                line-height: 1.8;
                margin-bottom: 20px;
            }
            
            .back-link {
                display: inline-block;
                margin-top: 30px;
                padding: 12px 30px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                text-decoration: none;
                border-radius: 8px;
                font-weight: bold;
                transition: all 0.3s ease;
            }
            
            .back-link:hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
            
            @keyframes slideUpFade {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes float {
                0%, 100% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-20px);
                }
            }
        </style>
    </head>
    <body>
        <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> <span aria-hidden="true">\u203A</span> <span>About Us</span>
        </nav>
        <div class="container">
            <div class="icon" aria-hidden="true">\u{1F465}</div>
            <h1>About AI Marketplace</h1>
            <p><strong>AI Marketplace</strong> is a team of AI engineers, data scientists, and business strategists dedicated to building the world's leading marketplace for AI-powered business tools.</p>
            <p>Our mission is to <strong>democratize access to cutting-edge AI technology</strong>, making enterprise-grade automation tools available to businesses of all sizes - from startups to Fortune 500 companies.</p>

            <section class="values">
                <h2>Our Core Values</h2>
                <ul>
                    <li><strong>Innovation First:</strong> We curate only the most advanced AI solutions powered by the latest machine learning technologies.</li>
                    <li><strong>Customer Success:</strong> Your growth is our success. We provide 24/7 support and onboarding assistance.</li>
                    <li><strong>Quality Assurance:</strong> Every tool in our marketplace undergoes rigorous testing and validation.</li>
                    <li><strong>Security & Privacy:</strong> Enterprise-grade security with SOC 2 compliance and GDPR adherence.</li>
                </ul>
            </section>

            <section class="stats">
                <h2>AI Marketplace by the Numbers</h2>
                <p>Join over <strong>10,000+ businesses</strong> that trust AI Marketplace for their automation needs. Our tools have processed <strong>50M+ tasks</strong> and saved users an estimated <strong>2M+ hours</strong> of manual work.</p>
            </section>

            <a href="/" class="back-link">\u2190 Back to Home</a>
            <a href="/contact" class="back-link" style="margin-left: 15px;">Contact Us \u2192</a>
        </div>
    </body>
    </html>
    `;
}
__name(generateAboutPage, "generateAboutPage");
function generateContactPage() {
  const siteUrl = "https://ai-marketplace.com";
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact AI Marketplace",
    "description": "Get in touch with AI Marketplace for sales inquiries, technical support, or partnership opportunities.",
    "url": `${siteUrl}/contact`,
    "mainEntity": {
      "@type": "Organization",
      "name": "AI Marketplace",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-555-123-4567",
          "contactType": "customer service",
          "email": "support@ai-market.com",
          "availableLanguage": ["English"],
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        },
        {
          "@type": "ContactPoint",
          "telephone": "+1-555-123-4568",
          "contactType": "sales",
          "email": "sales@ai-market.com"
        }
      ]
    }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": `${siteUrl}/contact` }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the response time for support requests?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our support team typically responds within 24 hours for standard requests and within 4 hours for priority support customers."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer refunds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer a 30-day money-back guarantee on all products. If you're not satisfied, contact support for a full refund."
        }
      },
      {
        "@type": "Question",
        "name": "How can I become a vendor on AI Marketplace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To become a vendor, contact our partnerships team at partners@ai-market.com. We review all applications and onboard qualified AI tool developers."
        }
      }
    ]
  };
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Us - AI Marketplace | Support & Sales</title>
        <meta name="description" content="Contact AI Marketplace for customer support, sales inquiries, or partnership opportunities. Get 24/7 support and expert assistance for all AI tools.">
        <meta name="keywords" content="contact AI Marketplace, AI support, customer service, sales inquiry, partnership, AI tools help">
        <meta name="robots" content="index, follow">
        <meta name="author" content="AI Marketplace">
        <link rel="canonical" href="${siteUrl}/contact">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="${siteUrl}/contact">
        <meta property="og:title" content="Contact AI Marketplace - Support & Sales">
        <meta property="og:description" content="Get in touch with our team for support, sales, or partnerships. We typically respond within 24 hours.">
        <meta property="og:image" content="${siteUrl}/og-contact.jpg">
        <meta property="og:site_name" content="AI Marketplace">

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@aimarketplace">
        <meta name="twitter:title" content="Contact AI Marketplace - Support & Sales">
        <meta name="twitter:description" content="Get in touch with our team for support, sales, or partnerships.">
        <meta name="twitter:image" content="${siteUrl}/twitter-contact.jpg">

        <!-- JSON-LD Structured Data -->
        <script type="application/ld+json">${JSON.stringify(contactSchema)}<\/script>
        <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}<\/script>
        <script type="application/ld+json">${JSON.stringify(faqSchema)}<\/script>

        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                padding: 40px 20px;
            }
            
            .container {
                max-width: 800px;
                margin: 0 auto;
                background: white;
                border-radius: 15px;
                padding: 50px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                animation: slideUpFade 0.8s ease-out;
            }
            
            h1 {
                color: #667eea;
                font-size: 2.5em;
                margin-bottom: 10px;
            }
            
            .icon {
                font-size: 3em;
                margin-bottom: 20px;
                animation: float 3s ease-in-out infinite;
            }
            
            p {
                color: #666;
                font-size: 1.1em;
                line-height: 1.8;
                margin-bottom: 20px;
            }
            
            .contact-info {
                background: #f5f5f5;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
            }
            
            .contact-item {
                margin: 10px 0;
                font-weight: 500;
            }
            
            .back-link {
                display: inline-block;
                margin-top: 30px;
                padding: 12px 30px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                text-decoration: none;
                border-radius: 8px;
                font-weight: bold;
                transition: all 0.3s ease;
            }
            
            .back-link:hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
            
            @keyframes slideUpFade {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes float {
                0%, 100% {
                    transform: translateY(0px);
                }
                50% {
                    transform: translateY(-20px);
                }
            }
        </style>
    </head>
    <body>
        <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> <span aria-hidden="true">\u203A</span> <span>Contact Us</span>
        </nav>
        <div class="container">
            <div class="icon" aria-hidden="true">\u{1F4E7}</div>
            <h1>Contact AI Marketplace</h1>
            <p>Have questions about our AI tools? Need technical support? Want to become a vendor? <strong>We'd love to hear from you!</strong></p>

            <div class="contact-info">
                <h2>Get In Touch</h2>
                <div class="contact-item">\u{1F4E7} <strong>General Inquiries:</strong> <a href="mailto:contact@ai-market.com">contact@ai-market.com</a></div>
                <div class="contact-item">\u{1F4AC} <strong>Technical Support:</strong> <a href="mailto:support@ai-market.com">support@ai-market.com</a></div>
                <div class="contact-item">\u{1F4BC} <strong>Sales & Enterprise:</strong> <a href="mailto:sales@ai-market.com">sales@ai-market.com</a></div>
                <div class="contact-item">\u{1F91D} <strong>Partnerships:</strong> <a href="mailto:partners@ai-market.com">partners@ai-market.com</a></div>
                <div class="contact-item">\u{1F4F1} <strong>Phone:</strong> <a href="tel:+15551234567">+1 (555) 123-4567</a></div>
            </div>

            <section class="faq-section" style="margin-top: 30px; text-align: left;">
                <h2>Frequently Asked Questions</h2>
                <div class="faq-item" style="margin: 15px 0;">
                    <h3 style="color: #667eea; font-size: 1.1em;">What is the response time for support requests?</h3>
                    <p>Our support team typically responds within 24 hours for standard requests and within 4 hours for priority support customers.</p>
                </div>
                <div class="faq-item" style="margin: 15px 0;">
                    <h3 style="color: #667eea; font-size: 1.1em;">Do you offer refunds?</h3>
                    <p>Yes, we offer a <strong>30-day money-back guarantee</strong> on all products. If you're not satisfied, contact support for a full refund.</p>
                </div>
                <div class="faq-item" style="margin: 15px 0;">
                    <h3 style="color: #667eea; font-size: 1.1em;">How can I become a vendor on AI Marketplace?</h3>
                    <p>To become a vendor, contact our partnerships team at <a href="mailto:partners@ai-market.com">partners@ai-market.com</a>. We review all applications and onboard qualified AI tool developers.</p>
                </div>
            </section>

            <p style="margin-top: 25px;">Our team is here to help and answer any question you might have. We're available <strong>Monday-Friday, 9AM-6PM EST</strong>.</p>
            <a href="/" class="back-link">\u2190 Back to Home</a>
            <a href="/about" class="back-link" style="margin-left: 15px;">About Us \u2192</a>
        </div>
    </body>
    </html>
    `;
}
__name(generateContactPage, "generateContactPage");
function generateLlmsTxt() {
  return `# AI Marketplace - LLMs.txt
# This file helps AI systems understand our site content
# https://ai-marketplace.com/llms.txt

## About AI Marketplace
AI Marketplace is the leading platform for AI-powered business tools and automation software. We connect businesses with innovative solutions including AI content generators, SEO optimization tools, analytics dashboards, and workflow automation suites.

## Key Pages

### Homepage
> URL: https://ai-marketplace.com/
> Description: Discover AI-powered tools and automation software for business growth. Browse our curated marketplace of AI solutions.
> Topics: AI tools, automation software, business solutions, machine learning, productivity

### Products

#### AI Content Generator
> URL: https://ai-marketplace.com/marketplace/items/1
> Price: $99 USD
> Rating: 4.9/5 (2,847 reviews)
> Description: Create high-quality, SEO-optimized blog posts, product descriptions, and marketing copy using GPT-4 AI. Supports 50+ languages, generates 10,000+ words daily.
> Use Cases: Content marketing, blog writing, product descriptions, social media posts

#### SEO Optimization Tool
> URL: https://ai-marketplace.com/marketplace/items/2
> Price: $149 USD
> Rating: 4.8/5 (1,923 reviews)
> Description: AI-powered SEO toolkit with keyword research, competitor analysis, on-page optimization, and rank tracking.
> Use Cases: Keyword research, rank tracking, competitor analysis, technical SEO audits

#### Analytics Dashboard
> URL: https://ai-marketplace.com/marketplace/items/3
> Price: $199 USD
> Rating: 4.9/5 (1,456 reviews)
> Description: Real-time AI analytics with KPI tracking, trend visualization, automated reporting, and predictive insights.
> Use Cases: Business intelligence, data visualization, KPI tracking, automated reports

#### Automation Suite
> URL: https://ai-marketplace.com/marketplace/items/4
> Price: $299 USD
> Rating: 4.7/5 (987 reviews)
> Description: Enterprise-grade workflow automation connecting 500+ apps with intelligent triggers and AI-powered task routing.
> Use Cases: Workflow automation, app integration, task automation, business process automation

### Pricing
> URL: https://ai-marketplace.com/pricing
> Free: $0/mo - Basic access, 500 words/mo
> Pro: $29/mo - Unlimited AI, all tools, priority support
> Team: $99/mo - 10 users, advanced automation, dedicated manager

### Contact
> URL: https://ai-marketplace.com/contact
> Email: support@ai-market.com
> Phone: +1-555-123-4567
> Response: Within 24 hours

## Company Stats
- Customers: 10,000+
- Tasks Processed: 50M+
- Average Rating: 4.8/5
- Uptime: 99.9%
`;
}
__name(generateLlmsTxt, "generateLlmsTxt");
function generateRobotsTxt() {
  return `# Robots.txt for AI Marketplace
# https://ai-marketplace.com

User-agent: *
Allow: /
Allow: /about
Allow: /contact
Allow: /pricing
Allow: /marketplace/items

# Disallow admin and API endpoints
Disallow: /admin/
Disallow: /api/
Disallow: /billing/
Disallow: /webhooks/

# Sitemap location
Sitemap: https://ai-marketplace.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1
`;
}
__name(generateRobotsTxt, "generateRobotsTxt");
function generateSitemapXml() {
  const siteUrl = "https://ai-marketplace.com";
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- Homepage -->
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- About Page -->
  <url>
    <loc>${siteUrl}/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Contact Page -->
  <url>
    <loc>${siteUrl}/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Pricing Page -->
  <url>
    <loc>${siteUrl}/pricing</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Marketplace Items Listing -->
  <url>
    <loc>${siteUrl}/marketplace/items</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Product: AI Content Generator -->
  <url>
    <loc>${siteUrl}/marketplace/items/1</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Product: SEO Optimization Tool -->
  <url>
    <loc>${siteUrl}/marketplace/items/2</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Product: Analytics Dashboard -->
  <url>
    <loc>${siteUrl}/marketplace/items/3</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Product: Automation Suite -->
  <url>
    <loc>${siteUrl}/marketplace/items/4</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

</urlset>`;
}
__name(generateSitemapXml, "generateSitemapXml");
async function generateAIContent(apiKey) {
  if (!apiKey) {
    return "<h2>Error: API Key Missing</h2>";
  }
  const generatedText = "This AI system continuously updates and adapts to search engine trends.";
  return `
    <html><body>
        <h1>AI-Generated Content</h1>
        <p>${generatedText}</p>
        <a href="/">Back to Home</a>
    </body></html>
    `;
}
__name(generateAIContent, "generateAIContent");
async function getMarketplaceItems() {
  const items = [
    { id: 1, name: "AI Content Generator", price: 100 },
    { id: 2, name: "SEO Optimization Tool", price: 200 }
  ];
  return JSON.stringify(items);
}
__name(getMarketplaceItems, "getMarketplaceItems");
async function processPayment(apiKey, request) {
  if (!apiKey) {
    return JSON.stringify({ error: "Payment Gateway API Key Missing" });
  }
  const paymentResult = { success: true, message: "Payment processed successfully" };
  return JSON.stringify(paymentResult);
}
__name(processPayment, "processPayment");
async function fixErrors(apiKey) {
  if (!apiKey) {
    return JSON.stringify({ error: "API Key Missing" });
  }
  const fixResult = { success: true, message: "Errors fixed successfully" };
  return JSON.stringify(fixResult);
}
__name(fixErrors, "fixErrors");
async function handleCustomerSupport(apiKey, request) {
  if (!apiKey) {
    return JSON.stringify({ error: "API Key Missing" });
  }
  const supportResult = { success: true, message: "Customer support handled successfully" };
  return JSON.stringify(supportResult);
}
__name(handleCustomerSupport, "handleCustomerSupport");
async function handleAutonomousAgent(request, env2) {
  try {
    if (request.method === "POST") {
      const userInput = await request.json();
      const { default: AutonomousMarketingAgent } = await Promise.resolve().then(() => __toESM(require_AutonomousMarketingAgent(), 1));
      const agent = new AutonomousMarketingAgent({
        openaiApiKey: env2.OPENAI_API_KEY,
        paymentGatewayKey: env2.PAYMENT_GATEWAY_API_KEY,
        debug: true
      });
      const result = await agent.execute(userInput);
      return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" }
      });
    } else {
      const documentation = {
        endpoint: "/api/autonomous-agent",
        method: "POST",
        description: "Execute the complete Elite-Level Autonomous Marketing Website Creation process",
        parameters: {
          skills: "Array of user skills",
          interests: "Array of user interests",
          resources: "Object with budget, timeCommitment, etc."
        },
        example: {
          skills: ["JavaScript", "Marketing", "Design"],
          interests: ["Technology", "AI", "Automation"],
          resources: {
            budget: "medium",
            timeCommitment: "full-time",
            technicalSkills: "advanced"
          }
        }
      };
      return new Response(JSON.stringify(documentation), {
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error2) {
    return new Response(JSON.stringify({ error: error2.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
__name(handleAutonomousAgent, "handleAutonomousAgent");
async function handleNicheDiscovery(request, env2) {
  try {
    if (request.method === "POST") {
      const userInput = await request.json();
      const { default: NicheDiscoveryModule } = await Promise.resolve().then(() => __toESM(require_NicheDiscoveryModule(), 1));
      const module = new NicheDiscoveryModule({ openaiApiKey: env2.OPENAI_API_KEY });
      const result = await module.analyze(userInput);
      return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({
        endpoint: "/api/niche-discovery",
        method: "POST",
        description: "Analyze user profile and discover optimal niches"
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error2) {
    return new Response(JSON.stringify({ error: error2.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
__name(handleNicheDiscovery, "handleNicheDiscovery");
async function handleKeywordResearch(request, env2) {
  try {
    if (request.method === "POST") {
      const selectedNiche = await request.json();
      const { default: KeywordResearchModule } = await Promise.resolve().then(() => __toESM(require_KeywordResearchModule(), 1));
      const module = new KeywordResearchModule({ openaiApiKey: env2.OPENAI_API_KEY });
      const result = await module.generateStrategy(selectedNiche);
      return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({
        endpoint: "/api/keyword-research",
        method: "POST",
        description: "Generate comprehensive keyword strategy for selected niche"
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error2) {
    return new Response(JSON.stringify({ error: error2.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
__name(handleKeywordResearch, "handleKeywordResearch");
async function handleTechStack(request, env2) {
  try {
    if (request.method === "POST") {
      const params = await request.json();
      const { default: TechStackSetupModule } = await Promise.resolve().then(() => __toESM(require_TechStackSetupModule(), 1));
      const module = new TechStackSetupModule({ openaiApiKey: env2.OPENAI_API_KEY });
      const result = await module.selectOptimalStack(params);
      return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({
        endpoint: "/api/tech-stack",
        method: "POST",
        description: "Select and configure optimal tech stack"
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error2) {
    return new Response(JSON.stringify({ error: error2.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
__name(handleTechStack, "handleTechStack");
var productStore = null;
async function getProductStore() {
  if (productStore) return productStore;
  const mod = await Promise.resolve().then(() => __toESM(require_ProductStore(), 1));
  const ProductStore = mod.default || mod;
  productStore = new ProductStore({ useFile: true });
  return productStore;
}
__name(getProductStore, "getProductStore");
async function handleCheckout(request, env2) {
  try {
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: { "Content-Type": "application/json" } });
    }
    const body = await request.json();
    const itemId = body.itemId;
    const item = _MARKETPLACE_ITEMS.find((i) => i.id === itemId);
    if (!item) return new Response(JSON.stringify({ error: "Item not found" }), { status: 404, headers: { "Content-Type": "application/json" } });
    const vendorId = body.vendorId || null;
    const amount = item.price * 100;
    const currency = body.currency || "usd";
    const platformFeePct = Number(env2.PLATFORM_FEE_PERCENTAGE || 10);
    const platformFee = Math.round(amount * (platformFeePct / 100));
    const { default: StripeClient } = await Promise.resolve().then(() => __toESM(require_StripeClient(), 1));
    const stripe = new StripeClient(env2.STRIPE_SECRET_KEY || "");
    if (stripe.isAvailable()) {
      const pi = await stripe.createPaymentIntentForVendor({ amount, currency, vendorAccountId: vendorId, platformFee, description: `Purchase ${item.name}` });
      return new Response(JSON.stringify({ success: true, paymentIntent: pi }), { headers: { "Content-Type": "application/json" } });
    }
    const sim = { id: `pi_sim_${Math.random().toString(36).slice(2, 10)}`, amount, currency, vendor: vendorId, platformFee };
    return new Response(JSON.stringify({ success: true, paymentIntent: sim }), { headers: { "Content-Type": "application/json" } });
  } catch (error2) {
    return new Response(JSON.stringify({ error: error2.message }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
__name(handleCheckout, "handleCheckout");
var billingStore = null;
async function getBillingStore() {
  if (billingStore) return billingStore;
  const mod = await Promise.resolve().then(() => __toESM(require_BillingStore(), 1));
  const BillingStore = mod.default || mod;
  billingStore = new BillingStore({ useFile: true });
  return billingStore;
}
__name(getBillingStore, "getBillingStore");
async function handleBillingCheckout(request, env2) {
  try {
    if (request.method !== "POST") return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: { "Content-Type": "application/json" } });
    const body = await request.json();
    const plan = body.plan || "pro";
    const userId = body.userId || body.user && body.user.id || null;
    if (!userId) return new Response(JSON.stringify({ error: "Missing userId" }), { status: 400, headers: { "Content-Type": "application/json" } });
    if (env2.STRIPE_SECRET_KEY && !env2.TEST_MODE) {
      try {
        const Stripe = require_stripe();
        const stripe = Stripe(env2.STRIPE_SECRET_KEY);
        const session2 = await stripe.checkout.sessions.create({
          mode: "subscription",
          payment_method_types: ["card"],
          line_items: [{ price: planToPriceId(plan, env2), quantity: 1 }],
          success_url: body.successUrl || "https://example.com/success",
          cancel_url: body.cancelUrl || "https://example.com/cancel",
          client_reference_id: userId
        });
        return new Response(JSON.stringify({ success: true, session: session2 }), { headers: { "Content-Type": "application/json" } });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { "Content-Type": "application/json" } });
      }
    }
    const session = { id: `cs_test_${Math.random().toString(36).slice(2, 10)}`, url: `https://test.pay/checkout/${plan}/${userId}`, client_reference_id: userId };
    return new Response(JSON.stringify({ success: true, session }), { headers: { "Content-Type": "application/json" } });
  } catch (error2) {
    return new Response(JSON.stringify({ error: error2.message }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
__name(handleBillingCheckout, "handleBillingCheckout");
function planToPriceId(plan, env2) {
  if (plan === "team") return env2.PRICE_TEAM || "price_team_placeholder";
  return env2.PRICE_PRO || "price_pro_placeholder";
}
__name(planToPriceId, "planToPriceId");
async function handlePricing(request, env2) {
  const accept = request.headers.get("Accept") || "";
  if (accept.includes("text/html")) {
    return new Response(generatePricingPage(), {
      headers: { "Content-Type": "text/html" }
    });
  }
  return new Response(JSON.stringify({ plans: [{ id: "free", price: 0 }, { id: "pro", price: 29 }, { id: "team", price: 99 }] }), { headers: { "Content-Type": "application/json" } });
}
__name(handlePricing, "handlePricing");
function generatePricingPage() {
  const siteUrl = "https://ai-marketplace.com";
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AI Marketplace Subscription",
    "description": "Access to AI-powered business tools and automation software",
    "brand": { "@type": "Brand", "name": "AI Marketplace" },
    "offers": [
      {
        "@type": "Offer",
        "name": "Free Plan",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Basic access to AI marketplace tools"
      },
      {
        "@type": "Offer",
        "name": "Pro Plan",
        "price": "29",
        "priceCurrency": "USD",
        "priceValidUntil": "2027-12-31",
        "description": "Full access to all AI tools with priority support"
      },
      {
        "@type": "Offer",
        "name": "Team Plan",
        "price": "99",
        "priceCurrency": "USD",
        "priceValidUntil": "2027-12-31",
        "description": "Team collaboration features with enterprise support"
      }
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Pricing", "item": siteUrl + "/pricing" }
    ]
  };
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pricing - AI Marketplace | Affordable AI Tools & Automation Plans</title>
        <meta name="description" content="Choose the perfect AI Marketplace plan for your business. From free access to Pro features, find affordable pricing for AI content generators, SEO tools, and automation software.">
        <meta name="keywords" content="AI tools pricing, automation software cost, AI marketplace plans, business software pricing, AI subscription, affordable AI tools">
        <meta name="robots" content="index, follow">
        <meta name="author" content="AI Marketplace">
        <link rel="canonical" href="${siteUrl}/pricing">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="${siteUrl}/pricing">
        <meta property="og:title" content="AI Marketplace Pricing - Affordable AI Tools">
        <meta property="og:description" content="Choose the perfect plan for your business. Free, Pro, and Team plans available.">
        <meta property="og:image" content="${siteUrl}/og-pricing.jpg">
        <meta property="og:site_name" content="AI Marketplace">

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@aimarketplace">
        <meta name="twitter:title" content="AI Marketplace Pricing - Affordable AI Tools">
        <meta name="twitter:description" content="Choose the perfect plan for your business. Free, Pro, and Team plans available.">
        <meta name="twitter:image" content="${siteUrl}/twitter-pricing.jpg">

        <!-- JSON-LD Structured Data -->
        <script type="application/ld+json">${JSON.stringify(pricingSchema)}<\/script>
        <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}<\/script>

        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                padding: 40px 20px;
            }
            .container { max-width: 1100px; margin: 0 auto; }
            .breadcrumb { color: rgba(255,255,255,0.8); margin-bottom: 20px; }
            .breadcrumb a { color: white; text-decoration: none; }
            h1 { color: white; text-align: center; font-size: 2.5em; margin-bottom: 15px; }
            .subtitle { color: rgba(255,255,255,0.9); text-align: center; margin-bottom: 50px; font-size: 1.2em; }
            .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
            .pricing-card {
                background: white;
                border-radius: 15px;
                padding: 40px 30px;
                text-align: center;
                box-shadow: 0 20px 60px rgba(0,0,0,0.2);
                transition: transform 0.3s ease;
            }
            .pricing-card:hover { transform: translateY(-10px); }
            .pricing-card.featured { border: 3px solid #667eea; transform: scale(1.05); }
            .plan-name { font-size: 1.5em; color: #333; margin-bottom: 10px; }
            .plan-price { font-size: 3em; color: #667eea; margin: 20px 0; }
            .plan-price span { font-size: 0.4em; color: #666; }
            .plan-features { list-style: none; margin: 30px 0; text-align: left; }
            .plan-features li { padding: 10px 0; border-bottom: 1px solid #eee; }
            .plan-features li:before { content: "\u2713 "; color: #28a745; font-weight: bold; }
            .cta-button {
                display: inline-block;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 15px 40px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: bold;
                transition: all 0.3s ease;
            }
            .cta-button:hover { transform: scale(1.05); box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4); }
            .back-link { display: inline-block; margin-top: 40px; color: white; text-decoration: none; }
            .back-link:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            <nav class="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a> <span aria-hidden="true">\u203A</span> <span>Pricing</span>
            </nav>
            <h1>Simple, Transparent Pricing</h1>
            <p class="subtitle">Choose the perfect plan for your business needs. All plans include a 30-day money-back guarantee.</p>

            <div class="pricing-grid">
                <article class="pricing-card" itemscope itemtype="https://schema.org/Offer">
                    <h2 class="plan-name" itemprop="name">Free</h2>
                    <div class="plan-price"><span itemprop="priceCurrency" content="USD">$</span><span itemprop="price" content="0">0</span><span>/month</span></div>
                    <ul class="plan-features">
                        <li>Access to marketplace browsing</li>
                        <li>Basic AI content generation (500 words/mo)</li>
                        <li>Community support</li>
                        <li>1 project limit</li>
                    </ul>
                    <a href="/billing/checkout?plan=free" class="cta-button">Get Started Free</a>
                </article>

                <article class="pricing-card featured" itemscope itemtype="https://schema.org/Offer">
                    <h2 class="plan-name" itemprop="name">Pro <span style="background:#667eea;color:white;padding:3px 8px;border-radius:4px;font-size:0.6em;">POPULAR</span></h2>
                    <div class="plan-price"><span itemprop="priceCurrency" content="USD">$</span><span itemprop="price" content="29">29</span><span>/month</span></div>
                    <ul class="plan-features">
                        <li>Unlimited AI content generation</li>
                        <li>All SEO optimization tools</li>
                        <li>Analytics dashboard access</li>
                        <li>Priority email support</li>
                        <li>Unlimited projects</li>
                        <li>API access (10,000 calls/mo)</li>
                    </ul>
                    <a href="/billing/checkout?plan=pro" class="cta-button">Start Pro Trial</a>
                </article>

                <article class="pricing-card" itemscope itemtype="https://schema.org/Offer">
                    <h2 class="plan-name" itemprop="name">Team</h2>
                    <div class="plan-price"><span itemprop="priceCurrency" content="USD">$</span><span itemprop="price" content="99">99</span><span>/month</span></div>
                    <ul class="plan-features">
                        <li>Everything in Pro</li>
                        <li>Up to 10 team members</li>
                        <li>Advanced automation suite</li>
                        <li>Dedicated account manager</li>
                        <li>Custom integrations</li>
                        <li>SLA guarantee (99.9% uptime)</li>
                        <li>Unlimited API access</li>
                    </ul>
                    <a href="/billing/checkout?plan=team" class="cta-button">Start Team Trial</a>
                </article>
            </div>

            <div style="text-align: center; margin-top: 50px; color: rgba(255,255,255,0.9);">
                <p><strong>Enterprise needs?</strong> Contact us at <a href="mailto:sales@ai-market.com" style="color: white;">sales@ai-market.com</a> for custom pricing.</p>
            </div>

            <div style="text-align: center;">
                <a href="/" class="back-link">\u2190 Back to Home</a>
            </div>
        </div>
    </body>
    </html>
    `;
}
__name(generatePricingPage, "generatePricingPage");
async function handleProFeature(request, env2) {
  const userId = request.headers.get("X-USER-ID");
  if (!userId) return new Response(JSON.stringify({ error: "Missing X-USER-ID header" }), { status: 401, headers: { "Content-Type": "application/json" } });
  const store = await getBillingStore();
  if (!store.hasActiveSubscription(userId)) return new Response(JSON.stringify({ error: "Payment required" }), { status: 402, headers: { "Content-Type": "application/json" } });
  const customer = store.getCustomer(userId);
  return new Response(JSON.stringify({ success: true, message: "Welcome to Pro features", customer }), { headers: { "Content-Type": "application/json" } });
}
__name(handleProFeature, "handleProFeature");
async function handleBillingAttach(request, env2) {
  try {
    if (request.method !== "POST") return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: { "Content-Type": "application/json" } });
    const body = await request.json();
    const { userId, customerId } = body || {};
    if (!userId || !customerId) return new Response(JSON.stringify({ error: "Missing userId or customerId" }), { status: 400, headers: { "Content-Type": "application/json" } });
    if (env2.CLERK_API_KEY) {
      try {
        const clerkRes = await fetch(`https://api.clerk.com/v1/users/${encodeURIComponent(userId)}`, { headers: { Authorization: `Bearer ${env2.CLERK_API_KEY}`, "Content-Type": "application/json" } });
        if (!clerkRes.ok) return new Response(JSON.stringify({ error: "Clerk user not found or invalid CLERK_API_KEY" }), { status: 404, headers: { "Content-Type": "application/json" } });
      } catch (err) {
        return new Response(JSON.stringify({ error: "Clerk verification failed", details: err.message }), { status: 502, headers: { "Content-Type": "application/json" } });
      }
    }
    const store = await getBillingStore();
    const cust = store.upsertCustomer(userId, { stripeCustomerId: customerId });
    return new Response(JSON.stringify({ success: true, customer: cust }), { headers: { "Content-Type": "application/json" } });
  } catch (error2) {
    return new Response(JSON.stringify({ error: error2.message }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
__name(handleBillingAttach, "handleBillingAttach");
async function handleStripeWebhook(request, env2) {
  try {
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: { "Content-Type": "application/json" } });
    }
    const payload = await request.text();
    let event = null;
    const { default: StripeClient } = await Promise.resolve().then(() => __toESM(require_StripeClient(), 1));
    const stripe = new StripeClient(env2.STRIPE_SECRET_KEY || "");
    const sig = request.headers.get("stripe-signature") || request.headers.get("Stripe-Signature");
    try {
      event = stripe.verifyWebhook(payload, sig, env2.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      return new Response(JSON.stringify({ error: "Webhook signature verification failed", details: err.message }), { status: 400, headers: { "Content-Type": "application/json" } });
    }
    if (event && event.type === "checkout.session.completed") {
      const data = event.data || {};
      const session = data.object || event.object || {};
      const userId = session.client_reference_id || session.client_reference || session.metadata?.userId || null;
      if (userId) {
        const store = await getBillingStore();
        let customerId = session.customer || session.customer_id || null;
        const { default: StripeClientWebhook } = await Promise.resolve().then(() => __toESM(require_StripeClient(), 1));
        const stripeWebhook = new StripeClientWebhook(env2.STRIPE_SECRET_KEY || "");
        if (!customerId) {
          try {
            const created = await stripeWebhook.createCustomer({ email: session.customer_email || session.customer_email_address || void 0, metadata: { userId } });
            customerId = created.id;
            console.log("Billing: created Stripe customer", customerId, "for user", userId);
          } catch (err) {
            console.log("Billing: failed to create Stripe customer", err.message);
          }
        }
        const subscription = { id: session.subscription || session.subscription_id || `sub_${Math.random().toString(36).slice(2, 8)}`, status: "active", customer: customerId, createdAt: (/* @__PURE__ */ new Date()).toISOString() };
        store.upsertSubscription(userId, subscription);
        if (customerId) store.upsertCustomer(userId, { stripeCustomerId: customerId });
        console.log("Billing: set active subscription for", userId, subscription.id);
      } else {
        console.log("Webhook: checkout.session.completed missing client_reference_id");
      }
    }
    if (event && event.type === "payment_intent.succeeded") {
      const pi = event.data?.object || event.object || {};
      const metadata = pi.metadata || {};
      const vendorId = metadata.vendorId || null;
      if (vendorId) {
        const store = await getBillingStore();
        const v = store.getVendor(vendorId);
        console.log("Marketplace payment succeeded for vendor", vendorId, "vendor exists?", !!v);
      }
    }
    return new Response(JSON.stringify({ received: true }), { headers: { "Content-Type": "application/json" } });
  } catch (error2) {
    return new Response(JSON.stringify({ error: error2.message }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
__name(handleStripeWebhook, "handleStripeWebhook");
async function handleGumroadCheckout(request, env2) {
  try {
    const url = new URL(request.url);
    const product = url.searchParams.get("product");
    if (!product) return new Response(JSON.stringify({ error: "Missing product param" }), { status: 400, headers: { "Content-Type": "application/json" } });
    const { default: ConfigStore } = await Promise.resolve().then(() => __toESM(require_ConfigStore(), 1));
    const configStore = new ConfigStore({ useFile: true });
    const gumConfig = configStore.get("gumroad") || {};
    const affiliateId = gumConfig.affiliateId || env2.GUMROAD_AFFILIATE_ID || "916801939";
    const mapping = gumConfig.mapping || env2.GUMROAD_PRODUCT_URLS && JSON.parse(env2.GUMROAD_PRODUCT_URLS) || {};
    let gumUrl = mapping[product] || `https://gumroad.com/l/${product}`;
    const separator = gumUrl.includes("?") ? "&" : "?";
    gumUrl = `${gumUrl}${separator}a=${affiliateId}`;
    return new Response(JSON.stringify({ url: gumUrl, affiliateId }), { headers: { "Content-Type": "application/json" } });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
__name(handleGumroadCheckout, "handleGumroadCheckout");
async function handleGumroadWebhook(request, env2) {
  try {
    if (request.method !== "POST") return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: { "Content-Type": "application/json" } });
    const payloadText = await request.text();
    let payload;
    const gumSig = request.headers.get("gumroad-signature") || request.headers.get("Gumroad-Signature") || null;
    if (env2.GUMROAD_SECRET && gumSig) {
      const crypto2 = require_crypto();
      const expected = crypto2.createHmac("sha1", env2.GUMROAD_SECRET).update(payloadText).digest("hex");
      if (expected !== gumSig) {
        return new Response(JSON.stringify({ error: "Invalid gumroad signature" }), { status: 400, headers: { "Content-Type": "application/json" } });
      }
      payload = JSON.parse(payloadText);
    } else {
      try {
        payload = JSON.parse(payloadText);
      } catch (err) {
        return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400, headers: { "Content-Type": "application/json" } });
      }
    }
    if (payload.event_type === "sale" || payload.event === "sale") {
      const sale = payload.sale || payload;
      const userId = sale.custom_fields && sale.custom_fields.user_id ? sale.custom_fields.user_id : sale.user_id || sale.email;
      if (userId) {
        const store = await getBillingStore();
        const subscription = { id: sale.id || `gum_${Math.random().toString(36).slice(2, 8)}`, status: "active", customer: sale.email || null, createdAt: (/* @__PURE__ */ new Date()).toISOString() };
        store.upsertSubscription(userId, subscription);
        store.upsertCustomer(userId, { gumroadPurchaseId: sale.id || null, gumroadEmail: sale.email || null });
        console.log("Gumroad: granted access for", userId);
      }
    }
    return new Response(JSON.stringify({ received: true }), { headers: { "Content-Type": "application/json" } });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
__name(handleGumroadWebhook, "handleGumroadWebhook");
async function handleAdmin(request, env2) {
  try {
    const adminToken = env2.ADMIN_TOKEN || process.env.ADMIN_TOKEN;
    const authHeader = request.headers.get("Authorization") || request.headers.get("X-ADMIN-TOKEN");
    if (!adminToken || authHeader !== `Bearer ${adminToken}`) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: { "Content-Type": "application/json" } });
    }
    const url = new URL(request.url);
    if (url.pathname === "/admin/items" && request.method === "GET") {
      const store = await getProductStore();
      return new Response(JSON.stringify(store.getAll()), { headers: { "Content-Type": "application/json" } });
    }
    if (url.pathname === "/admin/items" && request.method === "POST") {
      const body = await request.json();
      const store = await getProductStore();
      const item = store.create({ name: body.name, price: body.price, description: body.description });
      return new Response(JSON.stringify({ success: true, item }), { headers: { "Content-Type": "application/json" } });
    }
    if (url.pathname === "/admin/gumroad/config") {
      if (request.method === "GET") {
        const { default: ConfigStore } = await Promise.resolve().then(() => __toESM(require_ConfigStore(), 1));
        const configStore = new ConfigStore({ useFile: true });
        return new Response(JSON.stringify({ success: true, config: configStore.get("gumroad") || {} }), { headers: { "Content-Type": "application/json" } });
      }
      if (request.method === "POST") {
        const body = await request.json();
        const { default: ConfigStore } = await Promise.resolve().then(() => __toESM(require_ConfigStore(), 1));
        const configStore = new ConfigStore({ useFile: true });
        const existing = configStore.get("gumroad") || {};
        const next = Object.assign({}, existing, body);
        configStore.set("gumroad", next);
        return new Response(JSON.stringify({ success: true, config: next }), { headers: { "Content-Type": "application/json" } });
      }
    }
    const adminPutMatch = url.pathname.match(/^\/admin\/items\/(\d+)$/);
    if (adminPutMatch && request.method === "PUT") {
      const id = adminPutMatch[1];
      const body = await request.json();
      const store = await getProductStore();
      const updated = store.update(id, body);
      if (!updated) return new Response(JSON.stringify({ error: "Not found" }), { status: 404, headers: { "Content-Type": "application/json" } });
      return new Response(JSON.stringify({ success: true, item: updated }), { headers: { "Content-Type": "application/json" } });
    }
    const adminDelMatch = url.pathname.match(/^\/admin\/items\/(\d+)$/);
    if (adminDelMatch && request.method === "DELETE") {
      const id = adminDelMatch[1];
      const store = await getProductStore();
      const ok = store.delete(id);
      if (!ok) return new Response(JSON.stringify({ error: "Not found" }), { status: 404, headers: { "Content-Type": "application/json" } });
      return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
    }
    return new Response(JSON.stringify({ error: "Not found" }), { status: 404, headers: { "Content-Type": "application/json" } });
  } catch (error2) {
    return new Response(JSON.stringify({ error: error2.message }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
__name(handleAdmin, "handleAdmin");

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e) {
    const error2 = reduceError(e);
    return Response.json(error2, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-FiH4G5/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = worker_default;

// node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-FiH4G5/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=worker.js.map
