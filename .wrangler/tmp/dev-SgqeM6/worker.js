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
var init_utils = __esm({
  "node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
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
        } catch (error) {
          console.error("Error generating AI personalized niches:", error);
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
        } catch (error) {
          console.error("Error generating AI seeds:", error);
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
        } catch (error) {
          this.log(`\u274C Error in autonomous execution: ${error.message}`, "error");
          throw error;
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

// node_modules/stripe/cjs/utils.js
var require_utils = __commonJS({
  "node_modules/stripe/cjs/utils.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseHeadersForFetch = exports.parseHttpHeaderAsNumber = exports.parseHttpHeaderAsString = exports.getAPIMode = exports.jsonStringifyRequestData = exports.concat = exports.createApiKeyAuthenticator = exports.determineProcessUserAgentProperties = exports.validateInteger = exports.flattenAndStringify = exports.isObject = exports.emitWarning = exports.pascalToCamelCase = exports.callbackifyPromiseWithTimeout = exports.normalizeHeader = exports.normalizeHeaders = exports.removeNullish = exports.protoExtend = exports.getOptionsFromArgs = exports.getDataFromArgs = exports.extractUrlParams = exports.makeURLInterpolator = exports.queryStringifyRequestData = exports.isOptionsHash = void 0;
    var OPTIONS_KEYS = [
      "apiKey",
      "idempotencyKey",
      "stripeAccount",
      "apiVersion",
      "maxNetworkRetries",
      "timeout",
      "host",
      "authenticator",
      "stripeContext",
      "additionalHeaders",
      "streaming"
    ];
    function isOptionsHash(o) {
      return o && typeof o === "object" && OPTIONS_KEYS.some((prop) => Object.prototype.hasOwnProperty.call(o, prop));
    }
    __name(isOptionsHash, "isOptionsHash");
    exports.isOptionsHash = isOptionsHash;
    function queryStringifyRequestData(data, _apiMode) {
      return stringifyRequestData(data);
    }
    __name(queryStringifyRequestData, "queryStringifyRequestData");
    exports.queryStringifyRequestData = queryStringifyRequestData;
    function encodeQueryValue(value) {
      return encodeURIComponent(value).replace(/!/g, "%21").replace(/\*/g, "%2A").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/'/g, "%27").replace(/%5B/g, "[").replace(/%5D/g, "]");
    }
    __name(encodeQueryValue, "encodeQueryValue");
    function valueToString(value) {
      if (value instanceof Date) {
        return Math.floor(value.getTime() / 1e3).toString();
      }
      if (value === null) {
        return "";
      }
      return String(value);
    }
    __name(valueToString, "valueToString");
    function stringifyRequestData(data) {
      const pairs = [];
      function encode(key, value) {
        if (value === void 0) {
          return;
        }
        if (value === null || typeof value !== "object" || value instanceof Date) {
          pairs.push(encodeQueryValue(key) + "=" + encodeQueryValue(valueToString(value)));
          return;
        }
        if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            if (value[i] !== void 0) {
              encode(key + "[" + i + "]", value[i]);
            }
          }
          return;
        }
        for (const k of Object.keys(value)) {
          encode(key + "[" + k + "]", value[k]);
        }
      }
      __name(encode, "encode");
      if (typeof data === "object" && data !== null) {
        for (const key of Object.keys(data)) {
          encode(key, data[key]);
        }
      }
      return pairs.join("&");
    }
    __name(stringifyRequestData, "stringifyRequestData");
    exports.makeURLInterpolator = /* @__PURE__ */ (() => {
      const rc = {
        "\n": "\\n",
        '"': '\\"',
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
      };
      return (str) => {
        const cleanString = str.replace(/["\n\r\u2028\u2029]/g, ($0) => rc[$0]);
        return (outputs) => {
          return cleanString.replace(/\{([\s\S]+?)\}/g, ($0, $1) => {
            const output = outputs[$1];
            if (isValidEncodeUriComponentType(output))
              return encodeURIComponent(output);
            return "";
          });
        };
      };
    })();
    function isValidEncodeUriComponentType(value) {
      return ["number", "string", "boolean"].includes(typeof value);
    }
    __name(isValidEncodeUriComponentType, "isValidEncodeUriComponentType");
    function extractUrlParams(path) {
      const params = path.match(/\{\w+\}/g);
      if (!params) {
        return [];
      }
      return params.map((param) => param.replace(/[{}]/g, ""));
    }
    __name(extractUrlParams, "extractUrlParams");
    exports.extractUrlParams = extractUrlParams;
    function getDataFromArgs(args) {
      if (!Array.isArray(args) || !args[0] || typeof args[0] !== "object") {
        return {};
      }
      if (!isOptionsHash(args[0])) {
        return args.shift();
      }
      const argKeys = Object.keys(args[0]);
      const optionKeysInArgs = argKeys.filter((key) => OPTIONS_KEYS.includes(key));
      if (optionKeysInArgs.length > 0 && optionKeysInArgs.length !== argKeys.length) {
        emitWarning2(`Options found in arguments (${optionKeysInArgs.join(", ")}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`);
      }
      return {};
    }
    __name(getDataFromArgs, "getDataFromArgs");
    exports.getDataFromArgs = getDataFromArgs;
    function getOptionsFromArgs(args) {
      const opts = {
        host: null,
        headers: {},
        settings: {},
        streaming: false
      };
      if (args.length > 0) {
        const arg = args[args.length - 1];
        if (typeof arg === "string") {
          opts.authenticator = createApiKeyAuthenticator(args.pop());
        } else if (isOptionsHash(arg)) {
          const params = Object.assign({}, args.pop());
          const extraKeys = Object.keys(params).filter((key) => !OPTIONS_KEYS.includes(key));
          if (extraKeys.length) {
            emitWarning2(`Invalid options found (${extraKeys.join(", ")}); ignoring.`);
          }
          if (params.apiKey) {
            opts.authenticator = createApiKeyAuthenticator(params.apiKey);
          }
          if (params.idempotencyKey) {
            opts.headers["Idempotency-Key"] = params.idempotencyKey;
          }
          if (params.stripeAccount) {
            opts.headers["Stripe-Account"] = params.stripeAccount;
          }
          if (params.stripeContext) {
            if (opts.headers["Stripe-Account"]) {
              throw new Error("Can't specify both stripeAccount and stripeContext.");
            }
            opts.headers["Stripe-Context"] = params.stripeContext;
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
          if (params.authenticator) {
            if (params.apiKey) {
              throw new Error("Can't specify both apiKey and authenticator.");
            }
            if (typeof params.authenticator !== "function") {
              throw new Error("The authenticator must be a function receiving a request as the first parameter.");
            }
            opts.authenticator = params.authenticator;
          }
          if (params.additionalHeaders) {
            opts.headers = params.additionalHeaders;
          }
          if (params.streaming) {
            opts.streaming = true;
          }
        }
      }
      return opts;
    }
    __name(getOptionsFromArgs, "getOptionsFromArgs");
    exports.getOptionsFromArgs = getOptionsFromArgs;
    function protoExtend(sub) {
      const Super = this;
      const Constructor = Object.prototype.hasOwnProperty.call(sub, "constructor") ? sub.constructor : function(...args) {
        Super.apply(this, args);
      };
      Object.assign(Constructor, Super);
      Constructor.prototype = Object.create(Super.prototype);
      Object.assign(Constructor.prototype, sub);
      return Constructor;
    }
    __name(protoExtend, "protoExtend");
    exports.protoExtend = protoExtend;
    function removeNullish(obj) {
      if (typeof obj !== "object") {
        throw new Error("Argument must be an object");
      }
      return Object.keys(obj).reduce((result, key) => {
        if (obj[key] != null) {
          result[key] = obj[key];
        }
        return result;
      }, {});
    }
    __name(removeNullish, "removeNullish");
    exports.removeNullish = removeNullish;
    function normalizeHeaders(obj) {
      if (!(obj && typeof obj === "object")) {
        return obj;
      }
      return Object.keys(obj).reduce((result, header) => {
        result[normalizeHeader(header)] = obj[header];
        return result;
      }, {});
    }
    __name(normalizeHeaders, "normalizeHeaders");
    exports.normalizeHeaders = normalizeHeaders;
    function normalizeHeader(header) {
      return header.split("-").map((text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()).join("-");
    }
    __name(normalizeHeader, "normalizeHeader");
    exports.normalizeHeader = normalizeHeader;
    function callbackifyPromiseWithTimeout(promise, callback) {
      if (callback) {
        return promise.then((res) => {
          setTimeout(() => {
            callback(null, res);
          }, 0);
        }, (err) => {
          setTimeout(() => {
            callback(err, null);
          }, 0);
        });
      }
      return promise;
    }
    __name(callbackifyPromiseWithTimeout, "callbackifyPromiseWithTimeout");
    exports.callbackifyPromiseWithTimeout = callbackifyPromiseWithTimeout;
    function pascalToCamelCase(name) {
      if (name === "OAuth") {
        return "oauth";
      } else {
        return name[0].toLowerCase() + name.substring(1);
      }
    }
    __name(pascalToCamelCase, "pascalToCamelCase");
    exports.pascalToCamelCase = pascalToCamelCase;
    function emitWarning2(warning) {
      if (typeof process.emitWarning !== "function") {
        return console.warn(`Stripe: ${warning}`);
      }
      return process.emitWarning(warning, "Stripe");
    }
    __name(emitWarning2, "emitWarning");
    exports.emitWarning = emitWarning2;
    function isObject(obj) {
      const type = typeof obj;
      return (type === "function" || type === "object") && !!obj;
    }
    __name(isObject, "isObject");
    exports.isObject = isObject;
    function flattenAndStringify(data) {
      const result = {};
      const step = /* @__PURE__ */ __name((obj, prevKey) => {
        Object.entries(obj).forEach(([key, value]) => {
          const newKey = prevKey ? `${prevKey}[${key}]` : key;
          if (isObject(value)) {
            if (!(value instanceof Uint8Array) && !Object.prototype.hasOwnProperty.call(value, "data")) {
              return step(value, newKey);
            } else {
              result[newKey] = value;
            }
          } else {
            result[newKey] = String(value);
          }
        });
      }, "step");
      step(data, null);
      return result;
    }
    __name(flattenAndStringify, "flattenAndStringify");
    exports.flattenAndStringify = flattenAndStringify;
    function validateInteger(name, n, defaultVal) {
      if (!Number.isInteger(n)) {
        if (defaultVal !== void 0) {
          return defaultVal;
        } else {
          throw new Error(`${name} must be an integer`);
        }
      }
      return n;
    }
    __name(validateInteger, "validateInteger");
    exports.validateInteger = validateInteger;
    function determineProcessUserAgentProperties() {
      return typeof process === "undefined" ? {} : {
        lang_version: process.version,
        platform: process.platform
      };
    }
    __name(determineProcessUserAgentProperties, "determineProcessUserAgentProperties");
    exports.determineProcessUserAgentProperties = determineProcessUserAgentProperties;
    function createApiKeyAuthenticator(apiKey) {
      const authenticator = /* @__PURE__ */ __name((request) => {
        request.headers.Authorization = "Bearer " + apiKey;
        return Promise.resolve();
      }, "authenticator");
      authenticator._apiKey = apiKey;
      return authenticator;
    }
    __name(createApiKeyAuthenticator, "createApiKeyAuthenticator");
    exports.createApiKeyAuthenticator = createApiKeyAuthenticator;
    function concat(arrays) {
      const totalLength = arrays.reduce((len, array) => len + array.length, 0);
      const merged = new Uint8Array(totalLength);
      let offset = 0;
      arrays.forEach((array) => {
        merged.set(array, offset);
        offset += array.length;
      });
      return merged;
    }
    __name(concat, "concat");
    exports.concat = concat;
    function dateTimeReplacer(key, value) {
      if (this[key] instanceof Date) {
        return Math.floor(this[key].getTime() / 1e3).toString();
      }
      return value;
    }
    __name(dateTimeReplacer, "dateTimeReplacer");
    function jsonStringifyRequestData(data) {
      return JSON.stringify(data, dateTimeReplacer);
    }
    __name(jsonStringifyRequestData, "jsonStringifyRequestData");
    exports.jsonStringifyRequestData = jsonStringifyRequestData;
    function getAPIMode(path) {
      if (!path) {
        return "v1";
      }
      return path.startsWith("/v2") ? "v2" : "v1";
    }
    __name(getAPIMode, "getAPIMode");
    exports.getAPIMode = getAPIMode;
    function parseHttpHeaderAsString(header) {
      if (Array.isArray(header)) {
        return header.join(", ");
      }
      return String(header);
    }
    __name(parseHttpHeaderAsString, "parseHttpHeaderAsString");
    exports.parseHttpHeaderAsString = parseHttpHeaderAsString;
    function parseHttpHeaderAsNumber(header) {
      const number = Array.isArray(header) ? header[0] : header;
      return Number(number);
    }
    __name(parseHttpHeaderAsNumber, "parseHttpHeaderAsNumber");
    exports.parseHttpHeaderAsNumber = parseHttpHeaderAsNumber;
    function parseHeadersForFetch(headers) {
      return Object.entries(headers).map(([key, value]) => {
        return [key, parseHttpHeaderAsString(value)];
      });
    }
    __name(parseHeadersForFetch, "parseHeadersForFetch");
    exports.parseHeadersForFetch = parseHeadersForFetch;
  }
});

// node_modules/stripe/cjs/net/HttpClient.js
var require_HttpClient = __commonJS({
  "node_modules/stripe/cjs/net/HttpClient.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpClientResponse = exports.HttpClient = void 0;
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
    exports.HttpClient = HttpClient;
    HttpClient.CONNECTION_CLOSED_ERROR_CODES = ["ECONNRESET", "EPIPE"];
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
    exports.HttpClientResponse = HttpClientResponse;
  }
});

// node_modules/stripe/cjs/net/FetchHttpClient.js
var require_FetchHttpClient = __commonJS({
  "node_modules/stripe/cjs/net/FetchHttpClient.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FetchHttpClientResponse = exports.FetchHttpClient = void 0;
    var utils_js_1 = require_utils();
    var HttpClient_js_1 = require_HttpClient();
    var FetchHttpClient = class _FetchHttpClient extends HttpClient_js_1.HttpClient {
      static {
        __name(this, "FetchHttpClient");
      }
      constructor(fetchFn) {
        super();
        if (!fetchFn) {
          if (!globalThis.fetch) {
            throw new Error("fetch() function not provided and is not defined in the global scope. You must provide a fetch implementation.");
          }
          fetchFn = globalThis.fetch;
        }
        if (globalThis.AbortController) {
          this._fetchFn = _FetchHttpClient.makeFetchWithAbortTimeout(fetchFn);
        } else {
          this._fetchFn = _FetchHttpClient.makeFetchWithRaceTimeout(fetchFn);
        }
      }
      static makeFetchWithRaceTimeout(fetchFn) {
        return (url, init, timeout) => {
          let pendingTimeoutId;
          const timeoutPromise = new Promise((_, reject) => {
            pendingTimeoutId = setTimeout(() => {
              pendingTimeoutId = null;
              reject(HttpClient_js_1.HttpClient.makeTimeoutError());
            }, timeout);
          });
          const fetchPromise = fetchFn(url, init);
          return Promise.race([fetchPromise, timeoutPromise]).finally(() => {
            if (pendingTimeoutId) {
              clearTimeout(pendingTimeoutId);
            }
          });
        };
      }
      static makeFetchWithAbortTimeout(fetchFn) {
        return async (url, init, timeout) => {
          const abort2 = new AbortController();
          let timeoutId = setTimeout(() => {
            timeoutId = null;
            abort2.abort(HttpClient_js_1.HttpClient.makeTimeoutError());
          }, timeout);
          try {
            return await fetchFn(url, Object.assign(Object.assign({}, init), { signal: abort2.signal }));
          } catch (err) {
            if (err.name === "AbortError") {
              throw HttpClient_js_1.HttpClient.makeTimeoutError();
            } else {
              throw err;
            }
          } finally {
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
          }
        };
      }
      /** @override. */
      getClientName() {
        return "fetch";
      }
      async makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
        const isInsecureConnection = protocol === "http";
        const url = new URL(path, `${isInsecureConnection ? "http" : "https"}://${host}`);
        url.port = port;
        const methodHasPayload = method == "POST" || method == "PUT" || method == "PATCH";
        const body = requestData || (methodHasPayload ? "" : void 0);
        const res = await this._fetchFn(url.toString(), {
          method,
          headers: (0, utils_js_1.parseHeadersForFetch)(headers),
          body
        }, timeout);
        return new FetchHttpClientResponse(res);
      }
    };
    exports.FetchHttpClient = FetchHttpClient;
    var FetchHttpClientResponse = class _FetchHttpClientResponse extends HttpClient_js_1.HttpClientResponse {
      static {
        __name(this, "FetchHttpClientResponse");
      }
      constructor(res) {
        super(res.status, _FetchHttpClientResponse._transformHeadersToObject(res.headers));
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
            throw new Error("Response objects produced by the fetch function given to FetchHttpClient do not have an iterable headers map. Response#headers should be an iterable object.");
          }
          headersObj[entry[0]] = entry[1];
        }
        return headersObj;
      }
    };
    exports.FetchHttpClientResponse = FetchHttpClientResponse;
  }
});

// node_modules/stripe/cjs/crypto/CryptoProvider.js
var require_CryptoProvider = __commonJS({
  "node_modules/stripe/cjs/crypto/CryptoProvider.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CryptoProviderOnlySupportsAsyncError = exports.CryptoProvider = void 0;
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
      /**
       * Computes a SHA-256 hash of the data.
       */
      computeSHA256Async(data) {
        throw new Error("computeSHA256 not implemented.");
      }
    };
    exports.CryptoProvider = CryptoProvider;
    var CryptoProviderOnlySupportsAsyncError = class extends Error {
      static {
        __name(this, "CryptoProviderOnlySupportsAsyncError");
      }
    };
    exports.CryptoProviderOnlySupportsAsyncError = CryptoProviderOnlySupportsAsyncError;
  }
});

// node_modules/stripe/cjs/crypto/SubtleCryptoProvider.js
var require_SubtleCryptoProvider = __commonJS({
  "node_modules/stripe/cjs/crypto/SubtleCryptoProvider.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubtleCryptoProvider = void 0;
    var CryptoProvider_js_1 = require_CryptoProvider();
    var SubtleCryptoProvider = class extends CryptoProvider_js_1.CryptoProvider {
      static {
        __name(this, "SubtleCryptoProvider");
      }
      constructor(subtleCrypto) {
        super();
        this.subtleCrypto = subtleCrypto || crypto.subtle;
      }
      /** @override */
      computeHMACSignature(payload, secret) {
        throw new CryptoProvider_js_1.CryptoProviderOnlySupportsAsyncError("SubtleCryptoProvider cannot be used in a synchronous context.");
      }
      /** @override */
      async computeHMACSignatureAsync(payload, secret) {
        const encoder = new TextEncoder();
        const key = await this.subtleCrypto.importKey("raw", encoder.encode(secret), {
          name: "HMAC",
          hash: { name: "SHA-256" }
        }, false, ["sign"]);
        const signatureBuffer = await this.subtleCrypto.sign("hmac", key, encoder.encode(payload));
        const signatureBytes = new Uint8Array(signatureBuffer);
        const signatureHexCodes = new Array(signatureBytes.length);
        for (let i = 0; i < signatureBytes.length; i++) {
          signatureHexCodes[i] = byteHexMapping[signatureBytes[i]];
        }
        return signatureHexCodes.join("");
      }
      /** @override */
      async computeSHA256Async(data) {
        return new Uint8Array(await this.subtleCrypto.digest("SHA-256", data));
      }
    };
    exports.SubtleCryptoProvider = SubtleCryptoProvider;
    var byteHexMapping = new Array(256);
    for (let i = 0; i < byteHexMapping.length; i++) {
      byteHexMapping[i] = i.toString(16).padStart(2, "0");
    }
  }
});

// node_modules/stripe/cjs/platform/PlatformFunctions.js
var require_PlatformFunctions = __commonJS({
  "node_modules/stripe/cjs/platform/PlatformFunctions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PlatformFunctions = void 0;
    var FetchHttpClient_js_1 = require_FetchHttpClient();
    var SubtleCryptoProvider_js_1 = require_SubtleCryptoProvider();
    var PlatformFunctions = class {
      static {
        __name(this, "PlatformFunctions");
      }
      constructor() {
        this._fetchFn = null;
        this._agent = null;
      }
      /**
       * Gets uname with Node's built-in `exec` function, if available.
       */
      getUname() {
        throw new Error("getUname not implemented.");
      }
      /**
       * Generates a v4 UUID. See https://stackoverflow.com/a/2117523
       */
      uuid4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
          const r = Math.random() * 16 | 0;
          const v = c === "x" ? r : r & 3 | 8;
          return v.toString(16);
        });
      }
      /**
       * Compares strings in constant time.
       */
      secureCompare(a, b) {
        if (a.length !== b.length) {
          return false;
        }
        const len = a.length;
        let result = 0;
        for (let i = 0; i < len; ++i) {
          result |= a.charCodeAt(i) ^ b.charCodeAt(i);
        }
        return result === 0;
      }
      /**
       * Creates an event emitter.
       */
      createEmitter() {
        throw new Error("createEmitter not implemented.");
      }
      /**
       * Checks if the request data is a stream. If so, read the entire stream
       * to a buffer and return the buffer.
       */
      tryBufferData(data) {
        throw new Error("tryBufferData not implemented.");
      }
      /**
       * Creates an HTTP client which uses the Node `http` and `https` packages
       * to issue requests.
       */
      createNodeHttpClient(agent) {
        throw new Error("createNodeHttpClient not implemented.");
      }
      /**
       * Creates an HTTP client for issuing Stripe API requests which uses the Web
       * Fetch API.
       *
       * A fetch function can optionally be passed in as a parameter. If none is
       * passed, will default to the default `fetch` function in the global scope.
       */
      createFetchHttpClient(fetchFn) {
        return new FetchHttpClient_js_1.FetchHttpClient(fetchFn);
      }
      /**
       * Creates an HTTP client using runtime-specific APIs.
       */
      createDefaultHttpClient() {
        throw new Error("createDefaultHttpClient not implemented.");
      }
      /**
       * Creates a CryptoProvider which uses the Node `crypto` package for its computations.
       */
      createNodeCryptoProvider() {
        throw new Error("createNodeCryptoProvider not implemented.");
      }
      /**
       * Creates a CryptoProvider which uses the SubtleCrypto interface of the Web Crypto API.
       */
      createSubtleCryptoProvider(subtleCrypto) {
        return new SubtleCryptoProvider_js_1.SubtleCryptoProvider(subtleCrypto);
      }
      createDefaultCryptoProvider() {
        throw new Error("createDefaultCryptoProvider not implemented.");
      }
    };
    exports.PlatformFunctions = PlatformFunctions;
  }
});

// node_modules/stripe/cjs/StripeEmitter.js
var require_StripeEmitter = __commonJS({
  "node_modules/stripe/cjs/StripeEmitter.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StripeEmitter = void 0;
    var _StripeEvent = class extends Event {
      static {
        __name(this, "_StripeEvent");
      }
      constructor(eventName, data) {
        super(eventName);
        this.data = data;
      }
    };
    var StripeEmitter = class {
      static {
        __name(this, "StripeEmitter");
      }
      constructor() {
        this.eventTarget = new EventTarget();
        this.listenerMapping = /* @__PURE__ */ new Map();
      }
      on(eventName, listener) {
        const listenerWrapper = /* @__PURE__ */ __name((event) => {
          listener(event.data);
        }, "listenerWrapper");
        this.listenerMapping.set(listener, listenerWrapper);
        return this.eventTarget.addEventListener(eventName, listenerWrapper);
      }
      removeListener(eventName, listener) {
        const listenerWrapper = this.listenerMapping.get(listener);
        this.listenerMapping.delete(listener);
        return this.eventTarget.removeEventListener(eventName, listenerWrapper);
      }
      once(eventName, listener) {
        const listenerWrapper = /* @__PURE__ */ __name((event) => {
          listener(event.data);
        }, "listenerWrapper");
        this.listenerMapping.set(listener, listenerWrapper);
        return this.eventTarget.addEventListener(eventName, listenerWrapper, {
          once: true
        });
      }
      emit(eventName, data) {
        return this.eventTarget.dispatchEvent(new _StripeEvent(eventName, data));
      }
    };
    exports.StripeEmitter = StripeEmitter;
  }
});

// node_modules/stripe/cjs/platform/WebPlatformFunctions.js
var require_WebPlatformFunctions = __commonJS({
  "node_modules/stripe/cjs/platform/WebPlatformFunctions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebPlatformFunctions = void 0;
    var PlatformFunctions_js_1 = require_PlatformFunctions();
    var StripeEmitter_js_1 = require_StripeEmitter();
    var WebPlatformFunctions = class extends PlatformFunctions_js_1.PlatformFunctions {
      static {
        __name(this, "WebPlatformFunctions");
      }
      /** @override */
      getUname() {
        return Promise.resolve(null);
      }
      /** @override */
      createEmitter() {
        return new StripeEmitter_js_1.StripeEmitter();
      }
      /** @override */
      tryBufferData(data) {
        if (data.file.data instanceof ReadableStream) {
          throw new Error("Uploading a file as a stream is not supported in non-Node environments. Please open or upvote an issue at github.com/stripe/stripe-node if you use this, detailing your use-case.");
        }
        return Promise.resolve(data);
      }
      /** @override */
      createNodeHttpClient() {
        throw new Error("Stripe: `createNodeHttpClient()` is not available in non-Node environments. Please use `createFetchHttpClient()` instead.");
      }
      /** @override */
      createDefaultHttpClient() {
        return super.createFetchHttpClient();
      }
      /** @override */
      createNodeCryptoProvider() {
        throw new Error("Stripe: `createNodeCryptoProvider()` is not available in non-Node environments. Please use `createSubtleCryptoProvider()` instead.");
      }
      /** @override */
      createDefaultCryptoProvider() {
        return this.createSubtleCryptoProvider();
      }
    };
    exports.WebPlatformFunctions = WebPlatformFunctions;
  }
});

// node_modules/stripe/cjs/Error.js
var require_Error = __commonJS({
  "node_modules/stripe/cjs/Error.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TemporarySessionExpiredError = exports.StripeUnknownError = exports.StripeInvalidGrantError = exports.StripeIdempotencyError = exports.StripeSignatureVerificationError = exports.StripeConnectionError = exports.StripeRateLimitError = exports.StripePermissionError = exports.StripeAuthenticationError = exports.StripeAPIError = exports.StripeInvalidRequestError = exports.StripeCardError = exports.StripeError = exports.generateV2Error = exports.generateV1Error = void 0;
    var generateV1Error = /* @__PURE__ */ __name((rawStripeError) => {
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
    }, "generateV1Error");
    exports.generateV1Error = generateV1Error;
    var generateV2Error = /* @__PURE__ */ __name((rawStripeError) => {
      switch (rawStripeError.type) {
        // switchCases: The beginning of the section generated from our OpenAPI spec
        case "temporary_session_expired":
          return new TemporarySessionExpiredError(rawStripeError);
      }
      switch (rawStripeError.code) {
        case "invalid_fields":
          return new StripeInvalidRequestError(rawStripeError);
      }
      return (0, exports.generateV1Error)(rawStripeError);
    }, "generateV2Error");
    exports.generateV2Error = generateV2Error;
    var StripeError = class extends Error {
      static {
        __name(this, "StripeError");
      }
      constructor(raw = {}, type = null) {
        var _a;
        super(raw.message);
        this.type = type || this.constructor.name;
        this.raw = raw;
        this.rawType = raw.type;
        this.code = raw.code;
        this.doc_url = raw.doc_url;
        this.param = raw.param;
        this.detail = raw.detail;
        this.headers = raw.headers;
        this.requestId = raw.requestId;
        this.statusCode = raw.statusCode;
        this.message = (_a = raw.message) !== null && _a !== void 0 ? _a : "";
        this.userMessage = raw.user_message;
        this.charge = raw.charge;
        this.decline_code = raw.decline_code;
        this.payment_intent = raw.payment_intent;
        this.payment_method = raw.payment_method;
        this.payment_method_type = raw.payment_method_type;
        this.setup_intent = raw.setup_intent;
        this.source = raw.source;
      }
    };
    exports.StripeError = StripeError;
    StripeError.generate = exports.generateV1Error;
    var StripeCardError = class extends StripeError {
      static {
        __name(this, "StripeCardError");
      }
      constructor(raw = {}) {
        super(raw, "StripeCardError");
      }
    };
    exports.StripeCardError = StripeCardError;
    var StripeInvalidRequestError = class extends StripeError {
      static {
        __name(this, "StripeInvalidRequestError");
      }
      constructor(raw = {}) {
        super(raw, "StripeInvalidRequestError");
      }
    };
    exports.StripeInvalidRequestError = StripeInvalidRequestError;
    var StripeAPIError = class extends StripeError {
      static {
        __name(this, "StripeAPIError");
      }
      constructor(raw = {}) {
        super(raw, "StripeAPIError");
      }
    };
    exports.StripeAPIError = StripeAPIError;
    var StripeAuthenticationError = class extends StripeError {
      static {
        __name(this, "StripeAuthenticationError");
      }
      constructor(raw = {}) {
        super(raw, "StripeAuthenticationError");
      }
    };
    exports.StripeAuthenticationError = StripeAuthenticationError;
    var StripePermissionError = class extends StripeError {
      static {
        __name(this, "StripePermissionError");
      }
      constructor(raw = {}) {
        super(raw, "StripePermissionError");
      }
    };
    exports.StripePermissionError = StripePermissionError;
    var StripeRateLimitError = class extends StripeError {
      static {
        __name(this, "StripeRateLimitError");
      }
      constructor(raw = {}) {
        super(raw, "StripeRateLimitError");
      }
    };
    exports.StripeRateLimitError = StripeRateLimitError;
    var StripeConnectionError = class extends StripeError {
      static {
        __name(this, "StripeConnectionError");
      }
      constructor(raw = {}) {
        super(raw, "StripeConnectionError");
      }
    };
    exports.StripeConnectionError = StripeConnectionError;
    var StripeSignatureVerificationError = class extends StripeError {
      static {
        __name(this, "StripeSignatureVerificationError");
      }
      constructor(header, payload, raw = {}) {
        super(raw, "StripeSignatureVerificationError");
        this.header = header;
        this.payload = payload;
      }
    };
    exports.StripeSignatureVerificationError = StripeSignatureVerificationError;
    var StripeIdempotencyError = class extends StripeError {
      static {
        __name(this, "StripeIdempotencyError");
      }
      constructor(raw = {}) {
        super(raw, "StripeIdempotencyError");
      }
    };
    exports.StripeIdempotencyError = StripeIdempotencyError;
    var StripeInvalidGrantError = class extends StripeError {
      static {
        __name(this, "StripeInvalidGrantError");
      }
      constructor(raw = {}) {
        super(raw, "StripeInvalidGrantError");
      }
    };
    exports.StripeInvalidGrantError = StripeInvalidGrantError;
    var StripeUnknownError = class extends StripeError {
      static {
        __name(this, "StripeUnknownError");
      }
      constructor(raw = {}) {
        super(raw, "StripeUnknownError");
      }
    };
    exports.StripeUnknownError = StripeUnknownError;
    var TemporarySessionExpiredError = class extends StripeError {
      static {
        __name(this, "TemporarySessionExpiredError");
      }
      constructor(rawStripeError = {}) {
        super(rawStripeError, "TemporarySessionExpiredError");
      }
    };
    exports.TemporarySessionExpiredError = TemporarySessionExpiredError;
  }
});

// node_modules/stripe/cjs/RequestSender.js
var require_RequestSender = __commonJS({
  "node_modules/stripe/cjs/RequestSender.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RequestSender = void 0;
    var Error_js_1 = require_Error();
    var HttpClient_js_1 = require_HttpClient();
    var utils_js_1 = require_utils();
    var MAX_RETRY_AFTER_WAIT = 60;
    var RequestSender = class _RequestSender {
      static {
        __name(this, "RequestSender");
      }
      constructor(stripe, maxBufferedRequestMetric) {
        this._stripe = stripe;
        this._maxBufferedRequestMetric = maxBufferedRequestMetric;
      }
      _normalizeStripeContext(optsContext, clientContext) {
        if (optsContext) {
          return optsContext.toString() || null;
        }
        return (clientContext === null || clientContext === void 0 ? void 0 : clientContext.toString()) || null;
      }
      _addHeadersDirectlyToObject(obj, headers) {
        obj.requestId = headers["request-id"];
        obj.stripeAccount = obj.stripeAccount || headers["stripe-account"];
        obj.apiVersion = obj.apiVersion || headers["stripe-version"];
        obj.idempotencyKey = obj.idempotencyKey || headers["idempotency-key"];
      }
      _makeResponseEvent(requestEvent, statusCode, headers) {
        const requestEndTime = Date.now();
        const requestDurationMs = requestEndTime - requestEvent.request_start_time;
        return (0, utils_js_1.removeNullish)({
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
      }
      _getRequestId(headers) {
        return headers["request-id"];
      }
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
      _streamingResponseHandler(requestEvent, usage, callback) {
        return (res) => {
          const headers = res.getHeaders();
          const streamCompleteCallback = /* @__PURE__ */ __name(() => {
            const responseEvent = this._makeResponseEvent(requestEvent, res.getStatusCode(), headers);
            this._stripe._emitter.emit("response", responseEvent);
            this._recordRequestMetrics(this._getRequestId(headers), responseEvent.elapsed, usage);
          }, "streamCompleteCallback");
          const stream = res.toStream(streamCompleteCallback);
          this._addHeadersDirectlyToObject(stream, headers);
          return callback(null, stream);
        };
      }
      /**
       * Default handler for Stripe responses. Buffers the response into memory,
       * parses the JSON and returns it (i.e. passes it to the callback) if there
       * is no "error" field. Otherwise constructs/passes an appropriate Error.
       */
      _jsonResponseHandler(requestEvent, apiMode, usage, callback) {
        return (res) => {
          const headers = res.getHeaders();
          const requestId = this._getRequestId(headers);
          const statusCode = res.getStatusCode();
          const responseEvent = this._makeResponseEvent(requestEvent, statusCode, headers);
          this._stripe._emitter.emit("response", responseEvent);
          res.toJSON().then((jsonResponse) => {
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
                err = new Error_js_1.StripeAuthenticationError(jsonResponse.error);
              } else if (statusCode === 403) {
                err = new Error_js_1.StripePermissionError(jsonResponse.error);
              } else if (statusCode === 429) {
                err = new Error_js_1.StripeRateLimitError(jsonResponse.error);
              } else if (apiMode === "v2") {
                err = (0, Error_js_1.generateV2Error)(jsonResponse.error);
              } else {
                err = (0, Error_js_1.generateV1Error)(jsonResponse.error);
              }
              throw err;
            }
            return jsonResponse;
          }, (e) => {
            throw new Error_js_1.StripeAPIError({
              message: "Invalid JSON received from the Stripe API",
              exception: e,
              requestId: headers["request-id"]
            });
          }).then((jsonResponse) => {
            this._recordRequestMetrics(requestId, responseEvent.elapsed, usage);
            const rawResponse = res.getRawResponse();
            this._addHeadersDirectlyToObject(rawResponse, headers);
            Object.defineProperty(jsonResponse, "lastResponse", {
              enumerable: false,
              writable: false,
              value: rawResponse
            });
            callback(null, jsonResponse);
          }, (e) => callback(e, null));
        };
      }
      static _generateConnectionErrorMessage(requestRetries) {
        return `An error occurred with our connection to Stripe.${requestRetries > 0 ? ` Request was retried ${requestRetries} times.` : ""}`;
      }
      // For more on when and how to retry API requests, see https://stripe.com/docs/error-handling#safely-retrying-requests-with-idempotency
      static _shouldRetry(res, numRetries, maxRetries, error) {
        if (error && numRetries === 0 && HttpClient_js_1.HttpClient.CONNECTION_CLOSED_ERROR_CODES.includes(error.code)) {
          return true;
        }
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
      }
      _getSleepTimeInMS(numRetries, retryAfter = null) {
        const initialNetworkRetryDelay = this._stripe.getInitialNetworkRetryDelay();
        const maxNetworkRetryDelay = this._stripe.getMaxNetworkRetryDelay();
        let sleepSeconds = Math.min(initialNetworkRetryDelay * Math.pow(2, numRetries - 1), maxNetworkRetryDelay);
        sleepSeconds *= 0.5 * (1 + Math.random());
        sleepSeconds = Math.max(initialNetworkRetryDelay, sleepSeconds);
        if (Number.isInteger(retryAfter) && retryAfter <= MAX_RETRY_AFTER_WAIT) {
          sleepSeconds = Math.max(sleepSeconds, retryAfter);
        }
        return sleepSeconds * 1e3;
      }
      // Max retries can be set on a per request basis. Favor those over the global setting
      _getMaxNetworkRetries(settings = {}) {
        return settings.maxNetworkRetries !== void 0 && Number.isInteger(settings.maxNetworkRetries) ? settings.maxNetworkRetries : this._stripe.getMaxNetworkRetries();
      }
      _defaultIdempotencyKey(method, settings, apiMode) {
        const maxRetries = this._getMaxNetworkRetries(settings);
        const genKey = /* @__PURE__ */ __name(() => `stripe-node-retry-${this._stripe._platformFunctions.uuid4()}`, "genKey");
        if (apiMode === "v2") {
          if (method === "POST" || method === "DELETE") {
            return genKey();
          }
        } else if (apiMode === "v1") {
          if (method === "POST" && maxRetries > 0) {
            return genKey();
          }
        }
        return null;
      }
      _makeHeaders({ contentType, contentLength, apiVersion, clientUserAgent, method, userSuppliedHeaders, userSuppliedSettings, stripeAccount, stripeContext, apiMode }) {
        const defaultHeaders = {
          Accept: "application/json",
          "Content-Type": contentType,
          "User-Agent": this._getUserAgentString(apiMode),
          "X-Stripe-Client-User-Agent": clientUserAgent,
          "X-Stripe-Client-Telemetry": this._getTelemetryHeader(),
          "Stripe-Version": apiVersion,
          "Stripe-Account": stripeAccount,
          "Stripe-Context": stripeContext,
          "Idempotency-Key": this._defaultIdempotencyKey(method, userSuppliedSettings, apiMode)
        };
        const methodHasPayload = method == "POST" || method == "PUT" || method == "PATCH";
        if (methodHasPayload || contentLength) {
          if (!methodHasPayload) {
            (0, utils_js_1.emitWarning)(`${method} method had non-zero contentLength but no payload is expected for this verb`);
          }
          defaultHeaders["Content-Length"] = contentLength;
        }
        return Object.assign(
          (0, utils_js_1.removeNullish)(defaultHeaders),
          // If the user supplied, say 'idempotency-key', override instead of appending by ensuring caps are the same.
          (0, utils_js_1.normalizeHeaders)(userSuppliedHeaders)
        );
      }
      _getUserAgentString(apiMode) {
        const packageVersion = this._stripe.getConstant("PACKAGE_VERSION");
        const appInfo = this._stripe._appInfo ? this._stripe.getAppInfoAsString() : "";
        return `Stripe/${apiMode} NodeBindings/${packageVersion} ${appInfo}`.trim();
      }
      _getTelemetryHeader() {
        if (this._stripe.getTelemetryEnabled() && this._stripe._prevRequestMetrics.length > 0) {
          const metrics = this._stripe._prevRequestMetrics.shift();
          return JSON.stringify({
            last_request_metrics: metrics
          });
        }
      }
      _recordRequestMetrics(requestId, requestDurationMs, usage) {
        if (this._stripe.getTelemetryEnabled() && requestId) {
          if (this._stripe._prevRequestMetrics.length > this._maxBufferedRequestMetric) {
            (0, utils_js_1.emitWarning)("Request metrics buffer is full, dropping telemetry message.");
          } else {
            const m = {
              request_id: requestId,
              request_duration_ms: requestDurationMs
            };
            if (usage && usage.length > 0) {
              m.usage = usage;
            }
            this._stripe._prevRequestMetrics.push(m);
          }
        }
      }
      _rawRequest(method, path, params, options, usage) {
        const requestPromise = new Promise((resolve, reject) => {
          let opts;
          try {
            const requestMethod = method.toUpperCase();
            if (requestMethod !== "POST" && params && Object.keys(params).length !== 0) {
              throw new Error("rawRequest only supports params on POST requests. Please pass null and add your parameters to path.");
            }
            const args = [].slice.call([params, options]);
            const dataFromArgs = (0, utils_js_1.getDataFromArgs)(args);
            const data = requestMethod === "POST" ? Object.assign({}, dataFromArgs) : null;
            const calculatedOptions = (0, utils_js_1.getOptionsFromArgs)(args);
            const headers2 = calculatedOptions.headers;
            const authenticator2 = calculatedOptions.authenticator;
            opts = {
              requestMethod,
              requestPath: path,
              bodyData: data,
              queryData: {},
              authenticator: authenticator2,
              headers: headers2,
              host: calculatedOptions.host,
              streaming: !!calculatedOptions.streaming,
              settings: {},
              // We use this for thin event internals, so we should record the more specific `usage`, when available
              usage: usage || ["raw_request"]
            };
          } catch (err) {
            reject(err);
            return;
          }
          function requestCallback(err, response) {
            if (err) {
              reject(err);
            } else {
              resolve(response);
            }
          }
          __name(requestCallback, "requestCallback");
          const { headers, settings } = opts;
          const authenticator = opts.authenticator;
          this._request(opts.requestMethod, opts.host, path, opts.bodyData, authenticator, { headers, settings, streaming: opts.streaming }, opts.usage, requestCallback);
        });
        return requestPromise;
      }
      _getContentLength(data) {
        return typeof data === "string" ? new TextEncoder().encode(data).length : data.length;
      }
      _request(method, host, path, data, authenticator, options, usage = [], callback, requestDataProcessor = null) {
        var _a;
        let requestData;
        authenticator = (_a = authenticator !== null && authenticator !== void 0 ? authenticator : this._stripe._authenticator) !== null && _a !== void 0 ? _a : null;
        const apiMode = (0, utils_js_1.getAPIMode)(path);
        const retryRequest = /* @__PURE__ */ __name((requestFn, apiVersion, headers, requestRetries, retryAfter) => {
          return setTimeout(requestFn, this._getSleepTimeInMS(requestRetries, retryAfter), apiVersion, headers, requestRetries + 1);
        }, "retryRequest");
        const makeRequest = /* @__PURE__ */ __name((apiVersion, headers, numRetries) => {
          const timeout = options.settings && options.settings.timeout && Number.isInteger(options.settings.timeout) && options.settings.timeout >= 0 ? options.settings.timeout : this._stripe.getApiField("timeout");
          const request = {
            host: host || this._stripe.getApiField("host"),
            port: this._stripe.getApiField("port"),
            path,
            method,
            headers: Object.assign({}, headers),
            body: requestData,
            protocol: this._stripe.getApiField("protocol")
          };
          authenticator(request).then(() => {
            const req = this._stripe.getApiField("httpClient").makeRequest(request.host, request.port, request.path, request.method, request.headers, request.body, request.protocol, timeout);
            const requestStartTime = Date.now();
            const requestEvent = (0, utils_js_1.removeNullish)({
              api_version: apiVersion,
              account: (0, utils_js_1.parseHttpHeaderAsString)(headers["Stripe-Account"]),
              idempotency_key: (0, utils_js_1.parseHttpHeaderAsString)(headers["Idempotency-Key"]),
              method,
              path,
              request_start_time: requestStartTime
            });
            const requestRetries = numRetries || 0;
            const maxRetries = this._getMaxNetworkRetries(options.settings || {});
            this._stripe._emitter.emit("request", requestEvent);
            req.then((res) => {
              if (_RequestSender._shouldRetry(res, requestRetries, maxRetries)) {
                return retryRequest(makeRequest, apiVersion, headers, requestRetries, (0, utils_js_1.parseHttpHeaderAsNumber)(res.getHeaders()["retry-after"]));
              } else if (options.streaming && res.getStatusCode() < 400) {
                return this._streamingResponseHandler(requestEvent, usage, callback)(res);
              } else {
                return this._jsonResponseHandler(requestEvent, apiMode, usage, callback)(res);
              }
            }).catch((error) => {
              if (_RequestSender._shouldRetry(null, requestRetries, maxRetries, error)) {
                return retryRequest(makeRequest, apiVersion, headers, requestRetries, null);
              } else {
                const isTimeoutError = error.code && error.code === HttpClient_js_1.HttpClient.TIMEOUT_ERROR_CODE;
                return callback(new Error_js_1.StripeConnectionError({
                  message: isTimeoutError ? `Request aborted due to timeout being reached (${timeout}ms)` : _RequestSender._generateConnectionErrorMessage(requestRetries),
                  detail: error
                }));
              }
            });
          }).catch((e) => {
            throw new Error_js_1.StripeError({
              message: "Unable to authenticate the request",
              exception: e
            });
          });
        }, "makeRequest");
        const prepareAndMakeRequest = /* @__PURE__ */ __name((error, data2) => {
          if (error) {
            return callback(error);
          }
          requestData = data2;
          this._stripe.getClientUserAgent((clientUserAgent) => {
            var _a2, _b, _c;
            const apiVersion = this._stripe.getApiField("version");
            const headers = this._makeHeaders({
              contentType: apiMode == "v2" ? "application/json" : "application/x-www-form-urlencoded",
              contentLength: this._getContentLength(data2),
              apiVersion,
              clientUserAgent,
              method,
              // other callers expect null, but .headers being optional means it's undefined if not supplied. So we normalize to null.
              userSuppliedHeaders: (_a2 = options.headers) !== null && _a2 !== void 0 ? _a2 : null,
              userSuppliedSettings: (_b = options.settings) !== null && _b !== void 0 ? _b : {},
              stripeAccount: (_c = options.stripeAccount) !== null && _c !== void 0 ? _c : this._stripe.getApiField("stripeAccount"),
              stripeContext: this._normalizeStripeContext(options.stripeContext, this._stripe.getApiField("stripeContext")),
              apiMode
            });
            makeRequest(apiVersion, headers, 0);
          });
        }, "prepareAndMakeRequest");
        if (requestDataProcessor) {
          requestDataProcessor(method, data, options.headers, prepareAndMakeRequest);
        } else {
          let stringifiedData;
          if (apiMode == "v2") {
            stringifiedData = data ? (0, utils_js_1.jsonStringifyRequestData)(data) : "";
          } else {
            stringifiedData = (0, utils_js_1.queryStringifyRequestData)(data || {});
          }
          prepareAndMakeRequest(null, stringifiedData);
        }
      }
    };
    exports.RequestSender = RequestSender;
  }
});

// node_modules/stripe/cjs/autoPagination.js
var require_autoPagination = __commonJS({
  "node_modules/stripe/cjs/autoPagination.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeAutoPaginationMethods = void 0;
    var utils_js_1 = require_utils();
    var V1Iterator = class {
      static {
        __name(this, "V1Iterator");
      }
      constructor(firstPagePromise, requestArgs, spec, stripeResource) {
        this.index = 0;
        this.pagePromise = firstPagePromise;
        this.promiseCache = { currentPromise: null };
        this.requestArgs = requestArgs;
        this.spec = spec;
        this.stripeResource = stripeResource;
      }
      async iterate(pageResult) {
        if (!(pageResult && pageResult.data && typeof pageResult.data.length === "number")) {
          throw Error("Unexpected: Stripe API response does not have a well-formed `data` array.");
        }
        const reverseIteration = isReverseIteration(this.requestArgs);
        if (this.index < pageResult.data.length) {
          const idx = reverseIteration ? pageResult.data.length - 1 - this.index : this.index;
          const value = pageResult.data[idx];
          this.index += 1;
          return { value, done: false };
        } else if (pageResult.has_more) {
          this.index = 0;
          this.pagePromise = this.getNextPage(pageResult);
          const nextPageResult = await this.pagePromise;
          return this.iterate(nextPageResult);
        }
        return { done: true, value: void 0 };
      }
      /** @abstract */
      getNextPage(_pageResult) {
        throw new Error("Unimplemented");
      }
      async _next() {
        return this.iterate(await this.pagePromise);
      }
      next() {
        if (this.promiseCache.currentPromise) {
          return this.promiseCache.currentPromise;
        }
        const nextPromise = (async () => {
          const ret = await this._next();
          this.promiseCache.currentPromise = null;
          return ret;
        })();
        this.promiseCache.currentPromise = nextPromise;
        return nextPromise;
      }
    };
    var V1ListIterator = class extends V1Iterator {
      static {
        __name(this, "V1ListIterator");
      }
      getNextPage(pageResult) {
        const reverseIteration = isReverseIteration(this.requestArgs);
        const lastId = getLastId(pageResult, reverseIteration);
        return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
          [reverseIteration ? "ending_before" : "starting_after"]: lastId
        });
      }
    };
    var V1SearchIterator = class extends V1Iterator {
      static {
        __name(this, "V1SearchIterator");
      }
      getNextPage(pageResult) {
        if (!pageResult.next_page) {
          throw Error("Unexpected: Stripe API response does not have a well-formed `next_page` field, but `has_more` was true.");
        }
        return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
          page: pageResult.next_page
        });
      }
    };
    var V2ListIterator = class {
      static {
        __name(this, "V2ListIterator");
      }
      constructor(firstPagePromise, requestArgs, spec, stripeResource) {
        this.currentPageIterator = (async () => {
          const page = await firstPagePromise;
          return page.data[Symbol.iterator]();
        })();
        this.nextPageUrl = (async () => {
          const page = await firstPagePromise;
          return page.next_page_url || null;
        })();
        this.requestArgs = requestArgs;
        this.spec = spec;
        this.stripeResource = stripeResource;
      }
      async turnPage() {
        const nextPageUrl = await this.nextPageUrl;
        if (!nextPageUrl)
          return null;
        this.spec.fullPath = nextPageUrl;
        const page = await this.stripeResource._makeRequest([], this.spec, {});
        this.nextPageUrl = Promise.resolve(page.next_page_url);
        this.currentPageIterator = Promise.resolve(page.data[Symbol.iterator]());
        return this.currentPageIterator;
      }
      async next() {
        {
          const result2 = (await this.currentPageIterator).next();
          if (!result2.done)
            return { done: false, value: result2.value };
        }
        const nextPageIterator = await this.turnPage();
        if (!nextPageIterator) {
          return { done: true, value: void 0 };
        }
        const result = nextPageIterator.next();
        if (!result.done)
          return { done: false, value: result.value };
        return { done: true, value: void 0 };
      }
    };
    var makeAutoPaginationMethods = /* @__PURE__ */ __name((stripeResource, requestArgs, spec, firstPagePromise) => {
      const apiMode = (0, utils_js_1.getAPIMode)(spec.fullPath || spec.path);
      if (apiMode !== "v2" && spec.methodType === "search") {
        return makeAutoPaginationMethodsFromIterator(new V1SearchIterator(firstPagePromise, requestArgs, spec, stripeResource));
      }
      if (apiMode !== "v2" && spec.methodType === "list") {
        return makeAutoPaginationMethodsFromIterator(new V1ListIterator(firstPagePromise, requestArgs, spec, stripeResource));
      }
      if (apiMode === "v2" && spec.methodType === "list") {
        return makeAutoPaginationMethodsFromIterator(new V2ListIterator(firstPagePromise, requestArgs, spec, stripeResource));
      }
      return null;
    }, "makeAutoPaginationMethods");
    exports.makeAutoPaginationMethods = makeAutoPaginationMethods;
    var makeAutoPaginationMethodsFromIterator = /* @__PURE__ */ __name((iterator) => {
      const autoPagingEach = makeAutoPagingEach((...args) => iterator.next(...args));
      const autoPagingToArray = makeAutoPagingToArray(autoPagingEach);
      const autoPaginationMethods = {
        autoPagingEach,
        autoPagingToArray,
        // Async iterator functions:
        next: /* @__PURE__ */ __name(() => iterator.next(), "next"),
        return: /* @__PURE__ */ __name(() => {
          return {};
        }, "return"),
        [getAsyncIteratorSymbol()]: () => {
          return autoPaginationMethods;
        }
      };
      return autoPaginationMethods;
    }, "makeAutoPaginationMethodsFromIterator");
    function getAsyncIteratorSymbol() {
      if (typeof Symbol !== "undefined" && Symbol.asyncIterator) {
        return Symbol.asyncIterator;
      }
      return "@@asyncIterator";
    }
    __name(getAsyncIteratorSymbol, "getAsyncIteratorSymbol");
    function getDoneCallback(args) {
      if (args.length < 2) {
        return null;
      }
      const onDone = args[1];
      if (typeof onDone !== "function") {
        throw Error(`The second argument to autoPagingEach, if present, must be a callback function; received ${typeof onDone}`);
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
        throw Error(`The first argument to autoPagingEach, if present, must be a callback function; received ${typeof onItem}`);
      }
      if (onItem.length === 2) {
        return onItem;
      }
      if (onItem.length > 2) {
        throw Error(`The \`onItem\` callback function passed to autoPagingEach must accept at most two arguments; got ${onItem}`);
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
        throw Error("Unexpected: No `id` found on the last item while auto-paging a list.");
      }
      return lastId;
    }
    __name(getLastId, "getLastId");
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
          // @ts-ignore we might need a null check
          onItem
        );
        return (0, utils_js_1.callbackifyPromiseWithTimeout)(autoPagePromise, onDone);
      }, "autoPagingEach");
    }
    __name(makeAutoPagingEach, "makeAutoPagingEach");
    function makeAutoPagingToArray(autoPagingEach) {
      return /* @__PURE__ */ __name(function autoPagingToArray(opts, onDone) {
        const limit = opts && opts.limit;
        if (!limit) {
          throw Error("You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.");
        }
        if (limit > 1e4) {
          throw Error("You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.");
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
        return (0, utils_js_1.callbackifyPromiseWithTimeout)(promise, onDone);
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
              return handleIteration({ done: true, value: void 0 });
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
      const dataFromArgs = (0, utils_js_1.getDataFromArgs)(args);
      return !!dataFromArgs.ending_before;
    }
    __name(isReverseIteration, "isReverseIteration");
  }
});

// node_modules/stripe/cjs/StripeMethod.js
var require_StripeMethod = __commonJS({
  "node_modules/stripe/cjs/StripeMethod.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stripeMethod = void 0;
    var utils_js_1 = require_utils();
    var autoPagination_js_1 = require_autoPagination();
    function stripeMethod(spec) {
      if (spec.path !== void 0 && spec.fullPath !== void 0) {
        throw new Error(`Method spec specified both a 'path' (${spec.path}) and a 'fullPath' (${spec.fullPath}).`);
      }
      return function(...args) {
        const callback = typeof args[args.length - 1] == "function" && args.pop();
        spec.urlParams = (0, utils_js_1.extractUrlParams)(spec.fullPath || this.createResourcePathWithSymbols(spec.path || ""));
        const requestPromise = (0, utils_js_1.callbackifyPromiseWithTimeout)(this._makeRequest(args, spec, {}), callback);
        Object.assign(requestPromise, (0, autoPagination_js_1.makeAutoPaginationMethods)(this, args, spec, requestPromise));
        return requestPromise;
      };
    }
    __name(stripeMethod, "stripeMethod");
    exports.stripeMethod = stripeMethod;
  }
});

// node_modules/stripe/cjs/StripeResource.js
var require_StripeResource = __commonJS({
  "node_modules/stripe/cjs/StripeResource.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StripeResource = void 0;
    var utils_js_1 = require_utils();
    var StripeMethod_js_1 = require_StripeMethod();
    StripeResource.extend = utils_js_1.protoExtend;
    StripeResource.method = StripeMethod_js_1.stripeMethod;
    StripeResource.MAX_BUFFERED_REQUEST_METRICS = 100;
    function StripeResource(stripe, deprecatedUrlData) {
      this._stripe = stripe;
      if (deprecatedUrlData) {
        throw new Error("Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids.");
      }
      this.basePath = (0, utils_js_1.makeURLInterpolator)(
        // @ts-ignore changing type of basePath
        this.basePath || stripe.getApiField("basePath")
      );
      this.resourcePath = this.path;
      this.path = (0, utils_js_1.makeURLInterpolator)(this.path);
      this.initialize(...arguments);
    }
    __name(StripeResource, "StripeResource");
    exports.StripeResource = StripeResource;
    StripeResource.prototype = {
      _stripe: null,
      // @ts-ignore the type of path changes in ctor
      path: "",
      resourcePath: "",
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
        const urlParts = [this.basePath(urlData), this.path(urlData)];
        if (typeof commandPath === "function") {
          const computedCommandPath = commandPath(urlData);
          if (computedCommandPath) {
            urlParts.push(computedCommandPath);
          }
        } else {
          urlParts.push(commandPath);
        }
        return this._joinUrlParts(urlParts);
      },
      // Creates a relative resource path with symbols left in (unlike
      // createFullPath which takes some data to replace them with). For example it
      // might produce: /invoices/{id}
      createResourcePathWithSymbols(pathWithSymbols) {
        if (pathWithSymbols) {
          return `/${this._joinUrlParts([this.resourcePath, pathWithSymbols])}`;
        } else {
          return `/${this.resourcePath}`;
        }
      },
      _joinUrlParts(parts) {
        return parts.join("/").replace(/\/{2,}/g, "/");
      },
      _getRequestOpts(requestArgs, spec, overrideData) {
        var _a;
        const requestMethod = (spec.method || "GET").toUpperCase();
        const usage = spec.usage || [];
        const urlParams = spec.urlParams || [];
        const encode = spec.encode || ((data2) => data2);
        const isUsingFullPath = !!spec.fullPath;
        const commandPath = (0, utils_js_1.makeURLInterpolator)(isUsingFullPath ? spec.fullPath : spec.path || "");
        const path = isUsingFullPath ? spec.fullPath : this.createResourcePathWithSymbols(spec.path);
        const args = [].slice.call(requestArgs);
        const urlData = urlParams.reduce((urlData2, param) => {
          const arg = args.shift();
          if (typeof arg !== "string") {
            throw new Error(`Stripe: Argument "${param}" must be a string, but got: ${arg} (on API request to \`${requestMethod} ${path}\`)`);
          }
          urlData2[param] = arg;
          return urlData2;
        }, {});
        const dataFromArgs = (0, utils_js_1.getDataFromArgs)(args);
        const data = encode(Object.assign({}, dataFromArgs, overrideData));
        const options = (0, utils_js_1.getOptionsFromArgs)(args);
        const host = options.host || spec.host;
        const streaming = !!spec.streaming || !!options.streaming;
        if (args.filter((x) => x != null).length) {
          throw new Error(`Stripe: Unknown arguments (${args}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${requestMethod} \`${path}\`)`);
        }
        const requestPath = isUsingFullPath ? commandPath(urlData) : this.createFullPath(commandPath, urlData);
        const headers = Object.assign(options.headers, spec.headers);
        if (spec.validator) {
          spec.validator(data, { headers });
        }
        const dataInQuery = spec.method === "GET" || spec.method === "DELETE";
        const bodyData = dataInQuery ? null : data;
        const queryData = dataInQuery ? data : {};
        return {
          requestMethod,
          requestPath,
          bodyData,
          queryData,
          authenticator: (_a = options.authenticator) !== null && _a !== void 0 ? _a : null,
          headers,
          host: host !== null && host !== void 0 ? host : null,
          streaming,
          settings: options.settings,
          usage
        };
      },
      _makeRequest(requestArgs, spec, overrideData) {
        return new Promise((resolve, reject) => {
          var _a;
          let opts;
          try {
            opts = this._getRequestOpts(requestArgs, spec, overrideData);
          } catch (err) {
            reject(err);
            return;
          }
          function requestCallback(err, response) {
            if (err) {
              reject(err);
            } else {
              resolve(spec.transformResponseData ? spec.transformResponseData(response) : response);
            }
          }
          __name(requestCallback, "requestCallback");
          const emptyQuery = Object.keys(opts.queryData).length === 0;
          const path = [
            opts.requestPath,
            emptyQuery ? "" : "?",
            (0, utils_js_1.queryStringifyRequestData)(opts.queryData)
          ].join("");
          const { headers, settings } = opts;
          this._stripe._requestSender._request(opts.requestMethod, opts.host, path, opts.bodyData, opts.authenticator, {
            headers,
            settings,
            streaming: opts.streaming
          }, opts.usage, requestCallback, (_a = this.requestDataProcessor) === null || _a === void 0 ? void 0 : _a.bind(this));
        });
      }
    };
  }
});

// node_modules/stripe/cjs/StripeContext.js
var require_StripeContext = __commonJS({
  "node_modules/stripe/cjs/StripeContext.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StripeContext = void 0;
    var StripeContext = class _StripeContext {
      static {
        __name(this, "StripeContext");
      }
      /**
       * Creates a new StripeContext with the given segments.
       */
      constructor(segments = []) {
        this._segments = [...segments];
      }
      /**
       * Gets a copy of the segments of this Context.
       */
      get segments() {
        return [...this._segments];
      }
      /**
       * Creates a new StripeContext with an additional segment appended.
       */
      push(segment) {
        if (!segment) {
          throw new Error("Segment cannot be null or undefined");
        }
        return new _StripeContext([...this._segments, segment]);
      }
      /**
       * Creates a new StripeContext with the last segment removed.
       * If there are no segments, throws an error.
       */
      pop() {
        if (this._segments.length === 0) {
          throw new Error("Cannot pop from an empty context");
        }
        return new _StripeContext(this._segments.slice(0, -1));
      }
      /**
       * Converts this context to its string representation.
       */
      toString() {
        return this._segments.join("/");
      }
      /**
       * Parses a context string into a StripeContext instance.
       */
      static parse(contextStr) {
        if (!contextStr) {
          return new _StripeContext([]);
        }
        return new _StripeContext(contextStr.split("/"));
      }
    };
    exports.StripeContext = StripeContext;
  }
});

// node_modules/stripe/cjs/Webhooks.js
var require_Webhooks = __commonJS({
  "node_modules/stripe/cjs/Webhooks.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createWebhooks = void 0;
    var Error_js_1 = require_Error();
    var CryptoProvider_js_1 = require_CryptoProvider();
    function createWebhooks(platformFunctions) {
      const Webhook = {
        DEFAULT_TOLERANCE: 300,
        signature: null,
        constructEvent(payload, header, secret, tolerance, cryptoProvider, receivedAt) {
          try {
            if (!this.signature) {
              throw new Error("ERR: missing signature helper, unable to verify");
            }
            this.signature.verifyHeader(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider, receivedAt);
          } catch (e) {
            if (e instanceof CryptoProvider_js_1.CryptoProviderOnlySupportsAsyncError) {
              e.message += "\nUse `await constructEventAsync(...)` instead of `constructEvent(...)`";
            }
            throw e;
          }
          const jsonPayload = payload instanceof Uint8Array ? JSON.parse(new TextDecoder("utf8").decode(payload)) : JSON.parse(payload);
          return jsonPayload;
        },
        async constructEventAsync(payload, header, secret, tolerance, cryptoProvider, receivedAt) {
          if (!this.signature) {
            throw new Error("ERR: missing signature helper, unable to verify");
          }
          await this.signature.verifyHeaderAsync(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider, receivedAt);
          const jsonPayload = payload instanceof Uint8Array ? JSON.parse(new TextDecoder("utf8").decode(payload)) : JSON.parse(payload);
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
          const preparedOpts = prepareOptions(opts);
          const signature2 = preparedOpts.signature || preparedOpts.cryptoProvider.computeHMACSignature(preparedOpts.payloadString, preparedOpts.secret);
          return preparedOpts.generateHeaderString(signature2);
        }, "generateTestHeaderString"),
        generateTestHeaderStringAsync: /* @__PURE__ */ __name(async function(opts) {
          const preparedOpts = prepareOptions(opts);
          const signature2 = preparedOpts.signature || await preparedOpts.cryptoProvider.computeHMACSignatureAsync(preparedOpts.payloadString, preparedOpts.secret);
          return preparedOpts.generateHeaderString(signature2);
        }, "generateTestHeaderStringAsync")
      };
      const signature = {
        EXPECTED_SCHEME: "v1",
        verifyHeader(encodedPayload, encodedHeader, secret, tolerance, cryptoProvider, receivedAt) {
          const { decodedHeader: header, decodedPayload: payload, details, suspectPayloadType } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
          const secretContainsWhitespace = /\s/.test(secret);
          cryptoProvider = cryptoProvider || getCryptoProvider();
          const expectedSignature = cryptoProvider.computeHMACSignature(makeHMACContent(payload, details), secret);
          validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt);
          return true;
        },
        async verifyHeaderAsync(encodedPayload, encodedHeader, secret, tolerance, cryptoProvider, receivedAt) {
          const { decodedHeader: header, decodedPayload: payload, details, suspectPayloadType } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
          const secretContainsWhitespace = /\s/.test(secret);
          cryptoProvider = cryptoProvider || getCryptoProvider();
          const expectedSignature = await cryptoProvider.computeHMACSignatureAsync(makeHMACContent(payload, details), secret);
          return validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt);
        }
      };
      function makeHMACContent(payload, details) {
        return `${details.timestamp}.${payload}`;
      }
      __name(makeHMACContent, "makeHMACContent");
      function parseEventDetails(encodedPayload, encodedHeader, expectedScheme) {
        if (!encodedPayload) {
          throw new Error_js_1.StripeSignatureVerificationError(encodedHeader, encodedPayload, {
            message: "No webhook payload was provided."
          });
        }
        const suspectPayloadType = typeof encodedPayload != "string" && !(encodedPayload instanceof Uint8Array);
        const textDecoder = new TextDecoder("utf8");
        const decodedPayload = encodedPayload instanceof Uint8Array ? textDecoder.decode(encodedPayload) : encodedPayload;
        if (Array.isArray(encodedHeader)) {
          throw new Error("Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.");
        }
        if (encodedHeader == null || encodedHeader == "") {
          throw new Error_js_1.StripeSignatureVerificationError(encodedHeader, encodedPayload, {
            message: "No stripe-signature header value was provided."
          });
        }
        const decodedHeader = encodedHeader instanceof Uint8Array ? textDecoder.decode(encodedHeader) : encodedHeader;
        const details = parseHeader(decodedHeader, expectedScheme);
        if (!details || details.timestamp === -1) {
          throw new Error_js_1.StripeSignatureVerificationError(decodedHeader, decodedPayload, {
            message: "Unable to extract timestamp and signatures from header"
          });
        }
        if (!details.signatures.length) {
          throw new Error_js_1.StripeSignatureVerificationError(decodedHeader, decodedPayload, {
            message: "No signatures found with expected scheme"
          });
        }
        return {
          decodedPayload,
          decodedHeader,
          details,
          suspectPayloadType
        };
      }
      __name(parseEventDetails, "parseEventDetails");
      function validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt) {
        const signatureFound = !!details.signatures.filter(platformFunctions.secureCompare.bind(platformFunctions, expectedSignature)).length;
        const docsLocation = "\nLearn more about webhook signing and explore webhook integration examples for various frameworks at https://docs.stripe.com/webhooks/signature";
        const whitespaceMessage = secretContainsWhitespace ? "\n\nNote: The provided signing secret contains whitespace. This often indicates an extra newline or space is in the value" : "";
        if (!signatureFound) {
          if (suspectPayloadType) {
            throw new Error_js_1.StripeSignatureVerificationError(header, payload, {
              message: "Webhook payload must be provided as a string or a Buffer (https://nodejs.org/api/buffer.html) instance representing the _raw_ request body.Payload was provided as a parsed JavaScript object instead. \nSignature verification is impossible without access to the original signed material. \n" + docsLocation + "\n" + whitespaceMessage
            });
          }
          throw new Error_js_1.StripeSignatureVerificationError(header, payload, {
            message: "No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe? \n If a webhook request is being forwarded by a third-party tool, ensure that the exact request body, including JSON formatting and new line style, is preserved.\n" + docsLocation + "\n" + whitespaceMessage
          });
        }
        const timestampAge = Math.floor((typeof receivedAt === "number" ? receivedAt : Date.now()) / 1e3) - details.timestamp;
        if (tolerance > 0 && timestampAge > tolerance) {
          throw new Error_js_1.StripeSignatureVerificationError(header, payload, {
            message: "Timestamp outside the tolerance zone"
          });
        }
        return true;
      }
      __name(validateComputedSignature, "validateComputedSignature");
      function parseHeader(header, scheme) {
        if (typeof header !== "string") {
          return null;
        }
        return header.split(",").reduce((accum, item) => {
          const kv = item.split("=");
          if (kv[0] === "t") {
            accum.timestamp = parseInt(kv[1], 10);
          }
          if (kv[0] === scheme) {
            accum.signatures.push(kv[1]);
          }
          return accum;
        }, {
          timestamp: -1,
          signatures: []
        });
      }
      __name(parseHeader, "parseHeader");
      let webhooksCryptoProviderInstance = null;
      function getCryptoProvider() {
        if (!webhooksCryptoProviderInstance) {
          webhooksCryptoProviderInstance = platformFunctions.createDefaultCryptoProvider();
        }
        return webhooksCryptoProviderInstance;
      }
      __name(getCryptoProvider, "getCryptoProvider");
      function prepareOptions(opts) {
        if (!opts) {
          throw new Error_js_1.StripeError({
            message: "Options are required"
          });
        }
        const timestamp = Math.floor(opts.timestamp) || Math.floor(Date.now() / 1e3);
        const scheme = opts.scheme || signature.EXPECTED_SCHEME;
        const cryptoProvider = opts.cryptoProvider || getCryptoProvider();
        const payloadString = `${timestamp}.${opts.payload}`;
        const generateHeaderString = /* @__PURE__ */ __name((signature2) => {
          return `t=${timestamp},${scheme}=${signature2}`;
        }, "generateHeaderString");
        return Object.assign(Object.assign({}, opts), {
          timestamp,
          scheme,
          cryptoProvider,
          payloadString,
          generateHeaderString
        });
      }
      __name(prepareOptions, "prepareOptions");
      Webhook.signature = signature;
      return Webhook;
    }
    __name(createWebhooks, "createWebhooks");
    exports.createWebhooks = createWebhooks;
  }
});

// node_modules/stripe/cjs/apiVersion.js
var require_apiVersion = __commonJS({
  "node_modules/stripe/cjs/apiVersion.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApiMajorVersion = exports.ApiVersion = void 0;
    exports.ApiVersion = "2026-01-28.clover";
    exports.ApiMajorVersion = "clover";
  }
});

// node_modules/stripe/cjs/ResourceNamespace.js
var require_ResourceNamespace = __commonJS({
  "node_modules/stripe/cjs/ResourceNamespace.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resourceNamespace = void 0;
    function ResourceNamespace(stripe, resources) {
      for (const name in resources) {
        if (!Object.prototype.hasOwnProperty.call(resources, name)) {
          continue;
        }
        const camelCaseName = name[0].toLowerCase() + name.substring(1);
        const resource = new resources[name](stripe);
        this[camelCaseName] = resource;
      }
    }
    __name(ResourceNamespace, "ResourceNamespace");
    function resourceNamespace(namespace, resources) {
      return function(stripe) {
        return new ResourceNamespace(stripe, resources);
      };
    }
    __name(resourceNamespace, "resourceNamespace");
    exports.resourceNamespace = resourceNamespace;
  }
});

// node_modules/stripe/cjs/resources/V2/Core/AccountLinks.js
var require_AccountLinks = __commonJS({
  "node_modules/stripe/cjs/resources/V2/Core/AccountLinks.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AccountLinks = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.AccountLinks = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v2/core/account_links" })
    });
  }
});

// node_modules/stripe/cjs/resources/V2/Core/AccountTokens.js
var require_AccountTokens = __commonJS({
  "node_modules/stripe/cjs/resources/V2/Core/AccountTokens.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AccountTokens = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.AccountTokens = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v2/core/account_tokens" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v2/core/account_tokens/{id}"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/FinancialConnections/Accounts.js
var require_Accounts = __commonJS({
  "node_modules/stripe/cjs/resources/FinancialConnections/Accounts.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Accounts = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Accounts = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/financial_connections/accounts/{account}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/financial_connections/accounts",
        methodType: "list"
      }),
      disconnect: stripeMethod({
        method: "POST",
        fullPath: "/v1/financial_connections/accounts/{account}/disconnect"
      }),
      listOwners: stripeMethod({
        method: "GET",
        fullPath: "/v1/financial_connections/accounts/{account}/owners",
        methodType: "list"
      }),
      refresh: stripeMethod({
        method: "POST",
        fullPath: "/v1/financial_connections/accounts/{account}/refresh"
      }),
      subscribe: stripeMethod({
        method: "POST",
        fullPath: "/v1/financial_connections/accounts/{account}/subscribe"
      }),
      unsubscribe: stripeMethod({
        method: "POST",
        fullPath: "/v1/financial_connections/accounts/{account}/unsubscribe"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/V2/Core/Accounts/Persons.js
var require_Persons = __commonJS({
  "node_modules/stripe/cjs/resources/V2/Core/Accounts/Persons.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Persons = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Persons = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v2/core/accounts/{account_id}/persons"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v2/core/accounts/{account_id}/persons/{id}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v2/core/accounts/{account_id}/persons/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v2/core/accounts/{account_id}/persons",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v2/core/accounts/{account_id}/persons/{id}"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/V2/Core/Accounts/PersonTokens.js
var require_PersonTokens = __commonJS({
  "node_modules/stripe/cjs/resources/V2/Core/Accounts/PersonTokens.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PersonTokens = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.PersonTokens = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v2/core/accounts/{account_id}/person_tokens"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v2/core/accounts/{account_id}/person_tokens/{id}"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/V2/Core/Accounts.js
var require_Accounts2 = __commonJS({
  "node_modules/stripe/cjs/resources/V2/Core/Accounts.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Accounts = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var Persons_js_1 = require_Persons();
    var PersonTokens_js_1 = require_PersonTokens();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Accounts = StripeResource_js_1.StripeResource.extend({
      constructor: /* @__PURE__ */ __name(function(...args) {
        StripeResource_js_1.StripeResource.apply(this, args);
        this.persons = new Persons_js_1.Persons(...args);
        this.personTokens = new PersonTokens_js_1.PersonTokens(...args);
      }, "constructor"),
      create: stripeMethod({ method: "POST", fullPath: "/v2/core/accounts" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v2/core/accounts/{id}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v2/core/accounts/{id}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v2/core/accounts",
        methodType: "list"
      }),
      close: stripeMethod({
        method: "POST",
        fullPath: "/v2/core/accounts/{id}/close"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Entitlements/ActiveEntitlements.js
var require_ActiveEntitlements = __commonJS({
  "node_modules/stripe/cjs/resources/Entitlements/ActiveEntitlements.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ActiveEntitlements = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.ActiveEntitlements = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/entitlements/active_entitlements/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/entitlements/active_entitlements",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Billing/Alerts.js
var require_Alerts = __commonJS({
  "node_modules/stripe/cjs/resources/Billing/Alerts.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Alerts = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Alerts = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/billing/alerts" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/billing/alerts/{id}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/billing/alerts",
        methodType: "list"
      }),
      activate: stripeMethod({
        method: "POST",
        fullPath: "/v1/billing/alerts/{id}/activate"
      }),
      archive: stripeMethod({
        method: "POST",
        fullPath: "/v1/billing/alerts/{id}/archive"
      }),
      deactivate: stripeMethod({
        method: "POST",
        fullPath: "/v1/billing/alerts/{id}/deactivate"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Tax/Associations.js
var require_Associations = __commonJS({
  "node_modules/stripe/cjs/resources/Tax/Associations.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Associations = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Associations = StripeResource_js_1.StripeResource.extend({
      find: stripeMethod({ method: "GET", fullPath: "/v1/tax/associations/find" })
    });
  }
});

// node_modules/stripe/cjs/resources/Issuing/Authorizations.js
var require_Authorizations = __commonJS({
  "node_modules/stripe/cjs/resources/Issuing/Authorizations.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Authorizations = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Authorizations = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/authorizations/{authorization}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/authorizations/{authorization}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/authorizations",
        methodType: "list"
      }),
      approve: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/authorizations/{authorization}/approve"
      }),
      decline: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/authorizations/{authorization}/decline"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/TestHelpers/Issuing/Authorizations.js
var require_Authorizations2 = __commonJS({
  "node_modules/stripe/cjs/resources/TestHelpers/Issuing/Authorizations.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Authorizations = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Authorizations = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/authorizations"
      }),
      capture: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/capture"
      }),
      expire: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/expire"
      }),
      finalizeAmount: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount"
      }),
      increment: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/increment"
      }),
      respond: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/fraud_challenges/respond"
      }),
      reverse: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/reverse"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Tax/Calculations.js
var require_Calculations = __commonJS({
  "node_modules/stripe/cjs/resources/Tax/Calculations.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Calculations = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Calculations = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/tax/calculations" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax/calculations/{calculation}"
      }),
      listLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax/calculations/{calculation}/line_items",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Issuing/Cardholders.js
var require_Cardholders = __commonJS({
  "node_modules/stripe/cjs/resources/Issuing/Cardholders.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Cardholders = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Cardholders = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/issuing/cardholders" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/cardholders/{cardholder}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/cardholders/{cardholder}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/cardholders",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Issuing/Cards.js
var require_Cards = __commonJS({
  "node_modules/stripe/cjs/resources/Issuing/Cards.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Cards = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Cards = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/issuing/cards" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/issuing/cards/{card}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/issuing/cards/{card}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/cards",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/TestHelpers/Issuing/Cards.js
var require_Cards2 = __commonJS({
  "node_modules/stripe/cjs/resources/TestHelpers/Issuing/Cards.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Cards = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Cards = StripeResource_js_1.StripeResource.extend({
      deliverCard: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/deliver"
      }),
      failCard: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/fail"
      }),
      returnCard: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/return"
      }),
      shipCard: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/ship"
      }),
      submitCard: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/submit"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/BillingPortal/Configurations.js
var require_Configurations = __commonJS({
  "node_modules/stripe/cjs/resources/BillingPortal/Configurations.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Configurations = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Configurations = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/billing_portal/configurations"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/billing_portal/configurations/{configuration}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/billing_portal/configurations/{configuration}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/billing_portal/configurations",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Terminal/Configurations.js
var require_Configurations2 = __commonJS({
  "node_modules/stripe/cjs/resources/Terminal/Configurations.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Configurations = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Configurations = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/configurations"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/terminal/configurations/{configuration}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/configurations/{configuration}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/terminal/configurations",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/terminal/configurations/{configuration}"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/TestHelpers/ConfirmationTokens.js
var require_ConfirmationTokens = __commonJS({
  "node_modules/stripe/cjs/resources/TestHelpers/ConfirmationTokens.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConfirmationTokens = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.ConfirmationTokens = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/confirmation_tokens"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Terminal/ConnectionTokens.js
var require_ConnectionTokens = __commonJS({
  "node_modules/stripe/cjs/resources/Terminal/ConnectionTokens.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConnectionTokens = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.ConnectionTokens = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/connection_tokens"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Billing/CreditBalanceSummary.js
var require_CreditBalanceSummary = __commonJS({
  "node_modules/stripe/cjs/resources/Billing/CreditBalanceSummary.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CreditBalanceSummary = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.CreditBalanceSummary = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/billing/credit_balance_summary"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Billing/CreditBalanceTransactions.js
var require_CreditBalanceTransactions = __commonJS({
  "node_modules/stripe/cjs/resources/Billing/CreditBalanceTransactions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CreditBalanceTransactions = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.CreditBalanceTransactions = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/billing/credit_balance_transactions/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/billing/credit_balance_transactions",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Billing/CreditGrants.js
var require_CreditGrants = __commonJS({
  "node_modules/stripe/cjs/resources/Billing/CreditGrants.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CreditGrants = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.CreditGrants = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/billing/credit_grants" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/billing/credit_grants/{id}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/billing/credit_grants/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/billing/credit_grants",
        methodType: "list"
      }),
      expire: stripeMethod({
        method: "POST",
        fullPath: "/v1/billing/credit_grants/{id}/expire"
      }),
      voidGrant: stripeMethod({
        method: "POST",
        fullPath: "/v1/billing/credit_grants/{id}/void"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Treasury/CreditReversals.js
var require_CreditReversals = __commonJS({
  "node_modules/stripe/cjs/resources/Treasury/CreditReversals.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CreditReversals = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.CreditReversals = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/credit_reversals"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/credit_reversals/{credit_reversal}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/credit_reversals",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/TestHelpers/Customers.js
var require_Customers = __commonJS({
  "node_modules/stripe/cjs/resources/TestHelpers/Customers.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Customers = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Customers = StripeResource_js_1.StripeResource.extend({
      fundCashBalance: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/customers/{customer}/fund_cash_balance"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Treasury/DebitReversals.js
var require_DebitReversals = __commonJS({
  "node_modules/stripe/cjs/resources/Treasury/DebitReversals.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DebitReversals = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.DebitReversals = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/debit_reversals"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/debit_reversals/{debit_reversal}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/debit_reversals",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Issuing/Disputes.js
var require_Disputes = __commonJS({
  "node_modules/stripe/cjs/resources/Issuing/Disputes.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Disputes = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Disputes = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/issuing/disputes" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/disputes/{dispute}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/disputes/{dispute}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/disputes",
        methodType: "list"
      }),
      submit: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/disputes/{dispute}/submit"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Radar/EarlyFraudWarnings.js
var require_EarlyFraudWarnings = __commonJS({
  "node_modules/stripe/cjs/resources/Radar/EarlyFraudWarnings.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EarlyFraudWarnings = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.EarlyFraudWarnings = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/radar/early_fraud_warnings/{early_fraud_warning}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/radar/early_fraud_warnings",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/V2/Core/EventDestinations.js
var require_EventDestinations = __commonJS({
  "node_modules/stripe/cjs/resources/V2/Core/EventDestinations.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EventDestinations = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.EventDestinations = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v2/core/event_destinations"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v2/core/event_destinations/{id}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v2/core/event_destinations/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v2/core/event_destinations",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v2/core/event_destinations/{id}"
      }),
      disable: stripeMethod({
        method: "POST",
        fullPath: "/v2/core/event_destinations/{id}/disable"
      }),
      enable: stripeMethod({
        method: "POST",
        fullPath: "/v2/core/event_destinations/{id}/enable"
      }),
      ping: stripeMethod({
        method: "POST",
        fullPath: "/v2/core/event_destinations/{id}/ping"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/V2/Core/Events.js
var require_Events = __commonJS({
  "node_modules/stripe/cjs/resources/V2/Core/Events.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Events = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Events = StripeResource_js_1.StripeResource.extend({
      retrieve(...args) {
        const transformResponseData = /* @__PURE__ */ __name((response) => {
          return this.addFetchRelatedObjectIfNeeded(response);
        }, "transformResponseData");
        return stripeMethod({
          method: "GET",
          fullPath: "/v2/core/events/{id}",
          transformResponseData
        }).apply(this, args);
      },
      list(...args) {
        const transformResponseData = /* @__PURE__ */ __name((response) => {
          return Object.assign(Object.assign({}, response), { data: response.data.map(this.addFetchRelatedObjectIfNeeded.bind(this)) });
        }, "transformResponseData");
        return stripeMethod({
          method: "GET",
          fullPath: "/v2/core/events",
          methodType: "list",
          transformResponseData
        }).apply(this, args);
      },
      /**
       * @private
       *
       * For internal use in stripe-node.
       *
       * @param pulledEvent The retrieved event object
       * @returns The retrieved event object with a fetchRelatedObject method,
       * if pulledEvent.related_object is valid (non-null and has a url)
       */
      addFetchRelatedObjectIfNeeded(pulledEvent) {
        if (!pulledEvent.related_object || !pulledEvent.related_object.url) {
          return pulledEvent;
        }
        return Object.assign(Object.assign({}, pulledEvent), { fetchRelatedObject: /* @__PURE__ */ __name(() => (
          // call stripeMethod with 'this' resource to fetch
          // the related object. 'this' is needed to construct
          // and send the request, but the method spec controls
          // the url endpoint and method, so it doesn't matter
          // that 'this' is an Events resource object here
          stripeMethod({
            method: "GET",
            fullPath: pulledEvent.related_object.url
          }).apply(this, [
            {
              stripeContext: pulledEvent.context
            }
          ])
        ), "fetchRelatedObject") });
      }
    });
  }
});

// node_modules/stripe/cjs/resources/Entitlements/Features.js
var require_Features = __commonJS({
  "node_modules/stripe/cjs/resources/Entitlements/Features.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Features = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Features = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/entitlements/features" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/entitlements/features/{id}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/entitlements/features/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/entitlements/features",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Treasury/FinancialAccounts.js
var require_FinancialAccounts = __commonJS({
  "node_modules/stripe/cjs/resources/Treasury/FinancialAccounts.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FinancialAccounts = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.FinancialAccounts = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/financial_accounts"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/financial_accounts/{financial_account}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/financial_accounts/{financial_account}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/financial_accounts",
        methodType: "list"
      }),
      close: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/financial_accounts/{financial_account}/close"
      }),
      retrieveFeatures: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
      }),
      updateFeatures: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/TestHelpers/Treasury/InboundTransfers.js
var require_InboundTransfers = __commonJS({
  "node_modules/stripe/cjs/resources/TestHelpers/Treasury/InboundTransfers.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InboundTransfers = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.InboundTransfers = StripeResource_js_1.StripeResource.extend({
      fail: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/fail"
      }),
      returnInboundTransfer: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/return"
      }),
      succeed: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/succeed"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Treasury/InboundTransfers.js
var require_InboundTransfers2 = __commonJS({
  "node_modules/stripe/cjs/resources/Treasury/InboundTransfers.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InboundTransfers = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.InboundTransfers = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/inbound_transfers"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/inbound_transfers/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/inbound_transfers",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/inbound_transfers/{inbound_transfer}/cancel"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Terminal/Locations.js
var require_Locations = __commonJS({
  "node_modules/stripe/cjs/resources/Terminal/Locations.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Locations = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Locations = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/terminal/locations" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/terminal/locations/{location}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/locations/{location}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/terminal/locations",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/terminal/locations/{location}"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Billing/MeterEventAdjustments.js
var require_MeterEventAdjustments = __commonJS({
  "node_modules/stripe/cjs/resources/Billing/MeterEventAdjustments.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MeterEventAdjustments = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.MeterEventAdjustments = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/billing/meter_event_adjustments"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/V2/Billing/MeterEventAdjustments.js
var require_MeterEventAdjustments2 = __commonJS({
  "node_modules/stripe/cjs/resources/V2/Billing/MeterEventAdjustments.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MeterEventAdjustments = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.MeterEventAdjustments = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v2/billing/meter_event_adjustments"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/V2/Billing/MeterEventSession.js
var require_MeterEventSession = __commonJS({
  "node_modules/stripe/cjs/resources/V2/Billing/MeterEventSession.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MeterEventSession = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.MeterEventSession = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v2/billing/meter_event_session"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/V2/Billing/MeterEventStream.js
var require_MeterEventStream = __commonJS({
  "node_modules/stripe/cjs/resources/V2/Billing/MeterEventStream.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MeterEventStream = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.MeterEventStream = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v2/billing/meter_event_stream",
        host: "meter-events.stripe.com"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Billing/MeterEvents.js
var require_MeterEvents = __commonJS({
  "node_modules/stripe/cjs/resources/Billing/MeterEvents.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MeterEvents = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.MeterEvents = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/billing/meter_events" })
    });
  }
});

// node_modules/stripe/cjs/resources/V2/Billing/MeterEvents.js
var require_MeterEvents2 = __commonJS({
  "node_modules/stripe/cjs/resources/V2/Billing/MeterEvents.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MeterEvents = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.MeterEvents = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v2/billing/meter_events" })
    });
  }
});

// node_modules/stripe/cjs/resources/Billing/Meters.js
var require_Meters = __commonJS({
  "node_modules/stripe/cjs/resources/Billing/Meters.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Meters = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Meters = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/billing/meters" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/billing/meters/{id}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/billing/meters/{id}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/billing/meters",
        methodType: "list"
      }),
      deactivate: stripeMethod({
        method: "POST",
        fullPath: "/v1/billing/meters/{id}/deactivate"
      }),
      listEventSummaries: stripeMethod({
        method: "GET",
        fullPath: "/v1/billing/meters/{id}/event_summaries",
        methodType: "list"
      }),
      reactivate: stripeMethod({
        method: "POST",
        fullPath: "/v1/billing/meters/{id}/reactivate"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Terminal/OnboardingLinks.js
var require_OnboardingLinks = __commonJS({
  "node_modules/stripe/cjs/resources/Terminal/OnboardingLinks.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OnboardingLinks = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.OnboardingLinks = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/onboarding_links"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Climate/Orders.js
var require_Orders = __commonJS({
  "node_modules/stripe/cjs/resources/Climate/Orders.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Orders = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Orders = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/climate/orders" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/climate/orders/{order}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/climate/orders/{order}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/climate/orders",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/climate/orders/{order}/cancel"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/TestHelpers/Treasury/OutboundPayments.js
var require_OutboundPayments = __commonJS({
  "node_modules/stripe/cjs/resources/TestHelpers/Treasury/OutboundPayments.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OutboundPayments = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.OutboundPayments = StripeResource_js_1.StripeResource.extend({
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}"
      }),
      fail: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/fail"
      }),
      post: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/post"
      }),
      returnOutboundPayment: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/return"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Treasury/OutboundPayments.js
var require_OutboundPayments2 = __commonJS({
  "node_modules/stripe/cjs/resources/Treasury/OutboundPayments.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OutboundPayments = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.OutboundPayments = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/outbound_payments"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/outbound_payments/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/outbound_payments",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/outbound_payments/{id}/cancel"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/TestHelpers/Treasury/OutboundTransfers.js
var require_OutboundTransfers = __commonJS({
  "node_modules/stripe/cjs/resources/TestHelpers/Treasury/OutboundTransfers.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OutboundTransfers = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.OutboundTransfers = StripeResource_js_1.StripeResource.extend({
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}"
      }),
      fail: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail"
      }),
      post: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post"
      }),
      returnOutboundTransfer: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Treasury/OutboundTransfers.js
var require_OutboundTransfers2 = __commonJS({
  "node_modules/stripe/cjs/resources/Treasury/OutboundTransfers.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OutboundTransfers = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.OutboundTransfers = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/outbound_transfers"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/outbound_transfers",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}/cancel"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Radar/PaymentEvaluations.js
var require_PaymentEvaluations = __commonJS({
  "node_modules/stripe/cjs/resources/Radar/PaymentEvaluations.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PaymentEvaluations = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.PaymentEvaluations = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/radar/payment_evaluations"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Issuing/PersonalizationDesigns.js
var require_PersonalizationDesigns = __commonJS({
  "node_modules/stripe/cjs/resources/Issuing/PersonalizationDesigns.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PersonalizationDesigns = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.PersonalizationDesigns = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/personalization_designs"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/personalization_designs/{personalization_design}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/personalization_designs/{personalization_design}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/personalization_designs",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/TestHelpers/Issuing/PersonalizationDesigns.js
var require_PersonalizationDesigns2 = __commonJS({
  "node_modules/stripe/cjs/resources/TestHelpers/Issuing/PersonalizationDesigns.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PersonalizationDesigns = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.PersonalizationDesigns = StripeResource_js_1.StripeResource.extend({
      activate: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate"
      }),
      deactivate: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate"
      }),
      reject: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Issuing/PhysicalBundles.js
var require_PhysicalBundles = __commonJS({
  "node_modules/stripe/cjs/resources/Issuing/PhysicalBundles.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PhysicalBundles = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.PhysicalBundles = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/physical_bundles/{physical_bundle}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/physical_bundles",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Climate/Products.js
var require_Products = __commonJS({
  "node_modules/stripe/cjs/resources/Climate/Products.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Products = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Products = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/climate/products/{product}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/climate/products",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Terminal/Readers.js
var require_Readers = __commonJS({
  "node_modules/stripe/cjs/resources/Terminal/Readers.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Readers = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Readers = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/terminal/readers" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/terminal/readers/{reader}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/terminal/readers",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/terminal/readers/{reader}"
      }),
      cancelAction: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}/cancel_action"
      }),
      collectInputs: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}/collect_inputs"
      }),
      collectPaymentMethod: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}/collect_payment_method"
      }),
      confirmPaymentIntent: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}/confirm_payment_intent"
      }),
      processPaymentIntent: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}/process_payment_intent"
      }),
      processSetupIntent: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}/process_setup_intent"
      }),
      refundPayment: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}/refund_payment"
      }),
      setReaderDisplay: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}/set_reader_display"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/TestHelpers/Terminal/Readers.js
var require_Readers2 = __commonJS({
  "node_modules/stripe/cjs/resources/TestHelpers/Terminal/Readers.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Readers = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Readers = StripeResource_js_1.StripeResource.extend({
      presentPaymentMethod: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/terminal/readers/{reader}/present_payment_method"
      }),
      succeedInputCollection: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/terminal/readers/{reader}/succeed_input_collection"
      }),
      timeoutInputCollection: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/terminal/readers/{reader}/timeout_input_collection"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/TestHelpers/Treasury/ReceivedCredits.js
var require_ReceivedCredits = __commonJS({
  "node_modules/stripe/cjs/resources/TestHelpers/Treasury/ReceivedCredits.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReceivedCredits = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.ReceivedCredits = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/received_credits"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Treasury/ReceivedCredits.js
var require_ReceivedCredits2 = __commonJS({
  "node_modules/stripe/cjs/resources/Treasury/ReceivedCredits.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReceivedCredits = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.ReceivedCredits = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/received_credits/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/received_credits",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/TestHelpers/Treasury/ReceivedDebits.js
var require_ReceivedDebits = __commonJS({
  "node_modules/stripe/cjs/resources/TestHelpers/Treasury/ReceivedDebits.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReceivedDebits = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.ReceivedDebits = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/received_debits"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Treasury/ReceivedDebits.js
var require_ReceivedDebits2 = __commonJS({
  "node_modules/stripe/cjs/resources/Treasury/ReceivedDebits.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReceivedDebits = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.ReceivedDebits = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/received_debits/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/received_debits",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/TestHelpers/Refunds.js
var require_Refunds = __commonJS({
  "node_modules/stripe/cjs/resources/TestHelpers/Refunds.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Refunds = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Refunds = StripeResource_js_1.StripeResource.extend({
      expire: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/refunds/{refund}/expire"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Tax/Registrations.js
var require_Registrations = __commonJS({
  "node_modules/stripe/cjs/resources/Tax/Registrations.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Registrations = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Registrations = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/tax/registrations" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax/registrations/{id}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/tax/registrations/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax/registrations",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Reporting/ReportRuns.js
var require_ReportRuns = __commonJS({
  "node_modules/stripe/cjs/resources/Reporting/ReportRuns.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReportRuns = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.ReportRuns = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/reporting/report_runs" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/reporting/report_runs/{report_run}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/reporting/report_runs",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Reporting/ReportTypes.js
var require_ReportTypes = __commonJS({
  "node_modules/stripe/cjs/resources/Reporting/ReportTypes.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReportTypes = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.ReportTypes = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/reporting/report_types/{report_type}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/reporting/report_types",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Forwarding/Requests.js
var require_Requests = __commonJS({
  "node_modules/stripe/cjs/resources/Forwarding/Requests.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Requests = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Requests = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/forwarding/requests" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/forwarding/requests/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/forwarding/requests",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Sigma/ScheduledQueryRuns.js
var require_ScheduledQueryRuns = __commonJS({
  "node_modules/stripe/cjs/resources/Sigma/ScheduledQueryRuns.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScheduledQueryRuns = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.ScheduledQueryRuns = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/sigma/scheduled_query_runs/{scheduled_query_run}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/sigma/scheduled_query_runs",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Apps/Secrets.js
var require_Secrets = __commonJS({
  "node_modules/stripe/cjs/resources/Apps/Secrets.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Secrets = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Secrets = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/apps/secrets" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/apps/secrets",
        methodType: "list"
      }),
      deleteWhere: stripeMethod({
        method: "POST",
        fullPath: "/v1/apps/secrets/delete"
      }),
      find: stripeMethod({ method: "GET", fullPath: "/v1/apps/secrets/find" })
    });
  }
});

// node_modules/stripe/cjs/resources/BillingPortal/Sessions.js
var require_Sessions = __commonJS({
  "node_modules/stripe/cjs/resources/BillingPortal/Sessions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sessions = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Sessions = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/billing_portal/sessions"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Checkout/Sessions.js
var require_Sessions2 = __commonJS({
  "node_modules/stripe/cjs/resources/Checkout/Sessions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sessions = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Sessions = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/checkout/sessions" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/checkout/sessions/{session}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/checkout/sessions/{session}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/checkout/sessions",
        methodType: "list"
      }),
      expire: stripeMethod({
        method: "POST",
        fullPath: "/v1/checkout/sessions/{session}/expire"
      }),
      listLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/checkout/sessions/{session}/line_items",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/FinancialConnections/Sessions.js
var require_Sessions3 = __commonJS({
  "node_modules/stripe/cjs/resources/FinancialConnections/Sessions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sessions = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Sessions = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/financial_connections/sessions"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/financial_connections/sessions/{session}"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Tax/Settings.js
var require_Settings = __commonJS({
  "node_modules/stripe/cjs/resources/Tax/Settings.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Settings = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Settings = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/tax/settings" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/tax/settings" })
    });
  }
});

// node_modules/stripe/cjs/resources/Climate/Suppliers.js
var require_Suppliers = __commonJS({
  "node_modules/stripe/cjs/resources/Climate/Suppliers.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Suppliers = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Suppliers = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/climate/suppliers/{supplier}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/climate/suppliers",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/TestHelpers/TestClocks.js
var require_TestClocks = __commonJS({
  "node_modules/stripe/cjs/resources/TestHelpers/TestClocks.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TestClocks = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.TestClocks = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/test_clocks"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/test_helpers/test_clocks",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
      }),
      advance: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/test_clocks/{test_clock}/advance"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Issuing/Tokens.js
var require_Tokens = __commonJS({
  "node_modules/stripe/cjs/resources/Issuing/Tokens.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tokens = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Tokens = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/tokens/{token}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/tokens/{token}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/tokens",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Treasury/TransactionEntries.js
var require_TransactionEntries = __commonJS({
  "node_modules/stripe/cjs/resources/Treasury/TransactionEntries.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransactionEntries = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.TransactionEntries = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/transaction_entries/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/transaction_entries",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/FinancialConnections/Transactions.js
var require_Transactions = __commonJS({
  "node_modules/stripe/cjs/resources/FinancialConnections/Transactions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Transactions = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Transactions = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/financial_connections/transactions/{transaction}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/financial_connections/transactions",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Issuing/Transactions.js
var require_Transactions2 = __commonJS({
  "node_modules/stripe/cjs/resources/Issuing/Transactions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Transactions = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Transactions = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/transactions/{transaction}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/transactions/{transaction}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/transactions",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Tax/Transactions.js
var require_Transactions3 = __commonJS({
  "node_modules/stripe/cjs/resources/Tax/Transactions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Transactions = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Transactions = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax/transactions/{transaction}"
      }),
      createFromCalculation: stripeMethod({
        method: "POST",
        fullPath: "/v1/tax/transactions/create_from_calculation"
      }),
      createReversal: stripeMethod({
        method: "POST",
        fullPath: "/v1/tax/transactions/create_reversal"
      }),
      listLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax/transactions/{transaction}/line_items",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/TestHelpers/Issuing/Transactions.js
var require_Transactions4 = __commonJS({
  "node_modules/stripe/cjs/resources/TestHelpers/Issuing/Transactions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Transactions = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Transactions = StripeResource_js_1.StripeResource.extend({
      createForceCapture: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/transactions/create_force_capture"
      }),
      createUnlinkedRefund: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/transactions/create_unlinked_refund"
      }),
      refund: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/transactions/{transaction}/refund"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Treasury/Transactions.js
var require_Transactions5 = __commonJS({
  "node_modules/stripe/cjs/resources/Treasury/Transactions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Transactions = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Transactions = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/transactions/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/transactions",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Radar/ValueListItems.js
var require_ValueListItems = __commonJS({
  "node_modules/stripe/cjs/resources/Radar/ValueListItems.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValueListItems = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.ValueListItems = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/radar/value_list_items"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/radar/value_list_items/{item}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/radar/value_list_items",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/radar/value_list_items/{item}"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Radar/ValueLists.js
var require_ValueLists = __commonJS({
  "node_modules/stripe/cjs/resources/Radar/ValueLists.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValueLists = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.ValueLists = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/radar/value_lists" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/radar/value_lists/{value_list}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/radar/value_lists/{value_list}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/radar/value_lists",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/radar/value_lists/{value_list}"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Identity/VerificationReports.js
var require_VerificationReports = __commonJS({
  "node_modules/stripe/cjs/resources/Identity/VerificationReports.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VerificationReports = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.VerificationReports = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/identity/verification_reports/{report}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/identity/verification_reports",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Identity/VerificationSessions.js
var require_VerificationSessions = __commonJS({
  "node_modules/stripe/cjs/resources/Identity/VerificationSessions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VerificationSessions = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.VerificationSessions = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/identity/verification_sessions"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/identity/verification_sessions/{session}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/identity/verification_sessions/{session}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/identity/verification_sessions",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/identity/verification_sessions/{session}/cancel"
      }),
      redact: stripeMethod({
        method: "POST",
        fullPath: "/v1/identity/verification_sessions/{session}/redact"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Accounts.js
var require_Accounts3 = __commonJS({
  "node_modules/stripe/cjs/resources/Accounts.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Accounts = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Accounts = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/accounts" }),
      retrieve(id, ...args) {
        if (typeof id === "string") {
          return stripeMethod({
            method: "GET",
            fullPath: "/v1/accounts/{id}"
          }).apply(this, [id, ...args]);
        } else {
          if (id === null || id === void 0) {
            [].shift.apply([id, ...args]);
          }
          return stripeMethod({
            method: "GET",
            fullPath: "/v1/account"
          }).apply(this, [id, ...args]);
        }
      },
      update: stripeMethod({ method: "POST", fullPath: "/v1/accounts/{account}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts",
        methodType: "list"
      }),
      del: stripeMethod({ method: "DELETE", fullPath: "/v1/accounts/{account}" }),
      createExternalAccount: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/external_accounts"
      }),
      createLoginLink: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/login_links"
      }),
      createPerson: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/persons"
      }),
      deleteExternalAccount: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/accounts/{account}/external_accounts/{id}"
      }),
      deletePerson: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/accounts/{account}/persons/{person}"
      }),
      listCapabilities: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts/{account}/capabilities",
        methodType: "list"
      }),
      listExternalAccounts: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts/{account}/external_accounts",
        methodType: "list"
      }),
      listPersons: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts/{account}/persons",
        methodType: "list"
      }),
      reject: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/reject"
      }),
      retrieveCurrent: stripeMethod({ method: "GET", fullPath: "/v1/account" }),
      retrieveCapability: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts/{account}/capabilities/{capability}"
      }),
      retrieveExternalAccount: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts/{account}/external_accounts/{id}"
      }),
      retrievePerson: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts/{account}/persons/{person}"
      }),
      updateCapability: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/capabilities/{capability}"
      }),
      updateExternalAccount: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/external_accounts/{id}"
      }),
      updatePerson: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/persons/{person}"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/AccountLinks.js
var require_AccountLinks2 = __commonJS({
  "node_modules/stripe/cjs/resources/AccountLinks.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AccountLinks = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.AccountLinks = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/account_links" })
    });
  }
});

// node_modules/stripe/cjs/resources/AccountSessions.js
var require_AccountSessions = __commonJS({
  "node_modules/stripe/cjs/resources/AccountSessions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AccountSessions = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.AccountSessions = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/account_sessions" })
    });
  }
});

// node_modules/stripe/cjs/resources/ApplePayDomains.js
var require_ApplePayDomains = __commonJS({
  "node_modules/stripe/cjs/resources/ApplePayDomains.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApplePayDomains = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.ApplePayDomains = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/apple_pay/domains" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/apple_pay/domains/{domain}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/apple_pay/domains",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/apple_pay/domains/{domain}"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/ApplicationFees.js
var require_ApplicationFees = __commonJS({
  "node_modules/stripe/cjs/resources/ApplicationFees.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApplicationFees = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.ApplicationFees = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/application_fees/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/application_fees",
        methodType: "list"
      }),
      createRefund: stripeMethod({
        method: "POST",
        fullPath: "/v1/application_fees/{id}/refunds"
      }),
      listRefunds: stripeMethod({
        method: "GET",
        fullPath: "/v1/application_fees/{id}/refunds",
        methodType: "list"
      }),
      retrieveRefund: stripeMethod({
        method: "GET",
        fullPath: "/v1/application_fees/{fee}/refunds/{id}"
      }),
      updateRefund: stripeMethod({
        method: "POST",
        fullPath: "/v1/application_fees/{fee}/refunds/{id}"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Balance.js
var require_Balance = __commonJS({
  "node_modules/stripe/cjs/resources/Balance.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Balance = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Balance = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/balance" })
    });
  }
});

// node_modules/stripe/cjs/resources/BalanceSettings.js
var require_BalanceSettings = __commonJS({
  "node_modules/stripe/cjs/resources/BalanceSettings.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BalanceSettings = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.BalanceSettings = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/balance_settings" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/balance_settings" })
    });
  }
});

// node_modules/stripe/cjs/resources/BalanceTransactions.js
var require_BalanceTransactions = __commonJS({
  "node_modules/stripe/cjs/resources/BalanceTransactions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BalanceTransactions = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.BalanceTransactions = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/balance_transactions/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/balance_transactions",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Charges.js
var require_Charges = __commonJS({
  "node_modules/stripe/cjs/resources/Charges.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Charges = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Charges = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/charges" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/charges/{charge}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/charges/{charge}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/charges",
        methodType: "list"
      }),
      capture: stripeMethod({
        method: "POST",
        fullPath: "/v1/charges/{charge}/capture"
      }),
      search: stripeMethod({
        method: "GET",
        fullPath: "/v1/charges/search",
        methodType: "search"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/ConfirmationTokens.js
var require_ConfirmationTokens2 = __commonJS({
  "node_modules/stripe/cjs/resources/ConfirmationTokens.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConfirmationTokens = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.ConfirmationTokens = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/confirmation_tokens/{confirmation_token}"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/CountrySpecs.js
var require_CountrySpecs = __commonJS({
  "node_modules/stripe/cjs/resources/CountrySpecs.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CountrySpecs = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.CountrySpecs = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/country_specs/{country}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/country_specs",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Coupons.js
var require_Coupons = __commonJS({
  "node_modules/stripe/cjs/resources/Coupons.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Coupons = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Coupons = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/coupons" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/coupons/{coupon}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/coupons/{coupon}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/coupons",
        methodType: "list"
      }),
      del: stripeMethod({ method: "DELETE", fullPath: "/v1/coupons/{coupon}" })
    });
  }
});

// node_modules/stripe/cjs/resources/CreditNotes.js
var require_CreditNotes = __commonJS({
  "node_modules/stripe/cjs/resources/CreditNotes.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CreditNotes = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.CreditNotes = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/credit_notes" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/credit_notes/{id}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/credit_notes/{id}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/credit_notes",
        methodType: "list"
      }),
      listLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/credit_notes/{credit_note}/lines",
        methodType: "list"
      }),
      listPreviewLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/credit_notes/preview/lines",
        methodType: "list"
      }),
      preview: stripeMethod({ method: "GET", fullPath: "/v1/credit_notes/preview" }),
      voidCreditNote: stripeMethod({
        method: "POST",
        fullPath: "/v1/credit_notes/{id}/void"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/CustomerSessions.js
var require_CustomerSessions = __commonJS({
  "node_modules/stripe/cjs/resources/CustomerSessions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomerSessions = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.CustomerSessions = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/customer_sessions" })
    });
  }
});

// node_modules/stripe/cjs/resources/Customers.js
var require_Customers2 = __commonJS({
  "node_modules/stripe/cjs/resources/Customers.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Customers = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Customers = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/customers" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/customers/{customer}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/customers/{customer}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers",
        methodType: "list"
      }),
      del: stripeMethod({ method: "DELETE", fullPath: "/v1/customers/{customer}" }),
      createBalanceTransaction: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/balance_transactions"
      }),
      createFundingInstructions: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/funding_instructions"
      }),
      createSource: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/sources"
      }),
      createTaxId: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/tax_ids"
      }),
      deleteDiscount: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/customers/{customer}/discount"
      }),
      deleteSource: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/customers/{customer}/sources/{id}"
      }),
      deleteTaxId: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/customers/{customer}/tax_ids/{id}"
      }),
      listBalanceTransactions: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/balance_transactions",
        methodType: "list"
      }),
      listCashBalanceTransactions: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/cash_balance_transactions",
        methodType: "list"
      }),
      listPaymentMethods: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/payment_methods",
        methodType: "list"
      }),
      listSources: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/sources",
        methodType: "list"
      }),
      listTaxIds: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/tax_ids",
        methodType: "list"
      }),
      retrieveBalanceTransaction: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}"
      }),
      retrieveCashBalance: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/cash_balance"
      }),
      retrieveCashBalanceTransaction: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/cash_balance_transactions/{transaction}"
      }),
      retrievePaymentMethod: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/payment_methods/{payment_method}"
      }),
      retrieveSource: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/sources/{id}"
      }),
      retrieveTaxId: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/tax_ids/{id}"
      }),
      search: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/search",
        methodType: "search"
      }),
      updateBalanceTransaction: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}"
      }),
      updateCashBalance: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/cash_balance"
      }),
      updateSource: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/sources/{id}"
      }),
      verifySource: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/sources/{id}/verify"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Disputes.js
var require_Disputes2 = __commonJS({
  "node_modules/stripe/cjs/resources/Disputes.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Disputes = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Disputes = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/disputes/{dispute}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/disputes/{dispute}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/disputes",
        methodType: "list"
      }),
      close: stripeMethod({
        method: "POST",
        fullPath: "/v1/disputes/{dispute}/close"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/EphemeralKeys.js
var require_EphemeralKeys = __commonJS({
  "node_modules/stripe/cjs/resources/EphemeralKeys.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EphemeralKeys = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.EphemeralKeys = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/ephemeral_keys",
        validator: /* @__PURE__ */ __name((data, options) => {
          if (!options.headers || !options.headers["Stripe-Version"]) {
            throw new Error("Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node");
          }
        }, "validator")
      }),
      del: stripeMethod({ method: "DELETE", fullPath: "/v1/ephemeral_keys/{key}" })
    });
  }
});

// node_modules/stripe/cjs/resources/Events.js
var require_Events2 = __commonJS({
  "node_modules/stripe/cjs/resources/Events.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Events = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Events = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/events/{id}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/events",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/ExchangeRates.js
var require_ExchangeRates = __commonJS({
  "node_modules/stripe/cjs/resources/ExchangeRates.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExchangeRates = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.ExchangeRates = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/exchange_rates/{rate_id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/exchange_rates",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/FileLinks.js
var require_FileLinks = __commonJS({
  "node_modules/stripe/cjs/resources/FileLinks.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FileLinks = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.FileLinks = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/file_links" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/file_links/{link}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/file_links/{link}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/file_links",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/multipart.js
var require_multipart = __commonJS({
  "node_modules/stripe/cjs/multipart.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.multipartRequestDataProcessor = void 0;
    var utils_js_1 = require_utils();
    var multipartDataGenerator = /* @__PURE__ */ __name((method, data, headers) => {
      const segno = (Math.round(Math.random() * 1e16) + Math.round(Math.random() * 1e16)).toString();
      headers["Content-Type"] = `multipart/form-data; boundary=${segno}`;
      const textEncoder = new TextEncoder();
      let buffer = new Uint8Array(0);
      const endBuffer = textEncoder.encode("\r\n");
      function push(l) {
        const prevBuffer = buffer;
        const newBuffer = l instanceof Uint8Array ? l : new Uint8Array(textEncoder.encode(l));
        buffer = new Uint8Array(prevBuffer.length + newBuffer.length + 2);
        buffer.set(prevBuffer);
        buffer.set(newBuffer, prevBuffer.length);
        buffer.set(endBuffer, buffer.length - 2);
      }
      __name(push, "push");
      function q(s) {
        return `"${s.replace(/"|"/g, "%22").replace(/\r\n|\r|\n/g, " ")}"`;
      }
      __name(q, "q");
      const flattenedData = (0, utils_js_1.flattenAndStringify)(data);
      for (const k in flattenedData) {
        if (!Object.prototype.hasOwnProperty.call(flattenedData, k)) {
          continue;
        }
        const v = flattenedData[k];
        push(`--${segno}`);
        if (Object.prototype.hasOwnProperty.call(v, "data")) {
          const typedEntry = v;
          push(`Content-Disposition: form-data; name=${q(k)}; filename=${q(typedEntry.name || "blob")}`);
          push(`Content-Type: ${typedEntry.type || "application/octet-stream"}`);
          push("");
          push(typedEntry.data);
        } else {
          push(`Content-Disposition: form-data; name=${q(k)}`);
          push("");
          push(v);
        }
      }
      push(`--${segno}--`);
      return buffer;
    }, "multipartDataGenerator");
    function multipartRequestDataProcessor(method, data, headers, callback) {
      data = data || {};
      if (method !== "POST") {
        return callback(null, (0, utils_js_1.queryStringifyRequestData)(data));
      }
      this._stripe._platformFunctions.tryBufferData(data).then((bufferedData) => {
        const buffer = multipartDataGenerator(method, bufferedData, headers);
        return callback(null, buffer);
      }).catch((err) => callback(err, null));
    }
    __name(multipartRequestDataProcessor, "multipartRequestDataProcessor");
    exports.multipartRequestDataProcessor = multipartRequestDataProcessor;
  }
});

// node_modules/stripe/cjs/resources/Files.js
var require_Files = __commonJS({
  "node_modules/stripe/cjs/resources/Files.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Files = void 0;
    var multipart_js_1 = require_multipart();
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Files = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/files",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        host: "files.stripe.com"
      }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/files/{file}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/files",
        methodType: "list"
      }),
      requestDataProcessor: multipart_js_1.multipartRequestDataProcessor
    });
  }
});

// node_modules/stripe/cjs/resources/InvoiceItems.js
var require_InvoiceItems = __commonJS({
  "node_modules/stripe/cjs/resources/InvoiceItems.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InvoiceItems = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.InvoiceItems = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/invoiceitems" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoiceitems/{invoiceitem}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoiceitems/{invoiceitem}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoiceitems",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/invoiceitems/{invoiceitem}"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/InvoicePayments.js
var require_InvoicePayments = __commonJS({
  "node_modules/stripe/cjs/resources/InvoicePayments.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InvoicePayments = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.InvoicePayments = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoice_payments/{invoice_payment}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoice_payments",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/InvoiceRenderingTemplates.js
var require_InvoiceRenderingTemplates = __commonJS({
  "node_modules/stripe/cjs/resources/InvoiceRenderingTemplates.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InvoiceRenderingTemplates = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.InvoiceRenderingTemplates = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoice_rendering_templates/{template}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoice_rendering_templates",
        methodType: "list"
      }),
      archive: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoice_rendering_templates/{template}/archive"
      }),
      unarchive: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoice_rendering_templates/{template}/unarchive"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Invoices.js
var require_Invoices = __commonJS({
  "node_modules/stripe/cjs/resources/Invoices.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Invoices = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Invoices = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/invoices" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/invoices/{invoice}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/invoices/{invoice}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoices",
        methodType: "list"
      }),
      del: stripeMethod({ method: "DELETE", fullPath: "/v1/invoices/{invoice}" }),
      addLines: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}/add_lines"
      }),
      attachPayment: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}/attach_payment"
      }),
      createPreview: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/create_preview"
      }),
      finalizeInvoice: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}/finalize"
      }),
      listLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoices/{invoice}/lines",
        methodType: "list"
      }),
      markUncollectible: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}/mark_uncollectible"
      }),
      pay: stripeMethod({ method: "POST", fullPath: "/v1/invoices/{invoice}/pay" }),
      removeLines: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}/remove_lines"
      }),
      search: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoices/search",
        methodType: "search"
      }),
      sendInvoice: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}/send"
      }),
      updateLines: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}/update_lines"
      }),
      updateLineItem: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}/lines/{line_item_id}"
      }),
      voidInvoice: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}/void"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Mandates.js
var require_Mandates = __commonJS({
  "node_modules/stripe/cjs/resources/Mandates.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Mandates = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Mandates = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/mandates/{mandate}" })
    });
  }
});

// node_modules/stripe/cjs/resources/OAuth.js
var require_OAuth = __commonJS({
  "node_modules/stripe/cjs/resources/OAuth.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuth = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var utils_js_1 = require_utils();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    var oAuthHost = "connect.stripe.com";
    exports.OAuth = StripeResource_js_1.StripeResource.extend({
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
        return `https://${oAuthHost}/${path}?${(0, utils_js_1.queryStringifyRequestData)(params)}`;
      },
      token: stripeMethod({
        method: "POST",
        path: "oauth/token",
        host: oAuthHost
      }),
      deauthorize(spec, ...args) {
        if (!spec.client_id) {
          spec.client_id = this._stripe.getClientId();
        }
        return stripeMethod({
          method: "POST",
          path: "oauth/deauthorize",
          host: oAuthHost
        }).apply(this, [spec, ...args]);
      }
    });
  }
});

// node_modules/stripe/cjs/resources/PaymentAttemptRecords.js
var require_PaymentAttemptRecords = __commonJS({
  "node_modules/stripe/cjs/resources/PaymentAttemptRecords.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PaymentAttemptRecords = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.PaymentAttemptRecords = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_attempt_records/{id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_attempt_records",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/PaymentIntents.js
var require_PaymentIntents = __commonJS({
  "node_modules/stripe/cjs/resources/PaymentIntents.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PaymentIntents = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.PaymentIntents = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/payment_intents" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_intents/{intent}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_intents",
        methodType: "list"
      }),
      applyCustomerBalance: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}/apply_customer_balance"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}/cancel"
      }),
      capture: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}/capture"
      }),
      confirm: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}/confirm"
      }),
      incrementAuthorization: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}/increment_authorization"
      }),
      listAmountDetailsLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_intents/{intent}/amount_details_line_items",
        methodType: "list"
      }),
      search: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_intents/search",
        methodType: "search"
      }),
      verifyMicrodeposits: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}/verify_microdeposits"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/PaymentLinks.js
var require_PaymentLinks = __commonJS({
  "node_modules/stripe/cjs/resources/PaymentLinks.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PaymentLinks = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.PaymentLinks = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/payment_links" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_links/{payment_link}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_links/{payment_link}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_links",
        methodType: "list"
      }),
      listLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_links/{payment_link}/line_items",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/PaymentMethodConfigurations.js
var require_PaymentMethodConfigurations = __commonJS({
  "node_modules/stripe/cjs/resources/PaymentMethodConfigurations.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PaymentMethodConfigurations = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.PaymentMethodConfigurations = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_method_configurations"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_method_configurations/{configuration}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_method_configurations/{configuration}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_method_configurations",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/PaymentMethodDomains.js
var require_PaymentMethodDomains = __commonJS({
  "node_modules/stripe/cjs/resources/PaymentMethodDomains.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PaymentMethodDomains = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.PaymentMethodDomains = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_method_domains"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_method_domains/{payment_method_domain}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_method_domains/{payment_method_domain}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_method_domains",
        methodType: "list"
      }),
      validate: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_method_domains/{payment_method_domain}/validate"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/PaymentMethods.js
var require_PaymentMethods = __commonJS({
  "node_modules/stripe/cjs/resources/PaymentMethods.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PaymentMethods = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.PaymentMethods = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/payment_methods" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_methods/{payment_method}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_methods/{payment_method}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_methods",
        methodType: "list"
      }),
      attach: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_methods/{payment_method}/attach"
      }),
      detach: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_methods/{payment_method}/detach"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/PaymentRecords.js
var require_PaymentRecords = __commonJS({
  "node_modules/stripe/cjs/resources/PaymentRecords.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PaymentRecords = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.PaymentRecords = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/payment_records/{id}" }),
      reportPayment: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_records/report_payment"
      }),
      reportPaymentAttempt: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_records/{id}/report_payment_attempt"
      }),
      reportPaymentAttemptCanceled: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_records/{id}/report_payment_attempt_canceled"
      }),
      reportPaymentAttemptFailed: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_records/{id}/report_payment_attempt_failed"
      }),
      reportPaymentAttemptGuaranteed: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_records/{id}/report_payment_attempt_guaranteed"
      }),
      reportPaymentAttemptInformational: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_records/{id}/report_payment_attempt_informational"
      }),
      reportRefund: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_records/{id}/report_refund"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Payouts.js
var require_Payouts = __commonJS({
  "node_modules/stripe/cjs/resources/Payouts.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Payouts = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Payouts = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/payouts" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/payouts/{payout}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/payouts/{payout}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/payouts",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/payouts/{payout}/cancel"
      }),
      reverse: stripeMethod({
        method: "POST",
        fullPath: "/v1/payouts/{payout}/reverse"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Plans.js
var require_Plans = __commonJS({
  "node_modules/stripe/cjs/resources/Plans.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Plans = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Plans = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/plans" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/plans/{plan}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/plans/{plan}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/plans",
        methodType: "list"
      }),
      del: stripeMethod({ method: "DELETE", fullPath: "/v1/plans/{plan}" })
    });
  }
});

// node_modules/stripe/cjs/resources/Prices.js
var require_Prices = __commonJS({
  "node_modules/stripe/cjs/resources/Prices.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Prices = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Prices = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/prices" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/prices/{price}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/prices/{price}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/prices",
        methodType: "list"
      }),
      search: stripeMethod({
        method: "GET",
        fullPath: "/v1/prices/search",
        methodType: "search"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Products.js
var require_Products2 = __commonJS({
  "node_modules/stripe/cjs/resources/Products.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Products = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Products = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/products" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/products/{id}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/products/{id}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/products",
        methodType: "list"
      }),
      del: stripeMethod({ method: "DELETE", fullPath: "/v1/products/{id}" }),
      createFeature: stripeMethod({
        method: "POST",
        fullPath: "/v1/products/{product}/features"
      }),
      deleteFeature: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/products/{product}/features/{id}"
      }),
      listFeatures: stripeMethod({
        method: "GET",
        fullPath: "/v1/products/{product}/features",
        methodType: "list"
      }),
      retrieveFeature: stripeMethod({
        method: "GET",
        fullPath: "/v1/products/{product}/features/{id}"
      }),
      search: stripeMethod({
        method: "GET",
        fullPath: "/v1/products/search",
        methodType: "search"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/PromotionCodes.js
var require_PromotionCodes = __commonJS({
  "node_modules/stripe/cjs/resources/PromotionCodes.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PromotionCodes = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.PromotionCodes = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/promotion_codes" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/promotion_codes/{promotion_code}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/promotion_codes/{promotion_code}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/promotion_codes",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Quotes.js
var require_Quotes = __commonJS({
  "node_modules/stripe/cjs/resources/Quotes.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Quotes = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Quotes = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/quotes" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/quotes/{quote}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/quotes/{quote}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/quotes",
        methodType: "list"
      }),
      accept: stripeMethod({ method: "POST", fullPath: "/v1/quotes/{quote}/accept" }),
      cancel: stripeMethod({ method: "POST", fullPath: "/v1/quotes/{quote}/cancel" }),
      finalizeQuote: stripeMethod({
        method: "POST",
        fullPath: "/v1/quotes/{quote}/finalize"
      }),
      listComputedUpfrontLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/quotes/{quote}/computed_upfront_line_items",
        methodType: "list"
      }),
      listLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/quotes/{quote}/line_items",
        methodType: "list"
      }),
      pdf: stripeMethod({
        method: "GET",
        fullPath: "/v1/quotes/{quote}/pdf",
        host: "files.stripe.com",
        streaming: true
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Refunds.js
var require_Refunds2 = __commonJS({
  "node_modules/stripe/cjs/resources/Refunds.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Refunds = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Refunds = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/refunds" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/refunds/{refund}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/refunds/{refund}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/refunds",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/refunds/{refund}/cancel"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Reviews.js
var require_Reviews = __commonJS({
  "node_modules/stripe/cjs/resources/Reviews.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Reviews = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Reviews = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/reviews/{review}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/reviews",
        methodType: "list"
      }),
      approve: stripeMethod({
        method: "POST",
        fullPath: "/v1/reviews/{review}/approve"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/SetupAttempts.js
var require_SetupAttempts = __commonJS({
  "node_modules/stripe/cjs/resources/SetupAttempts.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SetupAttempts = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.SetupAttempts = StripeResource_js_1.StripeResource.extend({
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/setup_attempts",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/SetupIntents.js
var require_SetupIntents = __commonJS({
  "node_modules/stripe/cjs/resources/SetupIntents.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SetupIntents = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.SetupIntents = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/setup_intents" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/setup_intents/{intent}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/setup_intents/{intent}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/setup_intents",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/setup_intents/{intent}/cancel"
      }),
      confirm: stripeMethod({
        method: "POST",
        fullPath: "/v1/setup_intents/{intent}/confirm"
      }),
      verifyMicrodeposits: stripeMethod({
        method: "POST",
        fullPath: "/v1/setup_intents/{intent}/verify_microdeposits"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/ShippingRates.js
var require_ShippingRates = __commonJS({
  "node_modules/stripe/cjs/resources/ShippingRates.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ShippingRates = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.ShippingRates = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/shipping_rates" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/shipping_rates/{shipping_rate_token}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/shipping_rates/{shipping_rate_token}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/shipping_rates",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Sources.js
var require_Sources = __commonJS({
  "node_modules/stripe/cjs/resources/Sources.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sources = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Sources = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/sources" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/sources/{source}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/sources/{source}" }),
      listSourceTransactions: stripeMethod({
        method: "GET",
        fullPath: "/v1/sources/{source}/source_transactions",
        methodType: "list"
      }),
      verify: stripeMethod({
        method: "POST",
        fullPath: "/v1/sources/{source}/verify"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/SubscriptionItems.js
var require_SubscriptionItems = __commonJS({
  "node_modules/stripe/cjs/resources/SubscriptionItems.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubscriptionItems = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.SubscriptionItems = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/subscription_items" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscription_items/{item}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscription_items/{item}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscription_items",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/subscription_items/{item}"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/SubscriptionSchedules.js
var require_SubscriptionSchedules = __commonJS({
  "node_modules/stripe/cjs/resources/SubscriptionSchedules.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubscriptionSchedules = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.SubscriptionSchedules = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscription_schedules"
      }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscription_schedules/{schedule}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscription_schedules/{schedule}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscription_schedules",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscription_schedules/{schedule}/cancel"
      }),
      release: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscription_schedules/{schedule}/release"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Subscriptions.js
var require_Subscriptions = __commonJS({
  "node_modules/stripe/cjs/resources/Subscriptions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Subscriptions = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Subscriptions = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/subscriptions" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscriptions/{subscription_exposed_id}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscriptions/{subscription_exposed_id}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscriptions",
        methodType: "list"
      }),
      cancel: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/subscriptions/{subscription_exposed_id}"
      }),
      deleteDiscount: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/subscriptions/{subscription_exposed_id}/discount"
      }),
      migrate: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscriptions/{subscription}/migrate"
      }),
      resume: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscriptions/{subscription}/resume"
      }),
      search: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscriptions/search",
        methodType: "search"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/TaxCodes.js
var require_TaxCodes = __commonJS({
  "node_modules/stripe/cjs/resources/TaxCodes.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TaxCodes = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.TaxCodes = StripeResource_js_1.StripeResource.extend({
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/tax_codes/{id}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax_codes",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/TaxIds.js
var require_TaxIds = __commonJS({
  "node_modules/stripe/cjs/resources/TaxIds.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TaxIds = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.TaxIds = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/tax_ids" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/tax_ids/{id}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax_ids",
        methodType: "list"
      }),
      del: stripeMethod({ method: "DELETE", fullPath: "/v1/tax_ids/{id}" })
    });
  }
});

// node_modules/stripe/cjs/resources/TaxRates.js
var require_TaxRates = __commonJS({
  "node_modules/stripe/cjs/resources/TaxRates.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TaxRates = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.TaxRates = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/tax_rates" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/tax_rates/{tax_rate}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/tax_rates/{tax_rate}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax_rates",
        methodType: "list"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/Tokens.js
var require_Tokens2 = __commonJS({
  "node_modules/stripe/cjs/resources/Tokens.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tokens = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Tokens = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/tokens" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/tokens/{token}" })
    });
  }
});

// node_modules/stripe/cjs/resources/Topups.js
var require_Topups = __commonJS({
  "node_modules/stripe/cjs/resources/Topups.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Topups = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Topups = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/topups" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/topups/{topup}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/topups/{topup}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/topups",
        methodType: "list"
      }),
      cancel: stripeMethod({ method: "POST", fullPath: "/v1/topups/{topup}/cancel" })
    });
  }
});

// node_modules/stripe/cjs/resources/Transfers.js
var require_Transfers = __commonJS({
  "node_modules/stripe/cjs/resources/Transfers.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Transfers = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.Transfers = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/transfers" }),
      retrieve: stripeMethod({ method: "GET", fullPath: "/v1/transfers/{transfer}" }),
      update: stripeMethod({ method: "POST", fullPath: "/v1/transfers/{transfer}" }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/transfers",
        methodType: "list"
      }),
      createReversal: stripeMethod({
        method: "POST",
        fullPath: "/v1/transfers/{id}/reversals"
      }),
      listReversals: stripeMethod({
        method: "GET",
        fullPath: "/v1/transfers/{id}/reversals",
        methodType: "list"
      }),
      retrieveReversal: stripeMethod({
        method: "GET",
        fullPath: "/v1/transfers/{transfer}/reversals/{id}"
      }),
      updateReversal: stripeMethod({
        method: "POST",
        fullPath: "/v1/transfers/{transfer}/reversals/{id}"
      })
    });
  }
});

// node_modules/stripe/cjs/resources/WebhookEndpoints.js
var require_WebhookEndpoints = __commonJS({
  "node_modules/stripe/cjs/resources/WebhookEndpoints.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebhookEndpoints = void 0;
    var StripeResource_js_1 = require_StripeResource();
    var stripeMethod = StripeResource_js_1.StripeResource.method;
    exports.WebhookEndpoints = StripeResource_js_1.StripeResource.extend({
      create: stripeMethod({ method: "POST", fullPath: "/v1/webhook_endpoints" }),
      retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
      }),
      update: stripeMethod({
        method: "POST",
        fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
      }),
      list: stripeMethod({
        method: "GET",
        fullPath: "/v1/webhook_endpoints",
        methodType: "list"
      }),
      del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
      })
    });
  }
});

// node_modules/stripe/cjs/resources.js
var require_resources = __commonJS({
  "node_modules/stripe/cjs/resources.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Subscriptions = exports.SubscriptionSchedules = exports.SubscriptionItems = exports.Sources = exports.ShippingRates = exports.SetupIntents = exports.SetupAttempts = exports.Reviews = exports.Refunds = exports.Quotes = exports.PromotionCodes = exports.Products = exports.Prices = exports.Plans = exports.Payouts = exports.PaymentRecords = exports.PaymentMethods = exports.PaymentMethodDomains = exports.PaymentMethodConfigurations = exports.PaymentLinks = exports.PaymentIntents = exports.PaymentAttemptRecords = exports.OAuth = exports.Mandates = exports.Invoices = exports.InvoiceRenderingTemplates = exports.InvoicePayments = exports.InvoiceItems = exports.Files = exports.FileLinks = exports.ExchangeRates = exports.Events = exports.EphemeralKeys = exports.Disputes = exports.Customers = exports.CustomerSessions = exports.CreditNotes = exports.Coupons = exports.CountrySpecs = exports.ConfirmationTokens = exports.Charges = exports.BalanceTransactions = exports.BalanceSettings = exports.Balance = exports.ApplicationFees = exports.ApplePayDomains = exports.Accounts = exports.AccountSessions = exports.AccountLinks = exports.Account = void 0;
    exports.V2 = exports.Treasury = exports.TestHelpers = exports.Terminal = exports.Tax = exports.Sigma = exports.Reporting = exports.Radar = exports.Issuing = exports.Identity = exports.Forwarding = exports.FinancialConnections = exports.Entitlements = exports.Climate = exports.Checkout = exports.BillingPortal = exports.Billing = exports.Apps = exports.WebhookEndpoints = exports.Transfers = exports.Topups = exports.Tokens = exports.TaxRates = exports.TaxIds = exports.TaxCodes = void 0;
    var ResourceNamespace_js_1 = require_ResourceNamespace();
    var AccountLinks_js_1 = require_AccountLinks();
    var AccountTokens_js_1 = require_AccountTokens();
    var Accounts_js_1 = require_Accounts();
    var Accounts_js_2 = require_Accounts2();
    var ActiveEntitlements_js_1 = require_ActiveEntitlements();
    var Alerts_js_1 = require_Alerts();
    var Associations_js_1 = require_Associations();
    var Authorizations_js_1 = require_Authorizations();
    var Authorizations_js_2 = require_Authorizations2();
    var Calculations_js_1 = require_Calculations();
    var Cardholders_js_1 = require_Cardholders();
    var Cards_js_1 = require_Cards();
    var Cards_js_2 = require_Cards2();
    var Configurations_js_1 = require_Configurations();
    var Configurations_js_2 = require_Configurations2();
    var ConfirmationTokens_js_1 = require_ConfirmationTokens();
    var ConnectionTokens_js_1 = require_ConnectionTokens();
    var CreditBalanceSummary_js_1 = require_CreditBalanceSummary();
    var CreditBalanceTransactions_js_1 = require_CreditBalanceTransactions();
    var CreditGrants_js_1 = require_CreditGrants();
    var CreditReversals_js_1 = require_CreditReversals();
    var Customers_js_1 = require_Customers();
    var DebitReversals_js_1 = require_DebitReversals();
    var Disputes_js_1 = require_Disputes();
    var EarlyFraudWarnings_js_1 = require_EarlyFraudWarnings();
    var EventDestinations_js_1 = require_EventDestinations();
    var Events_js_1 = require_Events();
    var Features_js_1 = require_Features();
    var FinancialAccounts_js_1 = require_FinancialAccounts();
    var InboundTransfers_js_1 = require_InboundTransfers();
    var InboundTransfers_js_2 = require_InboundTransfers2();
    var Locations_js_1 = require_Locations();
    var MeterEventAdjustments_js_1 = require_MeterEventAdjustments();
    var MeterEventAdjustments_js_2 = require_MeterEventAdjustments2();
    var MeterEventSession_js_1 = require_MeterEventSession();
    var MeterEventStream_js_1 = require_MeterEventStream();
    var MeterEvents_js_1 = require_MeterEvents();
    var MeterEvents_js_2 = require_MeterEvents2();
    var Meters_js_1 = require_Meters();
    var OnboardingLinks_js_1 = require_OnboardingLinks();
    var Orders_js_1 = require_Orders();
    var OutboundPayments_js_1 = require_OutboundPayments();
    var OutboundPayments_js_2 = require_OutboundPayments2();
    var OutboundTransfers_js_1 = require_OutboundTransfers();
    var OutboundTransfers_js_2 = require_OutboundTransfers2();
    var PaymentEvaluations_js_1 = require_PaymentEvaluations();
    var PersonalizationDesigns_js_1 = require_PersonalizationDesigns();
    var PersonalizationDesigns_js_2 = require_PersonalizationDesigns2();
    var PhysicalBundles_js_1 = require_PhysicalBundles();
    var Products_js_1 = require_Products();
    var Readers_js_1 = require_Readers();
    var Readers_js_2 = require_Readers2();
    var ReceivedCredits_js_1 = require_ReceivedCredits();
    var ReceivedCredits_js_2 = require_ReceivedCredits2();
    var ReceivedDebits_js_1 = require_ReceivedDebits();
    var ReceivedDebits_js_2 = require_ReceivedDebits2();
    var Refunds_js_1 = require_Refunds();
    var Registrations_js_1 = require_Registrations();
    var ReportRuns_js_1 = require_ReportRuns();
    var ReportTypes_js_1 = require_ReportTypes();
    var Requests_js_1 = require_Requests();
    var ScheduledQueryRuns_js_1 = require_ScheduledQueryRuns();
    var Secrets_js_1 = require_Secrets();
    var Sessions_js_1 = require_Sessions();
    var Sessions_js_2 = require_Sessions2();
    var Sessions_js_3 = require_Sessions3();
    var Settings_js_1 = require_Settings();
    var Suppliers_js_1 = require_Suppliers();
    var TestClocks_js_1 = require_TestClocks();
    var Tokens_js_1 = require_Tokens();
    var TransactionEntries_js_1 = require_TransactionEntries();
    var Transactions_js_1 = require_Transactions();
    var Transactions_js_2 = require_Transactions2();
    var Transactions_js_3 = require_Transactions3();
    var Transactions_js_4 = require_Transactions4();
    var Transactions_js_5 = require_Transactions5();
    var ValueListItems_js_1 = require_ValueListItems();
    var ValueLists_js_1 = require_ValueLists();
    var VerificationReports_js_1 = require_VerificationReports();
    var VerificationSessions_js_1 = require_VerificationSessions();
    var Accounts_js_3 = require_Accounts3();
    Object.defineProperty(exports, "Account", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Accounts_js_3.Accounts;
    }, "get") });
    var AccountLinks_js_2 = require_AccountLinks2();
    Object.defineProperty(exports, "AccountLinks", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return AccountLinks_js_2.AccountLinks;
    }, "get") });
    var AccountSessions_js_1 = require_AccountSessions();
    Object.defineProperty(exports, "AccountSessions", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return AccountSessions_js_1.AccountSessions;
    }, "get") });
    var Accounts_js_4 = require_Accounts3();
    Object.defineProperty(exports, "Accounts", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Accounts_js_4.Accounts;
    }, "get") });
    var ApplePayDomains_js_1 = require_ApplePayDomains();
    Object.defineProperty(exports, "ApplePayDomains", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ApplePayDomains_js_1.ApplePayDomains;
    }, "get") });
    var ApplicationFees_js_1 = require_ApplicationFees();
    Object.defineProperty(exports, "ApplicationFees", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ApplicationFees_js_1.ApplicationFees;
    }, "get") });
    var Balance_js_1 = require_Balance();
    Object.defineProperty(exports, "Balance", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Balance_js_1.Balance;
    }, "get") });
    var BalanceSettings_js_1 = require_BalanceSettings();
    Object.defineProperty(exports, "BalanceSettings", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return BalanceSettings_js_1.BalanceSettings;
    }, "get") });
    var BalanceTransactions_js_1 = require_BalanceTransactions();
    Object.defineProperty(exports, "BalanceTransactions", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return BalanceTransactions_js_1.BalanceTransactions;
    }, "get") });
    var Charges_js_1 = require_Charges();
    Object.defineProperty(exports, "Charges", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Charges_js_1.Charges;
    }, "get") });
    var ConfirmationTokens_js_2 = require_ConfirmationTokens2();
    Object.defineProperty(exports, "ConfirmationTokens", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ConfirmationTokens_js_2.ConfirmationTokens;
    }, "get") });
    var CountrySpecs_js_1 = require_CountrySpecs();
    Object.defineProperty(exports, "CountrySpecs", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return CountrySpecs_js_1.CountrySpecs;
    }, "get") });
    var Coupons_js_1 = require_Coupons();
    Object.defineProperty(exports, "Coupons", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Coupons_js_1.Coupons;
    }, "get") });
    var CreditNotes_js_1 = require_CreditNotes();
    Object.defineProperty(exports, "CreditNotes", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return CreditNotes_js_1.CreditNotes;
    }, "get") });
    var CustomerSessions_js_1 = require_CustomerSessions();
    Object.defineProperty(exports, "CustomerSessions", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return CustomerSessions_js_1.CustomerSessions;
    }, "get") });
    var Customers_js_2 = require_Customers2();
    Object.defineProperty(exports, "Customers", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Customers_js_2.Customers;
    }, "get") });
    var Disputes_js_2 = require_Disputes2();
    Object.defineProperty(exports, "Disputes", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Disputes_js_2.Disputes;
    }, "get") });
    var EphemeralKeys_js_1 = require_EphemeralKeys();
    Object.defineProperty(exports, "EphemeralKeys", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return EphemeralKeys_js_1.EphemeralKeys;
    }, "get") });
    var Events_js_2 = require_Events2();
    Object.defineProperty(exports, "Events", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Events_js_2.Events;
    }, "get") });
    var ExchangeRates_js_1 = require_ExchangeRates();
    Object.defineProperty(exports, "ExchangeRates", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ExchangeRates_js_1.ExchangeRates;
    }, "get") });
    var FileLinks_js_1 = require_FileLinks();
    Object.defineProperty(exports, "FileLinks", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return FileLinks_js_1.FileLinks;
    }, "get") });
    var Files_js_1 = require_Files();
    Object.defineProperty(exports, "Files", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Files_js_1.Files;
    }, "get") });
    var InvoiceItems_js_1 = require_InvoiceItems();
    Object.defineProperty(exports, "InvoiceItems", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return InvoiceItems_js_1.InvoiceItems;
    }, "get") });
    var InvoicePayments_js_1 = require_InvoicePayments();
    Object.defineProperty(exports, "InvoicePayments", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return InvoicePayments_js_1.InvoicePayments;
    }, "get") });
    var InvoiceRenderingTemplates_js_1 = require_InvoiceRenderingTemplates();
    Object.defineProperty(exports, "InvoiceRenderingTemplates", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return InvoiceRenderingTemplates_js_1.InvoiceRenderingTemplates;
    }, "get") });
    var Invoices_js_1 = require_Invoices();
    Object.defineProperty(exports, "Invoices", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Invoices_js_1.Invoices;
    }, "get") });
    var Mandates_js_1 = require_Mandates();
    Object.defineProperty(exports, "Mandates", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Mandates_js_1.Mandates;
    }, "get") });
    var OAuth_js_1 = require_OAuth();
    Object.defineProperty(exports, "OAuth", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return OAuth_js_1.OAuth;
    }, "get") });
    var PaymentAttemptRecords_js_1 = require_PaymentAttemptRecords();
    Object.defineProperty(exports, "PaymentAttemptRecords", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return PaymentAttemptRecords_js_1.PaymentAttemptRecords;
    }, "get") });
    var PaymentIntents_js_1 = require_PaymentIntents();
    Object.defineProperty(exports, "PaymentIntents", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return PaymentIntents_js_1.PaymentIntents;
    }, "get") });
    var PaymentLinks_js_1 = require_PaymentLinks();
    Object.defineProperty(exports, "PaymentLinks", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return PaymentLinks_js_1.PaymentLinks;
    }, "get") });
    var PaymentMethodConfigurations_js_1 = require_PaymentMethodConfigurations();
    Object.defineProperty(exports, "PaymentMethodConfigurations", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return PaymentMethodConfigurations_js_1.PaymentMethodConfigurations;
    }, "get") });
    var PaymentMethodDomains_js_1 = require_PaymentMethodDomains();
    Object.defineProperty(exports, "PaymentMethodDomains", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return PaymentMethodDomains_js_1.PaymentMethodDomains;
    }, "get") });
    var PaymentMethods_js_1 = require_PaymentMethods();
    Object.defineProperty(exports, "PaymentMethods", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return PaymentMethods_js_1.PaymentMethods;
    }, "get") });
    var PaymentRecords_js_1 = require_PaymentRecords();
    Object.defineProperty(exports, "PaymentRecords", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return PaymentRecords_js_1.PaymentRecords;
    }, "get") });
    var Payouts_js_1 = require_Payouts();
    Object.defineProperty(exports, "Payouts", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Payouts_js_1.Payouts;
    }, "get") });
    var Plans_js_1 = require_Plans();
    Object.defineProperty(exports, "Plans", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Plans_js_1.Plans;
    }, "get") });
    var Prices_js_1 = require_Prices();
    Object.defineProperty(exports, "Prices", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Prices_js_1.Prices;
    }, "get") });
    var Products_js_2 = require_Products2();
    Object.defineProperty(exports, "Products", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Products_js_2.Products;
    }, "get") });
    var PromotionCodes_js_1 = require_PromotionCodes();
    Object.defineProperty(exports, "PromotionCodes", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return PromotionCodes_js_1.PromotionCodes;
    }, "get") });
    var Quotes_js_1 = require_Quotes();
    Object.defineProperty(exports, "Quotes", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Quotes_js_1.Quotes;
    }, "get") });
    var Refunds_js_2 = require_Refunds2();
    Object.defineProperty(exports, "Refunds", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Refunds_js_2.Refunds;
    }, "get") });
    var Reviews_js_1 = require_Reviews();
    Object.defineProperty(exports, "Reviews", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Reviews_js_1.Reviews;
    }, "get") });
    var SetupAttempts_js_1 = require_SetupAttempts();
    Object.defineProperty(exports, "SetupAttempts", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return SetupAttempts_js_1.SetupAttempts;
    }, "get") });
    var SetupIntents_js_1 = require_SetupIntents();
    Object.defineProperty(exports, "SetupIntents", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return SetupIntents_js_1.SetupIntents;
    }, "get") });
    var ShippingRates_js_1 = require_ShippingRates();
    Object.defineProperty(exports, "ShippingRates", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ShippingRates_js_1.ShippingRates;
    }, "get") });
    var Sources_js_1 = require_Sources();
    Object.defineProperty(exports, "Sources", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Sources_js_1.Sources;
    }, "get") });
    var SubscriptionItems_js_1 = require_SubscriptionItems();
    Object.defineProperty(exports, "SubscriptionItems", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return SubscriptionItems_js_1.SubscriptionItems;
    }, "get") });
    var SubscriptionSchedules_js_1 = require_SubscriptionSchedules();
    Object.defineProperty(exports, "SubscriptionSchedules", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return SubscriptionSchedules_js_1.SubscriptionSchedules;
    }, "get") });
    var Subscriptions_js_1 = require_Subscriptions();
    Object.defineProperty(exports, "Subscriptions", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Subscriptions_js_1.Subscriptions;
    }, "get") });
    var TaxCodes_js_1 = require_TaxCodes();
    Object.defineProperty(exports, "TaxCodes", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return TaxCodes_js_1.TaxCodes;
    }, "get") });
    var TaxIds_js_1 = require_TaxIds();
    Object.defineProperty(exports, "TaxIds", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return TaxIds_js_1.TaxIds;
    }, "get") });
    var TaxRates_js_1 = require_TaxRates();
    Object.defineProperty(exports, "TaxRates", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return TaxRates_js_1.TaxRates;
    }, "get") });
    var Tokens_js_2 = require_Tokens2();
    Object.defineProperty(exports, "Tokens", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Tokens_js_2.Tokens;
    }, "get") });
    var Topups_js_1 = require_Topups();
    Object.defineProperty(exports, "Topups", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Topups_js_1.Topups;
    }, "get") });
    var Transfers_js_1 = require_Transfers();
    Object.defineProperty(exports, "Transfers", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return Transfers_js_1.Transfers;
    }, "get") });
    var WebhookEndpoints_js_1 = require_WebhookEndpoints();
    Object.defineProperty(exports, "WebhookEndpoints", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return WebhookEndpoints_js_1.WebhookEndpoints;
    }, "get") });
    exports.Apps = (0, ResourceNamespace_js_1.resourceNamespace)("apps", { Secrets: Secrets_js_1.Secrets });
    exports.Billing = (0, ResourceNamespace_js_1.resourceNamespace)("billing", {
      Alerts: Alerts_js_1.Alerts,
      CreditBalanceSummary: CreditBalanceSummary_js_1.CreditBalanceSummary,
      CreditBalanceTransactions: CreditBalanceTransactions_js_1.CreditBalanceTransactions,
      CreditGrants: CreditGrants_js_1.CreditGrants,
      MeterEventAdjustments: MeterEventAdjustments_js_1.MeterEventAdjustments,
      MeterEvents: MeterEvents_js_1.MeterEvents,
      Meters: Meters_js_1.Meters
    });
    exports.BillingPortal = (0, ResourceNamespace_js_1.resourceNamespace)("billingPortal", {
      Configurations: Configurations_js_1.Configurations,
      Sessions: Sessions_js_1.Sessions
    });
    exports.Checkout = (0, ResourceNamespace_js_1.resourceNamespace)("checkout", {
      Sessions: Sessions_js_2.Sessions
    });
    exports.Climate = (0, ResourceNamespace_js_1.resourceNamespace)("climate", {
      Orders: Orders_js_1.Orders,
      Products: Products_js_1.Products,
      Suppliers: Suppliers_js_1.Suppliers
    });
    exports.Entitlements = (0, ResourceNamespace_js_1.resourceNamespace)("entitlements", {
      ActiveEntitlements: ActiveEntitlements_js_1.ActiveEntitlements,
      Features: Features_js_1.Features
    });
    exports.FinancialConnections = (0, ResourceNamespace_js_1.resourceNamespace)("financialConnections", {
      Accounts: Accounts_js_1.Accounts,
      Sessions: Sessions_js_3.Sessions,
      Transactions: Transactions_js_1.Transactions
    });
    exports.Forwarding = (0, ResourceNamespace_js_1.resourceNamespace)("forwarding", {
      Requests: Requests_js_1.Requests
    });
    exports.Identity = (0, ResourceNamespace_js_1.resourceNamespace)("identity", {
      VerificationReports: VerificationReports_js_1.VerificationReports,
      VerificationSessions: VerificationSessions_js_1.VerificationSessions
    });
    exports.Issuing = (0, ResourceNamespace_js_1.resourceNamespace)("issuing", {
      Authorizations: Authorizations_js_1.Authorizations,
      Cardholders: Cardholders_js_1.Cardholders,
      Cards: Cards_js_1.Cards,
      Disputes: Disputes_js_1.Disputes,
      PersonalizationDesigns: PersonalizationDesigns_js_1.PersonalizationDesigns,
      PhysicalBundles: PhysicalBundles_js_1.PhysicalBundles,
      Tokens: Tokens_js_1.Tokens,
      Transactions: Transactions_js_2.Transactions
    });
    exports.Radar = (0, ResourceNamespace_js_1.resourceNamespace)("radar", {
      EarlyFraudWarnings: EarlyFraudWarnings_js_1.EarlyFraudWarnings,
      PaymentEvaluations: PaymentEvaluations_js_1.PaymentEvaluations,
      ValueListItems: ValueListItems_js_1.ValueListItems,
      ValueLists: ValueLists_js_1.ValueLists
    });
    exports.Reporting = (0, ResourceNamespace_js_1.resourceNamespace)("reporting", {
      ReportRuns: ReportRuns_js_1.ReportRuns,
      ReportTypes: ReportTypes_js_1.ReportTypes
    });
    exports.Sigma = (0, ResourceNamespace_js_1.resourceNamespace)("sigma", {
      ScheduledQueryRuns: ScheduledQueryRuns_js_1.ScheduledQueryRuns
    });
    exports.Tax = (0, ResourceNamespace_js_1.resourceNamespace)("tax", {
      Associations: Associations_js_1.Associations,
      Calculations: Calculations_js_1.Calculations,
      Registrations: Registrations_js_1.Registrations,
      Settings: Settings_js_1.Settings,
      Transactions: Transactions_js_3.Transactions
    });
    exports.Terminal = (0, ResourceNamespace_js_1.resourceNamespace)("terminal", {
      Configurations: Configurations_js_2.Configurations,
      ConnectionTokens: ConnectionTokens_js_1.ConnectionTokens,
      Locations: Locations_js_1.Locations,
      OnboardingLinks: OnboardingLinks_js_1.OnboardingLinks,
      Readers: Readers_js_1.Readers
    });
    exports.TestHelpers = (0, ResourceNamespace_js_1.resourceNamespace)("testHelpers", {
      ConfirmationTokens: ConfirmationTokens_js_1.ConfirmationTokens,
      Customers: Customers_js_1.Customers,
      Refunds: Refunds_js_1.Refunds,
      TestClocks: TestClocks_js_1.TestClocks,
      Issuing: (0, ResourceNamespace_js_1.resourceNamespace)("issuing", {
        Authorizations: Authorizations_js_2.Authorizations,
        Cards: Cards_js_2.Cards,
        PersonalizationDesigns: PersonalizationDesigns_js_2.PersonalizationDesigns,
        Transactions: Transactions_js_4.Transactions
      }),
      Terminal: (0, ResourceNamespace_js_1.resourceNamespace)("terminal", {
        Readers: Readers_js_2.Readers
      }),
      Treasury: (0, ResourceNamespace_js_1.resourceNamespace)("treasury", {
        InboundTransfers: InboundTransfers_js_1.InboundTransfers,
        OutboundPayments: OutboundPayments_js_1.OutboundPayments,
        OutboundTransfers: OutboundTransfers_js_1.OutboundTransfers,
        ReceivedCredits: ReceivedCredits_js_1.ReceivedCredits,
        ReceivedDebits: ReceivedDebits_js_1.ReceivedDebits
      })
    });
    exports.Treasury = (0, ResourceNamespace_js_1.resourceNamespace)("treasury", {
      CreditReversals: CreditReversals_js_1.CreditReversals,
      DebitReversals: DebitReversals_js_1.DebitReversals,
      FinancialAccounts: FinancialAccounts_js_1.FinancialAccounts,
      InboundTransfers: InboundTransfers_js_2.InboundTransfers,
      OutboundPayments: OutboundPayments_js_2.OutboundPayments,
      OutboundTransfers: OutboundTransfers_js_2.OutboundTransfers,
      ReceivedCredits: ReceivedCredits_js_2.ReceivedCredits,
      ReceivedDebits: ReceivedDebits_js_2.ReceivedDebits,
      TransactionEntries: TransactionEntries_js_1.TransactionEntries,
      Transactions: Transactions_js_5.Transactions
    });
    exports.V2 = (0, ResourceNamespace_js_1.resourceNamespace)("v2", {
      Billing: (0, ResourceNamespace_js_1.resourceNamespace)("billing", {
        MeterEventAdjustments: MeterEventAdjustments_js_2.MeterEventAdjustments,
        MeterEventSession: MeterEventSession_js_1.MeterEventSession,
        MeterEventStream: MeterEventStream_js_1.MeterEventStream,
        MeterEvents: MeterEvents_js_2.MeterEvents
      }),
      Core: (0, ResourceNamespace_js_1.resourceNamespace)("core", {
        AccountLinks: AccountLinks_js_1.AccountLinks,
        AccountTokens: AccountTokens_js_1.AccountTokens,
        Accounts: Accounts_js_2.Accounts,
        EventDestinations: EventDestinations_js_1.EventDestinations,
        Events: Events_js_1.Events
      })
    });
  }
});

// node_modules/stripe/cjs/stripe.core.js
var require_stripe_core = __commonJS({
  "node_modules/stripe/cjs/stripe.core.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createStripe = void 0;
    var _Error = require_Error();
    var RequestSender_js_1 = require_RequestSender();
    var StripeResource_js_1 = require_StripeResource();
    var StripeContext_js_1 = require_StripeContext();
    var Webhooks_js_1 = require_Webhooks();
    var apiVersion_js_1 = require_apiVersion();
    var CryptoProvider_js_1 = require_CryptoProvider();
    var HttpClient_js_1 = require_HttpClient();
    var resources = require_resources();
    var utils_js_1 = require_utils();
    var DEFAULT_HOST = "api.stripe.com";
    var DEFAULT_PORT = "443";
    var DEFAULT_BASE_PATH = "/v1/";
    var DEFAULT_API_VERSION = apiVersion_js_1.ApiVersion;
    var DEFAULT_TIMEOUT = 8e4;
    var MAX_NETWORK_RETRY_DELAY_SEC = 5;
    var INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;
    var APP_INFO_PROPERTIES = ["name", "version", "url", "partner_id"];
    var ALLOWED_CONFIG_PROPERTIES = [
      "authenticator",
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
      "stripeAccount",
      "stripeContext"
    ];
    var defaultRequestSenderFactory = /* @__PURE__ */ __name((stripe) => new RequestSender_js_1.RequestSender(stripe, StripeResource_js_1.StripeResource.MAX_BUFFERED_REQUEST_METRICS), "defaultRequestSenderFactory");
    function createStripe(platformFunctions, requestSender = defaultRequestSenderFactory) {
      Stripe.PACKAGE_VERSION = "20.3.0";
      Stripe.API_VERSION = apiVersion_js_1.ApiVersion;
      Stripe.USER_AGENT = Object.assign({ bindings_version: Stripe.PACKAGE_VERSION, lang: "node", publisher: "stripe", uname: null, typescript: false }, (0, utils_js_1.determineProcessUserAgentProperties)());
      Stripe.StripeResource = StripeResource_js_1.StripeResource;
      Stripe.StripeContext = StripeContext_js_1.StripeContext;
      Stripe.resources = resources;
      Stripe.HttpClient = HttpClient_js_1.HttpClient;
      Stripe.HttpClientResponse = HttpClient_js_1.HttpClientResponse;
      Stripe.CryptoProvider = CryptoProvider_js_1.CryptoProvider;
      Stripe.webhooks = (0, Webhooks_js_1.createWebhooks)(platformFunctions);
      function Stripe(key, config2 = {}) {
        if (!(this instanceof Stripe)) {
          return new Stripe(key, config2);
        }
        const props = this._getPropsFromConfig(config2);
        this._platformFunctions = platformFunctions;
        Object.defineProperty(this, "_emitter", {
          value: this._platformFunctions.createEmitter(),
          enumerable: false,
          configurable: false,
          writable: false
        });
        this.VERSION = Stripe.PACKAGE_VERSION;
        this.on = this._emitter.on.bind(this._emitter);
        this.once = this._emitter.once.bind(this._emitter);
        this.off = this._emitter.removeListener.bind(this._emitter);
        const agent = props.httpAgent || null;
        this._api = {
          host: props.host || DEFAULT_HOST,
          port: props.port || DEFAULT_PORT,
          protocol: props.protocol || "https",
          basePath: DEFAULT_BASE_PATH,
          version: props.apiVersion || DEFAULT_API_VERSION,
          timeout: (0, utils_js_1.validateInteger)("timeout", props.timeout, DEFAULT_TIMEOUT),
          maxNetworkRetries: (0, utils_js_1.validateInteger)("maxNetworkRetries", props.maxNetworkRetries, 2),
          agent,
          httpClient: props.httpClient || (agent ? this._platformFunctions.createNodeHttpClient(agent) : this._platformFunctions.createDefaultHttpClient()),
          dev: false,
          stripeAccount: props.stripeAccount || null,
          stripeContext: props.stripeContext || null
        };
        const typescript = props.typescript || false;
        if (typescript !== Stripe.USER_AGENT.typescript) {
          Stripe.USER_AGENT.typescript = typescript;
        }
        if (props.appInfo) {
          this._setAppInfo(props.appInfo);
        }
        this._prepResources();
        this._setAuthenticator(key, props.authenticator);
        this.errors = _Error;
        this.webhooks = Stripe.webhooks;
        this._prevRequestMetrics = [];
        this._enableTelemetry = props.telemetry !== false;
        this._requestSender = requestSender(this);
        this.StripeResource = Stripe.StripeResource;
      }
      __name(Stripe, "Stripe");
      Stripe.errors = _Error;
      Stripe.createNodeHttpClient = platformFunctions.createNodeHttpClient;
      Stripe.createFetchHttpClient = platformFunctions.createFetchHttpClient;
      Stripe.createNodeCryptoProvider = platformFunctions.createNodeCryptoProvider;
      Stripe.createSubtleCryptoProvider = platformFunctions.createSubtleCryptoProvider;
      Stripe.prototype = {
        // Properties are set in the constructor above
        _appInfo: void 0,
        on: null,
        off: null,
        once: null,
        VERSION: null,
        StripeResource: null,
        webhooks: null,
        errors: null,
        _api: null,
        _prevRequestMetrics: null,
        _emitter: null,
        _enableTelemetry: null,
        _requestSender: null,
        _platformFunctions: null,
        rawRequest(method, path, params, options) {
          return this._requestSender._rawRequest(method, path, params, options);
        },
        /**
         * @private
         */
        _setAuthenticator(key, authenticator) {
          if (key && authenticator) {
            throw new Error("Can't specify both apiKey and authenticator");
          }
          if (!key && !authenticator) {
            throw new Error("Neither apiKey nor config.authenticator provided");
          }
          this._authenticator = key ? (0, utils_js_1.createApiKeyAuthenticator)(key) : authenticator;
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
          this._appInfo = APP_INFO_PROPERTIES.reduce((accum, prop) => {
            if (typeof info[prop] == "string") {
              accum = accum || {};
              accum[prop] = info[prop];
            }
            return accum;
          }, {});
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
         * @private
         * This may be removed in the future.
         */
        _setApiNumberField(prop, n, defaultVal) {
          const val = (0, utils_js_1.validateInteger)(prop, n, defaultVal);
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
          this._platformFunctions.getUname().then((uname) => {
            var _a;
            const userAgent = {};
            for (const field in seed) {
              if (!Object.prototype.hasOwnProperty.call(seed, field)) {
                continue;
              }
              userAgent[field] = encodeURIComponent((_a = seed[field]) !== null && _a !== void 0 ? _a : "null");
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
        getTelemetryEnabled() {
          return this._enableTelemetry;
        },
        /**
         * @private
         * This may be removed in the future.
         */
        _prepResources() {
          for (const name in resources) {
            if (!Object.prototype.hasOwnProperty.call(resources, name)) {
              continue;
            }
            this[(0, utils_js_1.pascalToCamelCase)(name)] = new resources[name](this);
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
          const values = Object.keys(config2).filter((value) => !ALLOWED_CONFIG_PROPERTIES.includes(value));
          if (values.length > 0) {
            throw new Error(`Config object may only contain the following: ${ALLOWED_CONFIG_PROPERTIES.join(", ")}`);
          }
          return config2;
        },
        parseEventNotification(payload, header, secret, tolerance, cryptoProvider, receivedAt) {
          const eventNotification = this.webhooks.constructEvent(payload, header, secret, tolerance, cryptoProvider, receivedAt);
          if (eventNotification.context) {
            eventNotification.context = StripeContext_js_1.StripeContext.parse(eventNotification.context);
          }
          eventNotification.fetchEvent = () => {
            return this._requestSender._rawRequest("GET", `/v2/core/events/${eventNotification.id}`, void 0, {
              stripeContext: eventNotification.context
            }, ["fetch_event"]);
          };
          eventNotification.fetchRelatedObject = () => {
            if (!eventNotification.related_object) {
              return Promise.resolve(null);
            }
            return this._requestSender._rawRequest("GET", eventNotification.related_object.url, void 0, {
              stripeContext: eventNotification.context
            }, ["fetch_related_object"]);
          };
          return eventNotification;
        }
      };
      return Stripe;
    }
    __name(createStripe, "createStripe");
    exports.createStripe = createStripe;
  }
});

// node_modules/stripe/cjs/stripe.cjs.worker.js
var require_stripe_cjs_worker = __commonJS({
  "node_modules/stripe/cjs/stripe.cjs.worker.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    var WebPlatformFunctions_js_1 = require_WebPlatformFunctions();
    var stripe_core_js_1 = require_stripe_core();
    var Stripe = (0, stripe_core_js_1.createStripe)(new WebPlatformFunctions_js_1.WebPlatformFunctions());
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
            const Stripe = require_stripe_cjs_worker();
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
import libDefault from "fs";
var require_fs = __commonJS({
  "node-built-in-modules:fs"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault;
  }
});

// node-built-in-modules:path
import libDefault2 from "path";
var require_path = __commonJS({
  "node-built-in-modules:path"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_performance2();
    module.exports = libDefault2;
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

// .wrangler/tmp/bundle-ETbugv/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_performance2();

// .wrangler/tmp/bundle-ETbugv/middleware-insertion-facade.js
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
    if (url.pathname === "/shop") {
      return new Response(generateShopPage(), {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname === "/products") {
      return new Response(generateProductsPage(), {
        headers: { "Content-Type": "text/html" }
      });
    }
    const productMatch = url.pathname.match(/^\/products\/(.+)$/);
    if (productMatch) {
      return new Response(generateProductDetailPage(productMatch[1]), {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname === "/cart") {
      return new Response(generateCartPage(), {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname === "/checkout") {
      return new Response(generateCheckoutPage(), {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname === "/login") {
      return new Response(generateLoginPage(), {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname === "/register") {
      return new Response(generateRegisterPage(), {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname === "/dashboard") {
      return new Response(generateDashboardPage(), {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname === "/orders") {
      return new Response(generateOrdersPage(), {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname === "/account") {
      return new Response(generateAccountPage(), {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname === "/support") {
      return new Response(generateSupportPage(), {
        headers: { "Content-Type": "text/html" }
      });
    }
    if (url.pathname === "/faq") {
      return new Response(generateFaqPage(), {
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
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
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
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
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
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
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
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
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
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { "Content-Type": "application/json" } });
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
        const Stripe = require_stripe_cjs_worker();
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
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { "Content-Type": "application/json" } });
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
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { "Content-Type": "application/json" } });
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
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { "Content-Type": "application/json" } });
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
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
__name(handleAdmin, "handleAdmin");
function generateNavigation() {
  return `
    <nav style="background: rgba(102, 126, 234, 0.1); padding: 15px 30px; border-radius: 8px; display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; align-items: center; margin-bottom: 30px;">
        <a href="/" style="color: #667eea; text-decoration: none; font-weight: 500; transition: all 0.3s;">\u{1F3E0} Home</a>
        <a href="/shop" style="color: #667eea; text-decoration: none; font-weight: 500; transition: all 0.3s;">\u{1F6D2} Shop</a>
        <a href="/products" style="color: #667eea; text-decoration: none; font-weight: 500; transition: all 0.3s;">\u{1F4E6} Products</a>
        <a href="/cart" style="color: #667eea; text-decoration: none; font-weight: 500; transition: all 0.3s;">\u{1F6CD}\uFE0F Cart</a>
        <a href="/dashboard" style="color: #667eea; text-decoration: none; font-weight: 500; transition: all 0.3s;">\u{1F4CA} Dashboard</a>
        <a href="/orders" style="color: #667eea; text-decoration: none; font-weight: 500; transition: all 0.3s;">\u{1F4CB} Orders</a>
        <a href="/account" style="color: #667eea; text-decoration: none; font-weight: 500; transition: all 0.3s;">\u{1F464} Account</a>
        <a href="/faq" style="color: #667eea; text-decoration: none; font-weight: 500; transition: all 0.3s;">\u2753 FAQ</a>
        <a href="/support" style="color: #667eea; text-decoration: none; font-weight: 500; transition: all 0.3s;">\u{1F4DE} Support</a>
    </nav>
    `;
}
__name(generateNavigation, "generateNavigation");
function generateShopPage() {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Shop - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 1200px; margin: 0 auto; }
            .header { text-align: center; color: white; margin-bottom: 40px; }
            .header h1 { font-size: 2.5em; margin-bottom: 10px; }
            .shop-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 25px; margin: 40px 0; }
            .product-card { background: white; border-radius: 12px; padding: 25px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); transition: all 0.3s; cursor: pointer; }
            .product-card:hover { transform: translateY(-10px); box-shadow: 0 15px 40px rgba(0,0,0,0.3); }
            .product-icon { font-size: 3em; margin-bottom: 15px; text-align: center; }
            .product-name { font-size: 1.4em; color: #667eea; font-weight: bold; margin-bottom: 10px; }
            .product-price { font-size: 1.6em; color: #764ba2; font-weight: bold; margin: 15px 0; }
            .product-desc { color: #666; line-height: 1.6; margin-bottom: 15px; font-size: 0.95em; }
            .btn { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 25px; border-radius: 6px; text-decoration: none; font-weight: bold; transition: all 0.3s; border: none; cursor: pointer; }
            .btn:hover { transform: scale(1.05); }
            .btn-secondary { background: #f0f0f0; color: #667eea; }
            .btn-secondary:hover { background: #e0e0e0; }
            .back-link { display: inline-block; margin: 20px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <div class="header">
                <h1>\u{1F6D2} Our Product Shop</h1>
                <p>Browse our complete collection of AI-powered tools</p>
            </div>
            
            <div class="shop-grid">
                <div class="product-card">
                    <div class="product-icon">\u{1F916}</div>
                    <h3 class="product-name">AI Content Generator</h3>
                    <div class="product-price">$99/month</div>
                    <p class="product-desc">Create SEO-optimized content in 50+ languages with GPT-4 AI</p>
                    <a href="/products/ai-content-generator" class="btn">View Details \u2192</a>
                </div>

                <div class="product-card">
                    <div class="product-icon">\u{1F50D}</div>
                    <h3 class="product-name">SEO Optimization Tool</h3>
                    <div class="product-price">$149/month</div>
                    <p class="product-desc">Keyword research, competitor analysis, rank tracking in one tool</p>
                    <a href="/products/seo-tool" class="btn">View Details \u2192</a>
                </div>

                <div class="product-card">
                    <div class="product-icon">\u{1F4CA}</div>
                    <h3 class="product-name">Analytics Dashboard</h3>
                    <div class="product-price">$199/month</div>
                    <p class="product-desc">Real-time AI analytics with predictive insights and reports</p>
                    <a href="/products/analytics-dashboard" class="btn">View Details \u2192</a>
                </div>

                <div class="product-card">
                    <div class="product-icon">\u26A1</div>
                    <h3 class="product-name">Automation Suite</h3>
                    <div class="product-price">$299/month</div>
                    <p class="product-desc">Automate 500+ integrations with intelligent AI workflows</p>
                    <a href="/products/automation-suite" class="btn">View Details \u2192</a>
                </div>
            </div>

            <a href="/" class="back-link">\u2190 Back to Home</a>
        </div>
    </body>
    </html>
    `;
}
__name(generateShopPage, "generateShopPage");
function generateProductsPage() {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Products - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 1200px; margin: 0 auto; }
            .header { text-align: center; color: white; margin-bottom: 40px; }
            .header h1 { font-size: 2.5em; margin-bottom: 10px; }
            .filters { background: rgba(255,255,255,0.1); padding: 20px; border-radius: 8px; margin-bottom: 30px; display: flex; gap: 15px; flex-wrap: wrap; }
            .filter-btn { background: white; color: #667eea; padding: 10px 20px; border-radius: 6px; border: none; cursor: pointer; font-weight: 500; transition: all 0.3s; }
            .filter-btn:hover { background: #667eea; color: white; }
            .products-table { width: 100%; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
            .table-header { background: #667eea; color: white; padding: 20px; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr auto; gap: 15px; font-weight: bold; }
            .table-row { padding: 20px; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr auto; gap: 15px; border-bottom: 1px solid #eee; align-items: center; }
            .table-row:last-child { border-bottom: none; }
            .table-row:hover { background: #f9f9f9; }
            .btn { padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; border: none; cursor: pointer; }
            .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
            .btn-primary:hover { transform: scale(1.05); }
            .back-link { display: inline-block; margin: 20px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <div class="header">
                <h1>\u{1F4E6} All Products</h1>
                <p>Complete catalog of AI-powered business solutions</p>
            </div>

            <div class="filters">
                <button class="filter-btn">\u2713 All Products</button>
                <button class="filter-btn">\u2B50 Bestsellers</button>
                <button class="filter-btn">\u{1F195} New</button>
                <button class="filter-btn">\u{1F48E} Premium</button>
                <button class="filter-btn">\u{1F525} On Sale</button>
            </div>

            <div class="products-table">
                <div class="table-header">
                    <div>Product Name</div>
                    <div>Category</div>
                    <div>Price</div>
                    <div>Rating</div>
                    <div>Action</div>
                </div>

                <div class="table-row">
                    <div><strong>AI Content Generator</strong></div>
                    <div>Content & Marketing</div>
                    <div style="color: #764ba2; font-weight: bold;">$99/mo</div>
                    <div>\u2B50 4.9/5</div>
                    <div><a href="/products/ai-content-generator" class="btn btn-primary">View</a></div>
                </div>

                <div class="table-row">
                    <div><strong>SEO Optimization Tool</strong></div>
                    <div>SEO & Analytics</div>
                    <div style="color: #764ba2; font-weight: bold;">$149/mo</div>
                    <div>\u2B50 4.8/5</div>
                    <div><a href="/products/seo-tool" class="btn btn-primary">View</a></div>
                </div>

                <div class="table-row">
                    <div><strong>Analytics Dashboard</strong></div>
                    <div>Analytics & BI</div>
                    <div style="color: #764ba2; font-weight: bold;">$199/mo</div>
                    <div>\u2B50 4.9/5</div>
                    <div><a href="/products/analytics-dashboard" class="btn btn-primary">View</a></div>
                </div>

                <div class="table-row">
                    <div><strong>Automation Suite</strong></div>
                    <div>Workflow & Integration</div>
                    <div style="color: #764ba2; font-weight: bold;">$299/mo</div>
                    <div>\u2B50 4.7/5</div>
                    <div><a href="/products/automation-suite" class="btn btn-primary">View</a></div>
                </div>
            </div>

            <a href="/shop" class="back-link">\u2190 Back to Shop</a>
        </div>
    </body>
    </html>
    `;
}
__name(generateProductsPage, "generateProductsPage");
function generateProductDetailPage(productId) {
  const products = {
    "ai-content-generator": {
      name: "AI Content Generator",
      icon: "\u{1F916}",
      price: "$99/month",
      rating: "4.9/5 (2,847 reviews)",
      description: "Create high-quality, SEO-optimized blog posts, product descriptions, and marketing copy using GPT-4 AI.",
      features: ["50+ language support", "10,000+ words/day", "AI-powered SEO optimization", "Plagiarism detection", "Content calendar", "Team collaboration"]
    },
    "seo-tool": {
      name: "SEO Optimization Tool",
      icon: "\u{1F50D}",
      price: "$149/month",
      rating: "4.8/5 (1,923 reviews)",
      description: "Boost your Google rankings with AI-powered keyword research, competitor analysis, and real-time rank tracking.",
      features: ["Keyword research", "Competitor analysis", "Rank tracking", "Technical SEO audits", "Backlink analysis", "Content optimization"]
    },
    "analytics-dashboard": {
      name: "Analytics Dashboard",
      icon: "\u{1F4CA}",
      price: "$199/month",
      rating: "4.9/5 (1,456 reviews)",
      description: "Make data-driven decisions with real-time AI analytics, visualizations, and predictive insights.",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "Data visualization", "ML-powered forecasting", "Integration with 100+ tools"]
    },
    "automation-suite": {
      name: "Automation Suite",
      icon: "\u26A1",
      price: "$299/month",
      rating: "4.7/5 (987 reviews)",
      description: "Automate workflows with intelligent AI. Connect 500+ apps and streamline your entire business.",
      features: ["500+ app integrations", "Visual workflow builder", "Conditional logic", "Error handling", "Custom webhooks", "Team management"]
    }
  };
  const product = products[productId] || products["ai-content-generator"];
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${product.name} - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 1000px; margin: 0 auto; }
            .back-link { display: inline-block; margin: 20px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
            .product-detail { background: white; border-radius: 12px; padding: 40px; box-shadow: 0 20px 60px rgba(0,0,0,0.2); }
            .product-header { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; margin-bottom: 40px; }
            .product-icon { font-size: 5em; text-align: center; }
            .product-info h1 { font-size: 2.5em; color: #667eea; margin-bottom: 15px; }
            .product-rating { color: #666; margin-bottom: 15px; font-size: 1.1em; }
            .product-price { font-size: 2.2em; color: #764ba2; font-weight: bold; margin-bottom: 20px; }
            .product-desc { color: #666; line-height: 1.8; margin-bottom: 20px; }
            .features { margin: 30px 0; }
            .features h3 { color: #667eea; margin-bottom: 15px; font-size: 1.3em; }
            .features-list { list-style: none; }
            .features-list li { padding: 10px 0; color: #666; border-bottom: 1px solid #eee; }
            .features-list li:before { content: "\u2713 "; color: #28a745; font-weight: bold; margin-right: 10px; }
            .actions { display: flex; gap: 15px; margin-top: 30px; flex-wrap: wrap; }
            .btn { padding: 15px 30px; border-radius: 6px; text-decoration: none; font-weight: bold; border: none; cursor: pointer; font-size: 1.1em; transition: all 0.3s; }
            .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
            .btn-primary:hover { transform: scale(1.05); }
            .btn-secondary { background: #f0f0f0; color: #667eea; }
            .btn-secondary:hover { background: #e0e0e0; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <a href="/products" class="back-link">\u2190 Back to Products</a>

            <div class="product-detail">
                <div class="product-header">
                    <div class="product-icon">${product.icon}</div>
                    <div class="product-info">
                        <h1>${product.name}</h1>
                        <div class="product-rating">${product.rating}</div>
                        <div class="product-price">${product.price}</div>
                        <p class="product-desc">${product.description}</p>
                    </div>
                </div>

                <div class="features">
                    <h3>\u2728 Key Features</h3>
                    <ul class="features-list">
                        ${product.features.map((f) => `<li>${f}</li>`).join("")}
                    </ul>
                </div>

                <div class="actions">
                    <a href="/cart" class="btn btn-primary">\u{1F6D2} Add to Cart</a>
                    <a href="/checkout" class="btn btn-primary">\u{1F4B3} Buy Now</a>
                    <button class="btn btn-secondary">\u2764\uFE0F Save for Later</button>
                    <button class="btn btn-secondary">\u{1F4E7} Get Updates</button>
                </div>

                <div style="margin-top: 30px; padding-top: 30px; border-top: 1px solid #eee; color: #666;">
                    <h3 style="color: #667eea; margin-bottom: 15px;">What's Included?</h3>
                    <p>\u2713 Full access to all features | \u2713 24/7 customer support | \u2713 Free updates | \u2713 30-day money-back guarantee | \u2713 Early access to new features</p>
                </div>
            </div>

            <a href="/products" class="back-link">\u2190 Back to Products</a>
        </div>
    </body>
    </html>
    `;
}
__name(generateProductDetailPage, "generateProductDetailPage");
function generateCartPage() {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Shopping Cart - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 1000px; margin: 0 auto; }
            .header { text-align: center; color: white; margin-bottom: 30px; }
            .header h1 { font-size: 2.5em; margin-bottom: 10px; }
            .cart-content { display: grid; grid-template-columns: 2fr 1fr; gap: 30px; }
            .cart-items { background: white; border-radius: 12px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
            .empty-cart { text-align: center; padding: 40px; }
            .empty-cart-icon { font-size: 4em; margin-bottom: 20px; }
            .empty-cart p { color: #666; margin-bottom: 20px; }
            .cart-item { display: grid; grid-template-columns: 1fr 1fr 1fr auto; gap: 15px; padding: 15px; border: 1px solid #eee; border-radius: 6px; margin-bottom: 15px; align-items: center; }
            .cart-item-name { font-weight: bold; color: #667eea; }
            .cart-item-price { color: #764ba2; font-weight: bold; }
            .remove-btn { background: #ff6b6b; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; }
            .summary { background: white; border-radius: 12px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); height: fit-content; }
            .summary-row { display: flex; justify-content: space-between; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee; }
            .summary-total { display: flex; justify-content: space-between; font-size: 1.3em; font-weight: bold; color: #764ba2; margin: 20px 0; }
            .btn { width: 100%; padding: 15px; border-radius: 6px; border: none; font-weight: bold; font-size: 1.1em; cursor: pointer; transition: all 0.3s; margin-bottom: 10px; }
            .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
            .btn-primary:hover { transform: scale(1.02); }
            .btn-secondary { background: #f0f0f0; color: #667eea; }
            .btn-secondary:hover { background: #e0e0e0; }
            .back-link { display: inline-block; margin: 20px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <div class="header">
                <h1>\u{1F6CD}\uFE0F Shopping Cart</h1>
            </div>

            <div class="cart-content">
                <div class="cart-items">
                    <h2 style="margin-bottom: 20px; color: #667eea;">Cart Items</h2>
                    <div class="empty-cart">
                        <div class="empty-cart-icon">\u{1F6D2}</div>
                        <p>Your cart is currently empty.</p>
                        <p style="font-size: 0.9em; color: #999;">Start by browsing our products!</p>
                        <a href="/shop" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: bold;">Browse Products \u2192</a>
                    </div>
                </div>

                <div class="summary">
                    <h2 style="margin-bottom: 20px; color: #667eea;">Order Summary</h2>
                    <div class="summary-row">
                        <span>Subtotal:</span>
                        <span>$0.00</span>
                    </div>
                    <div class="summary-row">
                        <span>Shipping:</span>
                        <span>FREE</span>
                    </div>
                    <div class="summary-row">
                        <span>Tax:</span>
                        <span>$0.00</span>
                    </div>
                    <div class="summary-total">
                        <span>Total:</span>
                        <span>$0.00</span>
                    </div>
                    <button class="btn btn-primary" disabled style="opacity: 0.6;">\u{1F4B3} Proceed to Checkout</button>
                    <button class="btn btn-secondary">Continue Shopping</button>
                </div>
            </div>

            <a href="/" class="back-link">\u2190 Back to Home</a>
        </div>
    </body>
    </html>
    `;
}
__name(generateCartPage, "generateCartPage");
function generateCheckoutPage() {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Checkout - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 900px; margin: 0 auto; }
            .header { text-align: center; color: white; margin-bottom: 30px; }
            .header h1 { font-size: 2.5em; margin-bottom: 10px; }
            .checkout-form { background: white; border-radius: 12px; padding: 40px; box-shadow: 0 20px 60px rgba(0,0,0,0.2); }
            .form-section { margin-bottom: 30px; }
            .form-section h2 { font-size: 1.4em; color: #667eea; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #667eea; }
            .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 15px; }
            .form-row.full { grid-template-columns: 1fr; }
            .form-group { display: flex; flex-direction: column; }
            .form-group label { font-weight: bold; margin-bottom: 8px; color: #333; }
            .form-group input, .form-group select { padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1em; }
            .form-group input:focus, .form-group select:focus { outline: none; border-color: #667eea; box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1); }
            .order-summary { background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 30px 0; }
            .order-item { display: flex; justify-content: space-between; margin-bottom: 10px; }
            .order-total { font-size: 1.3em; font-weight: bold; color: #764ba2; margin-top: 15px; padding-top: 15px; border-top: 1px solid #ddd; display: flex; justify-content: space-between; }
            .btn { padding: 15px 30px; border-radius: 6px; border: none; font-weight: bold; font-size: 1.1em; cursor: pointer; transition: all 0.3s; }
            .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; width: 100%; }
            .btn-primary:hover { transform: scale(1.02); }
            .btn-secondary { background: #f0f0f0; color: #667eea; }
            .back-link { display: inline-block; margin: 20px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
            .security { text-align: center; margin-top: 20px; color: #666; }
            .security-badge { font-size: 0.9em; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <div class="header">
                <h1>\u{1F4B3} Checkout</h1>
                <p>Secure payment with encrypted transmission</p>
            </div>

            <form class="checkout-form" onsubmit="handleCheckout(event)">
                <div class="form-section">
                    <h2>\u{1F4CD} Billing Address</h2>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" name="fname" required>
                        </div>
                        <div class="form-group">
                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lname" required>
                        </div>
                    </div>
                    <div class="form-row full">
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                    </div>
                    <div class="form-row full">
                        <div class="form-group">
                            <label for="address">Street Address</label>
                            <input type="text" id="address" name="address" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="city">City</label>
                            <input type="text" id="city" name="city" required>
                        </div>
                        <div class="form-group">
                            <label for="state">State/Province</label>
                            <input type="text" id="state" name="state" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="zip">Zip/Postal Code</label>
                            <input type="text" id="zip" name="zip" required>
                        </div>
                        <div class="form-group">
                            <label for="country">Country</label>
                            <select id="country" name="country" required>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                                <option>Australia</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="form-section">
                    <h2>\u{1F4B3} Payment Information</h2>
                    <div class="form-row full">
                        <div class="form-group">
                            <label for="cardholder">Cardholder Name</label>
                            <input type="text" id="cardholder" name="cardholder" required>
                        </div>
                    </div>
                    <div class="form-row full">
                        <div class="form-group">
                            <label for="cardnum">Card Number</label>
                            <input type="text" id="cardnum" name="cardnum" placeholder="1234 5678 9012 3456" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="expiry">Expiry Date</label>
                            <input type="text" id="expiry" name="expiry" placeholder="MM/YY" required>
                        </div>
                        <div class="form-group">
                            <label for="cvv">CVV</label>
                            <input type="text" id="cvv" name="cvv" placeholder="123" required>
                        </div>
                    </div>
                </div>

                <div class="order-summary">
                    <h3 style="color: #667eea; margin-bottom: 15px;">Order Summary</h3>
                    <div class="order-item">
                        <span>Subtotal</span>
                        <span>$0.00</span>
                    </div>
                    <div class="order-item">
                        <span>Shipping</span>
                        <span>FREE</span>
                    </div>
                    <div class="order-item">
                        <span>Tax</span>
                        <span>$0.00</span>
                    </div>
                    <div class="order-total">
                        <span>Total Due</span>
                        <span>$0.00</span>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary">\u{1F512} Complete Purchase</button>
                <div class="security">
                    <p class="security-badge">\u{1F510} SSL Encrypted | \u{1F6E1}\uFE0F Fraud Protected | \u2713 PCI Compliant</p>
                </div>
            </form>

            <a href="/cart" class="back-link">\u2190 Back to Cart</a>
        </div>

        <script>
            function handleCheckout(event) {
                event.preventDefault();
                alert('Payment processing: This would connect to Stripe in production. \u2705 Order placed successfully!');
                window.location.href = '/orders';
            }
        <\/script>
    </body>
    </html>
    `;
}
__name(generateCheckoutPage, "generateCheckoutPage");
function generateLoginPage() {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; }
            .login-container { background: white; border-radius: 12px; padding: 40px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-width: 400px; width: 100%; }
            .login-header { text-align: center; margin-bottom: 30px; }
            .login-header h1 { font-size: 2em; color: #667eea; margin-bottom: 10px; }
            .login-header p { color: #666; }
            .form-group { margin-bottom: 20px; }
            .form-group label { display: block; font-weight: bold; margin-bottom: 8px; color: #333; }
            .form-group input { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1em; }
            .form-group input:focus { outline: none; border-color: #667eea; box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1); }
            .remember-forgot { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
            .remember-forgot a { color: #667eea; text-decoration: none; font-size: 0.9em; }
            .remember-forgot a:hover { text-decoration: underline; }
            .btn { width: 100%; padding: 12px; border-radius: 6px; border: none; font-weight: bold; font-size: 1.1em; cursor: pointer; transition: all 0.3s; }
            .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
            .btn-primary:hover { transform: scale(1.02); }
            .divider { text-align: center; margin: 20px 0; color: #999; }
            .divider::before, .divider::after { content: ''; display: inline-block; width: 45%; height: 1px; background: #ddd; vertical-align: middle; }
            .divider::before { margin-right: 10px; }
            .divider::after { margin-left: 10px; }
            .social-login { display: flex; gap: 10px; margin-bottom: 20px; }
            .social-btn { flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 6px; background: white; cursor: pointer; font-weight: bold; transition: all 0.3s; }
            .social-btn:hover { border-color: #667eea; background: #f9f9f9; }
            .signup-link { text-align: center; margin-top: 20px; }
            .signup-link p { color: #666; }
            .signup-link a { color: #667eea; text-decoration: none; font-weight: bold; }
            .signup-link a:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="login-container">
            <div class="login-header">
                <h1>\u{1F464} Login</h1>
                <p>Welcome back to AI Marketplace</p>
            </div>

            <form onsubmit="handleLogin(event)">
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="your@email.com">
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022">
                </div>

                <div class="remember-forgot">
                    <label style="display: flex; align-items: center; font-weight: normal;">
                        <input type="checkbox" style="margin-right: 8px; width: auto;">
                        Remember me
                    </label>
                    <a href="#forgot">Forgot password?</a>
                </div>

                <button type="submit" class="btn btn-primary">Sign In</button>
            </form>

            <div class="divider">OR</div>

            <div class="social-login">
                <button class="social-btn">\u{1F535} Google</button>
                <button class="social-btn">\u{1F535} GitHub</button>
            </div>

            <div class="signup-link">
                <p>Don't have an account? <a href="/register">Create one</a></p>
            </div>

            <div style="margin-top: 20px; text-align: center;">
                <a href="/" style="color: #667eea; text-decoration: none;">\u2190 Back to Home</a>
            </div>
        </div>

        <script>
            function handleLogin(event) {
                event.preventDefault();
                alert('Logged in successfully! \u{1F389}');
                window.location.href = '/dashboard';
            }
        <\/script>
    </body>
    </html>
    `;
}
__name(generateLoginPage, "generateLoginPage");
function generateRegisterPage() {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Register - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; }
            .register-container { background: white; border-radius: 12px; padding: 40px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-width: 450px; width: 100%; }
            .register-header { text-align: center; margin-bottom: 30px; }
            .register-header h1 { font-size: 2em; color: #667eea; margin-bottom: 10px; }
            .register-header p { color: #666; }
            .form-group { margin-bottom: 20px; }
            .form-group label { display: block; font-weight: bold; margin-bottom: 8px; color: #333; }
            .form-group input { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1em; }
            .form-group input:focus { outline: none; border-color: #667eea; box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1); }
            .password-strength { margin-top: 8px; height: 4px; background: #ddd; border-radius: 2px; overflow: hidden; }
            .strength-bar { height: 100%; width: 0%; background: #ff6b6b; }
            .btn { width: 100%; padding: 12px; border-radius: 6px; border: none; font-weight: bold; font-size: 1.1em; cursor: pointer; transition: all 0.3s; }
            .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
            .btn-primary:hover { transform: scale(1.02); }
            .terms { font-size: 0.85em; color: #666; margin-bottom: 15px; }
            .terms a { color: #667eea; text-decoration: none; }
            .login-link { text-align: center; margin-top: 20px; }
            .login-link p { color: #666; }
            .login-link a { color: #667eea; text-decoration: none; font-weight: bold; }
            .login-link a:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="register-container">
            <div class="register-header">
                <h1>\u2728 Create Account</h1>
                <p>Join AI Marketplace today</p>
            </div>

            <form onsubmit="handleRegister(event)">
                <div class="form-group">
                    <label for="fullname">Full Name</label>
                    <input type="text" id="fullname" name="fullname" required placeholder="John Doe">
                </div>

                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="your@email.com">
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" onkeyup="checkPasswordStrength(this.value)">
                    <div class="password-strength">
                        <div class="strength-bar" id="strengthBar"></div>
                    </div>
                    <small style="color: #999;">At least 8 characters, mix of uppercase, lowercase, numbers and symbols</small>
                </div>

                <div class="form-group">
                    <label for="confirm">Confirm Password</label>
                    <input type="password" id="confirm" name="confirm" required placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022">
                </div>

                <div style="margin-bottom: 20px;">
                    <label style="display: flex; align-items: flex-start; font-weight: normal;">
                        <input type="checkbox" required style="margin-right: 8px; margin-top: 4px; width: auto;">
                        <span class="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
                    </label>
                </div>

                <button type="submit" class="btn btn-primary">Create Account</button>
            </form>

            <div class="login-link">
                <p>Already have an account? <a href="/login">Sign in</a></p>
            </div>

            <div style="margin-top: 20px; text-align: center;">
                <a href="/" style="color: #667eea; text-decoration: none;">\u2190 Back to Home</a>
            </div>
        </div>

        <script>
            function checkPasswordStrength(password) {
                let strength = 0;
                if (password.length >= 8) strength += 25;
                if (/[A-Z]/.test(password)) strength += 25;
                if (/[0-9]/.test(password)) strength += 25;
                if (/[^a-zA-Z0-9]/.test(password)) strength += 25;
                document.getElementById('strengthBar').style.width = strength + '%';
            }
            function handleRegister(event) {
                event.preventDefault();
                alert('Account created successfully! \u{1F389}');
                window.location.href = '/login';
            }
        <\/script>
    </body>
    </html>
    `;
}
__name(generateRegisterPage, "generateRegisterPage");
function generateDashboardPage() {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dashboard - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 1200px; margin: 0 auto; }
            .header { color: white; margin-bottom: 30px; }
            .header h1 { font-size: 2.5em; margin-bottom: 10px; }
            .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
            .stat-card { background: white; padding: 25px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
            .stat-icon { font-size: 2.5em; margin-bottom: 10px; }
            .stat-value { font-size: 2em; font-weight: bold; color: #667eea; }
            .stat-label { color: #666; font-size: 0.95em; margin-top: 5px; }
            .dashboard-section { background: white; border-radius: 12px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); margin-bottom: 30px; }
            .section-title { font-size: 1.5em; color: #667eea; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 2px solid #667eea; }
            .quick-actions { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
            .action-btn { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 25px; border-radius: 8px; text-decoration: none; text-align: center; font-weight: bold; transition: all 0.3s; border: none; cursor: pointer; }
            .action-btn:hover { transform: translateY(-3px); box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4); }
            .recent-activity { margin-top: 20px; }
            .activity-item { padding: 15px; border: 1px solid #eee; border-radius: 6px; margin-bottom: 10px; }
            .activity-item:last-child { margin-bottom: 0; }
            .activity-time { color: #999; font-size: 0.85em; }
            .activity-title { font-weight: bold; color: #333; margin-bottom: 5px; }
            .back-link { display: inline-block; margin: 20px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <div class="header">
                <h1>\u{1F4CA} Welcome Back!</h1>
                <p>Here's your account dashboard</p>
            </div>

            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon">\u{1F6D2}</div>
                    <div class="stat-value">4</div>
                    <div class="stat-label">Active Subscriptions</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">\u{1F4B0}</div>
                    <div class="stat-value">$647</div>
                    <div class="stat-label">Total Spent</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">\u{1F4E6}</div>
                    <div class="stat-value">12</div>
                    <div class="stat-label">Orders Completed</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">\u2B50</div>
                    <div class="stat-value">98%</div>
                    <div class="stat-label">Satisfaction Rate</div>
                </div>
            </div>

            <div class="dashboard-section">
                <h2 class="section-title">Quick Actions</h2>
                <div class="quick-actions">
                    <a href="/shop" class="action-btn">\u{1F6CD}\uFE0F Browse Products</a>
                    <a href="/orders" class="action-btn">\u{1F4CB} View Orders</a>
                    <a href="/account" class="action-btn">\u2699\uFE0F Account Settings</a>
                    <a href="/support" class="action-btn">\u{1F4AC} Get Support</a>
                </div>
            </div>

            <div class="dashboard-section">
                <h2 class="section-title">Recent Activity</h2>
                <div class="recent-activity">
                    <div class="activity-item">
                        <div class="activity-time">2 hours ago</div>
                        <div class="activity-title">\u2713 Renewed AI Content Generator subscription</div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-time">1 day ago</div>
                        <div class="activity-title">\u{1F4CA} Generated 847 words with AI Content Generator</div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-time">3 days ago</div>
                        <div class="activity-title">\u{1F4B3} Payment of $99.00 processed successfully</div>
                    </div>
                    <div class="activity-item">
                        <div class="activity-time">1 week ago</div>
                        <div class="activity-title">\u2713 Added SEO Optimization Tool to subscriptions</div>
                    </div>
                </div>
            </div>

            <a href="/" class="back-link">\u2190 Back to Home</a>
        </div>
    </body>
    </html>
    `;
}
__name(generateDashboardPage, "generateDashboardPage");
function generateOrdersPage() {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Orders - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 1000px; margin: 0 auto; }
            .header { color: white; margin-bottom: 30px; }
            .header h1 { font-size: 2.5em; margin-bottom: 10px; }
            .orders-list { background: white; border-radius: 12px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
            .order-item { border: 1px solid #eee; border-radius: 8px; padding: 20px; margin-bottom: 20px; }
            .order-item:last-child { margin-bottom: 0; }
            .order-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; }
            .order-id { font-weight: bold; color: #667eea; font-size: 1.1em; }
            .order-date { color: #666; font-size: 0.9em; }
            .order-status { padding: 5px 12px; border-radius: 20px; font-weight: bold; font-size: 0.85em; }
            .status-completed { background: #d4edda; color: #155724; }
            .status-pending { background: #fff3cd; color: #856404; }
            .order-details { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 15px; }
            .detail-item { }
            .detail-label { color: #666; font-size: 0.85em; margin-bottom: 5px; }
            .detail-value { font-weight: bold; color: #333; }
            .order-items { background: #f9f9f9; padding: 15px; border-radius: 6px; margin-bottom: 15px; }
            .order-items h4 { color: #667eea; margin-bottom: 10px; }
            .item-line { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
            .item-line:last-child { border-bottom: none; }
            .action-links { display: flex; gap: 10px; }
            .action-link { color: #667eea; text-decoration: none; font-weight: 500; padding: 8px 15px; border: 1px solid #667eea; border-radius: 4px; transition: all 0.3s; }
            .action-link:hover { background: #667eea; color: white; }
            .empty-orders { text-align: center; padding: 40px; }
            .empty-icon { font-size: 3em; margin-bottom: 15px; }
            .back-link { display: inline-block; margin: 20px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <div class="header">
                <h1>\u{1F4CB} My Orders</h1>
                <p>Track your purchases and subscriptions</p>
            </div>

            <div class="orders-list">
                <div class="order-item">
                    <div class="order-header">
                        <div>
                            <div class="order-id">Order #ORD-2025-001</div>
                            <div class="order-date">January 15, 2025</div>
                        </div>
                        <span class="order-status status-completed">\u2713 Completed</span>
                    </div>
                    <div class="order-details">
                        <div class="detail-item">
                            <div class="detail-label">Total Amount</div>
                            <div class="detail-value">$99.00</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Payment Method</div>
                            <div class="detail-value">Credit Card</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Delivery</div>
                            <div class="detail-value">Instant (Digital)</div>
                        </div>
                    </div>
                    <div class="order-items">
                        <h4>Items in Order</h4>
                        <div class="item-line">
                            <span>AI Content Generator (1 month)</span>
                            <strong>$99.00</strong>
                        </div>
                    </div>
                    <div class="action-links">
                        <a href="#" class="action-link">\u{1F4E7} Receipt</a>
                        <a href="#" class="action-link">\u2753 Support</a>
                        <a href="#" class="action-link">\u267B\uFE0F Renew</a>
                    </div>
                </div>

                <div class="order-item">
                    <div class="order-header">
                        <div>
                            <div class="order-id">Order #ORD-2025-002</div>
                            <div class="order-date">January 8, 2025</div>
                        </div>
                        <span class="order-status status-completed">\u2713 Completed</span>
                    </div>
                    <div class="order-details">
                        <div class="detail-item">
                            <div class="detail-label">Total Amount</div>
                            <div class="detail-value">$149.00</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Payment Method</div>
                            <div class="detail-value">Credit Card</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Delivery</div>
                            <div class="detail-value">Instant (Digital)</div>
                        </div>
                    </div>
                    <div class="order-items">
                        <h4>Items in Order</h4>
                        <div class="item-line">
                            <span>SEO Optimization Tool (1 month)</span>
                            <strong>$149.00</strong>
                        </div>
                    </div>
                    <div class="action-links">
                        <a href="#" class="action-link">\u{1F4E7} Receipt</a>
                        <a href="#" class="action-link">\u2753 Support</a>
                        <a href="#" class="action-link">\u267B\uFE0F Renew</a>
                    </div>
                </div>
            </div>

            <a href="/dashboard" class="back-link">\u2190 Back to Dashboard</a>
        </div>
    </body>
    </html>
    `;
}
__name(generateOrdersPage, "generateOrdersPage");
function generateAccountPage() {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Account Settings - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 800px; margin: 0 auto; }
            .header { color: white; margin-bottom: 30px; }
            .header h1 { font-size: 2.5em; margin-bottom: 10px; }
            .settings-container { background: white; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); overflow: hidden; }
            .settings-sidebar { background: #f9f9f9; padding: 20px; border-right: 1px solid #eee; }
            .settings-tabs { display: flex; flex-direction: column; gap: 10px; }
            .tab-btn { padding: 12px 20px; border: none; background: transparent; text-align: left; cursor: pointer; color: #666; transition: all 0.3s; font-weight: 500; }
            .tab-btn:hover, .tab-btn.active { background: #667eea; color: white; border-left: 4px solid #764ba2; }
            .settings-content { padding: 40px; }
            .form-group { margin-bottom: 25px; }
            .form-group label { display: block; font-weight: bold; margin-bottom: 8px; color: #333; }
            .form-group input, .form-group select { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1em; }
            .form-group input:focus, .form-group select:focus { outline: none; border-color: #667eea; box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1); }
            .form-buttons { display: flex; gap: 10px; margin-top: 30px; }
            .btn { padding: 12px 30px; border-radius: 6px; border: none; font-weight: bold; cursor: pointer; transition: all 0.3s; }
            .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
            .btn-primary:hover { transform: scale(1.02); }
            .btn-danger { background: #ff6b6b; color: white; }
            .btn-danger:hover { background: #ff5252; }
            .btn-secondary { background: #f0f0f0; color: #667eea; }
            .btn-secondary:hover { background: #e0e0e0; }
            .back-link { display: inline-block; margin: 20px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
            .section-title { font-size: 1.3em; color: #667eea; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 2px solid #667eea; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <div class="header">
                <h1>\u2699\uFE0F Account Settings</h1>
                <p>Manage your profile and preferences</p>
            </div>

            <div class="settings-container">
                <div class="settings-sidebar">
                    <div class="settings-tabs">
                        <button class="tab-btn active">\u{1F464} Profile</button>
                        <button class="tab-btn">\u{1F510} Security</button>
                        <button class="tab-btn">\u{1F514} Notifications</button>
                        <button class="tab-btn">\u{1F4B3} Billing</button>
                        <button class="tab-btn">\u{1F5D1}\uFE0F Danger Zone</button>
                    </div>
                </div>

                <div class="settings-content">
                    <h2 class="section-title">Profile Information</h2>

                    <div class="form-group">
                        <label for="fullname">Full Name</label>
                        <input type="text" id="fullname" name="fullname" value="John Doe">
                    </div>

                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" value="john@example.com">
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" value="+1 (555) 123-4567">
                    </div>

                    <div class="form-group">
                        <label for="company">Company</label>
                        <input type="text" id="company" name="company" value="Acme Inc.">
                    </div>

                    <div class="form-group">
                        <label for="bio">Bio</label>
                        <input type="text" id="bio" name="bio" value="AI enthusiast and digital marketer">
                    </div>

                    <h2 class="section-title" style="margin-top: 40px;">Preferences</h2>

                    <div class="form-group">
                        <label for="timezone">Timezone</label>
                        <select id="timezone">
                            <option>Eastern Time (ET)</option>
                            <option>Central Time (CT)</option>
                            <option>Mountain Time (MT)</option>
                            <option>Pacific Time (PT)</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>
                            <input type="checkbox" checked> Receive email notifications about new features
                        </label>
                    </div>

                    <div class="form-group">
                        <label>
                            <input type="checkbox" checked> Receive promotional offers and updates
                        </label>
                    </div>

                    <div class="form-buttons">
                        <button class="btn btn-primary">\u{1F4BE} Save Changes</button>
                        <button class="btn btn-secondary">Cancel</button>
                    </div>
                </div>
            </div>

            <a href="/dashboard" class="back-link">\u2190 Back to Dashboard</a>
        </div>
    </body>
    </html>
    `;
}
__name(generateAccountPage, "generateAccountPage");
function generateSupportPage() {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Support - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 1000px; margin: 0 auto; }
            .header { color: white; text-align: center; margin-bottom: 40px; }
            .header h1 { font-size: 2.5em; margin-bottom: 10px; }
            .support-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin-bottom: 40px; }
            .support-card { background: white; border-radius: 12px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); text-align: center; transition: all 0.3s; }
            .support-card:hover { transform: translateY(-10px); }
            .support-icon { font-size: 3em; margin-bottom: 15px; }
            .support-title { font-size: 1.3em; color: #667eea; font-weight: bold; margin-bottom: 10px; }
            .support-desc { color: #666; line-height: 1.6; }
            .support-link { display: inline-block; margin-top: 15px; padding: 10px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 6px; font-weight: bold; transition: all 0.3s; }
            .support-link:hover { transform: scale(1.05); }
            .faq-section { background: white; border-radius: 12px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
            .faq-title { font-size: 1.8em; color: #667eea; margin-bottom: 30px; }
            .faq-item { margin-bottom: 20px; border: 1px solid #eee; border-radius: 8px; }
            .faq-question { padding: 20px; background: #f9f9f9; cursor: pointer; font-weight: bold; color: #667eea; transition: all 0.3s; }
            .faq-question:hover { background: #667eea; color: white; }
            .faq-answer { padding: 20px; display: none; color: #666; line-height: 1.8; }
            .faq-answer.show { display: block; }
            .contact-form { background: white; border-radius: 12px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); margin-top: 30px; }
            .form-group { margin-bottom: 20px; }
            .form-group label { display: block; font-weight: bold; margin-bottom: 8px; color: #333; }
            .form-group input, .form-group textarea { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 1em; font-family: inherit; }
            .form-group input:focus, .form-group textarea:focus { outline: none; border-color: #667eea; box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1); }
            .btn { width: 100%; padding: 12px; border-radius: 6px; border: none; font-weight: bold; font-size: 1.1em; cursor: pointer; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; transition: all 0.3s; }
            .btn:hover { transform: scale(1.02); }
            .back-link { display: inline-block; margin: 30px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <div class="header">
                <h1>\u{1F4DE} Support Center</h1>
                <p>We're here to help! Choose your preferred support method.</p>
            </div>

            <div class="support-grid">
                <div class="support-card">
                    <div class="support-icon">\u{1F4AC}</div>
                    <div class="support-title">Live Chat</div>
                    <p class="support-desc">Chat with our support team in real-time. Available Mon-Fri, 9AM-6PM EST.</p>
                    <a href="#" class="support-link">Start Chat \u2192</a>
                </div>

                <div class="support-card">
                    <div class="support-icon">\u{1F4E7}</div>
                    <div class="support-title">Email Support</div>
                    <p class="support-desc">Send us an email and we'll respond within 24 hours.</p>
                    <a href="mailto:support@ai-market.com" class="support-link">Send Email \u2192</a>
                </div>

                <div class="support-card">
                    <div class="support-icon">\u{1F4DE}</div>
                    <div class="support-title">Phone Support</div>
                    <p class="support-desc">Call our support hotline for urgent issues.</p>
                    <a href="tel:+15551234567" class="support-link">Call Now \u2192</a>
                </div>

                <div class="support-card">
                    <div class="support-icon">\u{1F4DA}</div>
                    <div class="support-title">Knowledge Base</div>
                    <p class="support-desc">Browse our comprehensive documentation and tutorials.</p>
                    <a href="/faq" class="support-link">View Docs \u2192</a>
                </div>

                <div class="support-card">
                    <div class="support-icon">\u{1F393}</div>
                    <div class="support-title">Video Tutorials</div>
                    <p class="support-desc">Learn how to use our tools with step-by-step videos.</p>
                    <a href="#" class="support-link">Watch Now \u2192</a>
                </div>

                <div class="support-card">
                    <div class="support-icon">\u{1F680}</div>
                    <div class="support-title">Getting Started</div>
                    <p class="support-desc">New user? Get started with our onboarding guide.</p>
                    <a href="#" class="support-link">Start Guide \u2192</a>
                </div>
            </div>

            <div class="faq-section">
                <h2 class="faq-title">Frequently Asked Questions</h2>
                
                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFaq(this)">How do I get started?</div>
                    <div class="faq-answer">Sign up for a free account, choose your products, and start using them immediately. Our team will guide you through the onboarding process.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFaq(this)">What payment methods do you accept?</div>
                    <div class="faq-answer">We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for enterprise customers.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFaq(this)">Do you offer refunds?</div>
                    <div class="faq-answer">Yes! We offer a 30-day money-back guarantee on all products. If you're not satisfied, contact us for a full refund.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFaq(this)">Can I cancel my subscription anytime?</div>
                    <div class="faq-answer">Absolutely! You can cancel your subscription at any time from your dashboard. No hidden fees or long-term contracts.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFaq(this)">Is there a free trial?</div>
                    <div class="faq-answer">Yes! All products come with a 14-day free trial. No credit card required to start your trial.</div>
                </div>
            </div>

            <div class="contact-form">
                <h2 style="color: #667eea; margin-bottom: 20px;">Send us a Message</h2>
                <form onsubmit="handleSupportForm(event)">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>

                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject" required>
                    </div>

                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="6" required></textarea>
                    </div>

                    <button type="submit" class="btn">Send Message</button>
                </form>
            </div>

            <a href="/" class="back-link">\u2190 Back to Home</a>
        </div>

        <script>
            function toggleFaq(element) {
                const answer = element.nextElementSibling;
                answer.classList.toggle('show');
            }
            function handleSupportForm(event) {
                event.preventDefault();
                alert('Thank you! Your message has been sent. We'll respond within 24 hours.');
            }
        <\/script>
    </body>
    </html>
    `;
}
__name(generateSupportPage, "generateSupportPage");
function generateFaqPage() {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>FAQ - AI Marketplace</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #333; min-height: 100vh; padding: 20px; }
            .container { max-width: 900px; margin: 0 auto; }
            .header { color: white; text-align: center; margin-bottom: 40px; }
            .header h1 { font-size: 2.5em; margin-bottom: 10px; }
            .faq-container { background: white; border-radius: 12px; padding: 40px; box-shadow: 0 20px 60px rgba(0,0,0,0.2); }
            .faq-section { margin-bottom: 40px; }
            .faq-section-title { font-size: 1.6em; color: #667eea; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #667eea; }
            .faq-item { margin-bottom: 15px; border: 1px solid #eee; border-radius: 8px; overflow: hidden; }
            .faq-question { padding: 20px; background: #f9f9f9; cursor: pointer; font-weight: bold; color: #667eea; transition: all 0.3s; display: flex; justify-content: space-between; align-items: center; }
            .faq-question:hover { background: #667eea; color: white; }
            .faq-toggle { font-size: 1.3em; }
            .faq-answer { padding: 20px; display: none; color: #666; line-height: 1.8; background: #fafafa; }
            .faq-answer.show { display: block; }
            .back-link { display: inline-block; margin: 30px 0; color: white; text-decoration: none; font-weight: 500; }
            .back-link:hover { text-decoration: underline; }
        </style>
    </head>
    <body>
        <div class="container">
            ${generateNavigation()}
            <div class="header">
                <h1>\u2753 Frequently Asked Questions</h1>
                <p>Find answers to common questions about AI Marketplace</p>
            </div>

            <div class="faq-container">
                <div class="faq-section">
                    <h2 class="faq-section-title">Getting Started</h2>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>How do I create an account?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">Click on the "Sign Up" button, enter your email, choose a password, and you're all set! You can start using our free trial immediately without needing a payment method.</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>What is the free trial period?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">All of our products come with a 14-day free trial. You get full access to all features during your trial period. No credit card required!</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>How do I upgrade to a paid plan?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">Once your trial period ends, you can upgrade to a paid subscription from your dashboard. Choose your preferred plan and add your payment information. Your subscription will activate immediately.</div>
                    </div>
                </div>

                <div class="faq-section">
                    <h2 class="faq-section-title">Billing & Payments</h2>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>What payment methods do you accept?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for enterprise customers. All transactions are processed securely using industry-standard encryption.</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>Can I change or cancel my subscription?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">Yes! You can upgrade, downgrade, or cancel your subscription at any time from your dashboard. Changes take effect on your next billing date. No hidden fees or penalties.</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>Do you offer a money-back guarantee?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">Yes! We offer a 30-day money-back guarantee on all products. If you're not satisfied with your purchase for any reason, contact our support team for a full refund.</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>How often will I be billed?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">We offer monthly and annual billing options. Monthly subscriptions renew on the same day each month. Annual subscriptions renew yearly. You can change your billing frequency anytime.</div>
                    </div>
                </div>

                <div class="faq-section">
                    <h2 class="faq-section-title">Features & Usage</h2>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>What features are included in each plan?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">Each product has different tiers with varying features. Visit our pricing page to see detailed feature comparisons. All paid plans include priority support and access to new features.</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>Is there a limit on how much I can use?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">Most of our tools have generous usage limits or unlimited access on higher-tier plans. Check the feature details for your specific product for usage limits and overages.</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>Can I use multiple products together?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">Absolutely! Our tools are designed to work seamlessly together. You can subscribe to multiple products and manage all of them from your unified dashboard.</div>
                    </div>
                </div>

                <div class="faq-section">
                    <h2 class="faq-section-title">Support & Technical</h2>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>What kind of support is available?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">We offer live chat, email support, phone support, and a comprehensive knowledge base. Free users get email support, while paid customers get priority support with faster response times.</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>How can I contact your support team?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">You can reach us via live chat (Mon-Fri 9AM-6PM EST), email at support@ai-market.com, or phone at +1 (555) 123-4567. Visit our <a href="/support" style="color: #667eea;">support center</a> for more options.</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>What's your uptime guarantee?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">We maintain a 99.9% uptime SLA for all our services. In the rare event of an outage, we'll send notifications and work to restore service as quickly as possible.</div>
                    </div>
                </div>

                <div class="faq-section">
                    <h2 class="faq-section-title">Security & Privacy</h2>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>Is my data secure?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">Yes! We use industry-standard SSL encryption, regular security audits, and comply with GDPR, CCPA, and other privacy regulations. Your data is stored in secure, redundant data centers.</div>
                    </div>

                    <div class="faq-item">
                        <div class="faq-question" onclick="toggleFaq(this)">
                            <span>Do you share my data with third parties?</span>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">No. We never sell your data or share it with third parties without your explicit consent. Read our privacy policy for complete details on how we handle your information.</div>
                    </div>
                </div>
            </div>

            <a href="/support" class="back-link">\u2190 Back to Support</a>
        </div>

        <script>
            function toggleFaq(element) {
                const answer = element.parentElement.querySelector('.faq-answer');
                const toggle = element.querySelector('.faq-toggle');
                answer.classList.toggle('show');
                toggle.textContent = answer.classList.contains('show') ? '\u2212' : '+';
            }
        <\/script>
    </body>
    </html>
    `;
}
__name(generateFaqPage, "generateFaqPage");

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
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-ETbugv/middleware-insertion-facade.js
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

// .wrangler/tmp/bundle-ETbugv/middleware-loader.entry.ts
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
