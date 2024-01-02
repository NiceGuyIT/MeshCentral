import {z} from 'https://deno.land/x/zod@v3.22.4/mod.ts';

export const zSchema = z.object({
  id: z.string(),
  $schema: z.string(),
  description: z.string(),
  type: z.string(),
  required: z.array(z.string()),
  properties: z.object({
    settings: z.object({
      type: z.string(),
      properties: z.object({
        cert: z.object({ type: z.string(), description: z.string() }),
        keepCerts: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        mongoDb: z.object({ type: z.string(), default: z.null() }),
        mongoDbName: z.object({ type: z.string() }),
        mongoDbChangeStream: z.object({
          type: z.string(),
          default: z.boolean(),
        }),
        mongoDbBulkOperations: z.object({
          type: z.string(),
          default: z.boolean(),
        }),
        mariaDB: z.object({
          type: z.string(),
          description: z.string(),
          properties: z.object({
            host: z.object({ type: z.string(), description: z.string() }),
            user: z.object({ type: z.string(), description: z.string() }),
            port: z.object({ type: z.string(), description: z.string() }),
            password: z.object({ type: z.string(), description: z.string() }),
            connectionLimit: z.object({
              type: z.string(),
              description: z.string(),
            }),
            database: z.object({
              type: z.string(),
              default: z.string(),
              description: z.string(),
            }),
            awsrds: z.object({
              type: z.string(),
              default: z.boolean(),
              description: z.string(),
            }),
            ssl: z.object({
              type: z.string(),
              description: z.string(),
              properties: z.object({
                caCertPath: z.object({
                  type: z.string(),
                  description: z.string(),
                }),
                clientCertPath: z.object({
                  type: z.string(),
                  description: z.string(),
                }),
                clientKeyPath: z.object({
                  type: z.string(),
                  description: z.string(),
                }),
                dontCheckServerIdentity: z.object({
                  type: z.string(),
                  description: z.string(),
                }),
              }),
            }),
          }),
        }),
        sqlite3: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        mySQL: z.object({
          type: z.string(),
          description: z.string(),
          properties: z.object({
            host: z.object({ type: z.string(), description: z.string() }),
            port: z.object({ type: z.string(), description: z.string() }),
            user: z.object({ type: z.string(), description: z.string() }),
            password: z.object({ type: z.string(), description: z.string() }),
            database: z.object({
              type: z.string(),
              default: z.string(),
              description: z.string(),
            }),
            awsrds: z.object({
              type: z.string(),
              default: z.boolean(),
              description: z.string(),
            }),
            ssl: z.object({
              type: z.string(),
              description: z.string(),
              properties: z.object({
                caCertPath: z.object({
                  type: z.string(),
                  description: z.string(),
                }),
                clientCertPath: z.object({
                  type: z.string(),
                  description: z.string(),
                }),
                clientKeyPath: z.object({
                  type: z.string(),
                  description: z.string(),
                }),
                dontCheckServerIdentity: z.object({
                  type: z.string(),
                  description: z.string(),
                }),
              }),
            }),
          }),
        }),
        postgres: z.object({
          type: z.string(),
          description: z.string(),
          properties: z.object({
            host: z.object({ type: z.string(), description: z.string() }),
            user: z.object({ type: z.string(), description: z.string() }),
            port: z.object({ type: z.string(), description: z.string() }),
            password: z.object({ type: z.string(), description: z.string() }),
            database: z.object({
              type: z.string(),
              default: z.string(),
              description: z.string(),
            }),
          }),
        }),
        acebase: z.object({
          type: z.string(),
          description: z.string(),
          properties: z.object({
            sponsor: z.object({
              type: z.string(),
              default: z.boolean(),
              description: z.string(),
            }),
          }),
        }),
        WANonly: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        LANonly: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        maintenanceMode: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        certificatePrivateKeyPassword: z.object({
          type: z.string(),
          default: z.null(),
          description: z.string(),
        }),
        sessionTime: z.object({
          type: z.string(),
          default: z.number(),
          description: z.string(),
        }),
        sessionKey: z.object({
          type: z.string(),
          default: z.null(),
          description: z.string(),
        }),
        sessionSameSite: z.object({
          type: z.string(),
          default: z.string(),
          enum: z.array(z.string()),
        }),
        dbEncryptKey: z.object({
          type: z.string(),
          default: z.null(),
          description: z.string(),
        }),
        dbRecordsEncryptKey: z.object({
          type: z.string(),
          default: z.null(),
          description: z.string(),
        }),
        dbRecordsDecryptKey: z.object({
          type: z.string(),
          default: z.null(),
          description: z.string(),
        }),
        dbExpire: z.object({
          type: z.string(),
          properties: z.object({
            events: z.object({
              type: z.string(),
              default: z.number(),
              description: z.string(),
            }),
            powerevents: z.object({
              type: z.string(),
              default: z.number(),
              description: z.string(),
            }),
            statsevents: z.object({
              type: z.string(),
              default: z.number(),
              description: z.string(),
            }),
          }),
        }),
        port: z.object({
          type: z.string(),
          minimum: z.number(),
          maximum: z.number(),
          default: z.number(),
          description: z.string(),
        }),
        portBind: z.object({ type: z.string(), description: z.string() }),
        aliasPort: z.object({
          type: z.string(),
          minimum: z.number(),
          maximum: z.number(),
          default: z.null(),
          description: z.string(),
        }),
        redirPort: z.object({
          type: z.string(),
          minimum: z.number(),
          maximum: z.number(),
          default: z.number(),
          description: z.string(),
        }),
        redirPortBind: z.object({ type: z.string(), description: z.string() }),
        redirAliasPort: z.object({
          type: z.string(),
          minimum: z.number(),
          maximum: z.number(),
          description: z.string(),
        }),
        relayPort: z.object({
          type: z.string(),
          minimum: z.number(),
          maximum: z.number(),
          default: z.number(),
          description: z.string(),
        }),
        relayAliasPort: z.object({
          type: z.string(),
          minimum: z.number(),
          maximum: z.number(),
          default: z.null(),
          description: z.string(),
        }),
        relayDNS: z.object({
          type: z.string(),
          default: z.null(),
          description: z.string(),
        }),
        agentPort: z.object({
          type: z.string(),
          minimum: z.number(),
          maximum: z.number(),
          description: z.string(),
        }),
        agentPortBind: z.object({ type: z.string(), description: z.string() }),
        agentAliasPort: z.object({
          type: z.string(),
          minimum: z.number(),
          maximum: z.number(),
          description: z.string(),
        }),
        agentAliasDNS: z.object({
          type: z.string(),
          format: z.string(),
          description: z.string(),
        }),
        agentPortTls: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        agentLogDump: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        agentCoreDump: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        agentCoreDumpUsers: z.object({
          type: z.string(),
          description: z.string(),
        }),
        agentSignLock: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        agentTimeStampServer: z.object({
          type: z.array(z.string()),
          default: z.string(),
          description: z.string(),
        }),
        agentTimeStampProxy: z.object({
          type: z.array(z.string()),
          description: z.string(),
        }),
        lockAgentDownload: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        ignoreAgentHashCheck: z.object({
          type: z.array(z.string()),
          default: z.boolean(),
          description: z.string(),
        }),
        exactPorts: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        allowLoginToken: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        StrictTransportSecurity: z.object({
          type: z.array(z.string()),
          default: z.null(),
          description: z.string(),
        }),
        allowFraming: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        cookieIpCheck: z.object({
          type: z.array(z.string()),
          default: z.string(),
          enum: z.array(z.string()),
        }),
        cookieEncoding: z.object({
          type: z.string(),
          enum: z.array(z.string()),
          default: z.string(),
          description: z.string(),
        }),
        webRTC: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        nice404: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        selfUpdate: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        cleanNpmCacheOnUpdate: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        browserPing: z.object({
          type: z.string(),
          minimum: z.number(),
          description: z.string(),
        }),
        browserPong: z.object({
          type: z.string(),
          minimum: z.number(),
          description: z.string(),
        }),
        agentsInRam: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        agentPing: z.object({
          type: z.string(),
          minimum: z.number(),
          description: z.string(),
        }),
        agentPong: z.object({
          type: z.string(),
          minimum: z.number(),
          description: z.string(),
        }),
        amtManager: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        orphanAgentUser: z.object({
          type: z.string(),
          default: z.null(),
          description: z.string(),
        }),
        agentIdleTimeout: z.object({
          type: z.string(),
          minimum: z.number(),
          default: z.number(),
          description: z.string(),
        }),
        webPageLengthRandomization: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        compression: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        wsCompression: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        agentWsCompression: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        noAgentUpdate: z.object({
          type: z.string(),
          default: z.number(),
          description: z.string(),
        }),
        agentUpdateSystem: z.object({
          type: z.string(),
          default: z.number(),
          description: z.string(),
        }),
        temporaryAgentUpdate: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        amtScanner: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        meshScanner: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        meshErrorLogPath: z.object({ type: z.string() }),
        npmPath: z.object({ type: z.string() }),
        npmProxy: z.object({ type: z.string(), format: z.string() }),
        allowHighQualityDesktop: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        webPush: z.object({
          type: z.string(),
          description: z.string(),
          additionalProperties: z.boolean(),
          properties: z.object({
            email: z.object({ type: z.string(), description: z.string() }),
          }),
          required: z.array(z.string()),
        }),
        RunOnServerStarted: z.object({
          type: z.string(),
          default: z.null(),
          description: z.string(),
        }),
        RunOnServerUpdated: z.object({
          type: z.string(),
          default: z.null(),
          description: z.string(),
        }),
        RunOnServerError: z.object({
          type: z.string(),
          default: z.null(),
          description: z.string(),
        }),
        publicPushNotifications: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        desktopMultiplex: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        ipBlockedUserRedirect: z.object({
          type: z.string(),
          default: z.null(),
          description: z.string(),
        }),
        userAllowedIP: z.object({
          type: z.array(z.string()),
          default: z.null(),
          description: z.string(),
        }),
        userBlockedIP: z.object({
          type: z.array(z.string()),
          default: z.null(),
          description: z.string(),
        }),
        agentAllowedIP: z.object({
          type: z.array(z.string()),
          default: z.null(),
          description: z.string(),
        }),
        agentBlockedIP: z.object({
          type: z.array(z.string()),
          default: z.null(),
          description: z.string(),
        }),
        authLog: z.object({
          type: z.string(),
          default: z.null(),
          description: z.string(),
        }),
        InterUserMessaging: z.object({
          type: z.string(),
          uniqueItems: z.boolean(),
          items: z.object({ type: z.string() }),
          description: z.string(),
        }),
        manageAllDeviceGroups: z.object({
          type: z.string(),
          uniqueItems: z.boolean(),
          items: z.object({ type: z.string() }),
          description: z.string(),
        }),
        manageCrossDomain: z.object({
          type: z.string(),
          uniqueItems: z.boolean(),
          items: z.object({ type: z.string() }),
          description: z.string(),
        }),
        localDiscovery: z.object({
          type: z.string(),
          description: z.string(),
          additionalProperties: z.boolean(),
          properties: z.object({
            name: z.object({ type: z.string() }),
            info: z.object({ type: z.string() }),
            key: z.object({ type: z.string(), description: z.string() }),
          }),
          required: z.array(z.string()),
        }),
        tlsOffload: z.object({
          type: z.array(z.string()),
          default: z.boolean(),
          description: z.string(),
        }),
        trustedProxy: z.object({
          type: z.string(),
          default: z.null(),
          description: z.string(),
        }),
        mpsPort: z.object({
          type: z.string(),
          minimum: z.number(),
          maximum: z.number(),
          default: z.number(),
          description: z.string(),
        }),
        mpsPortBind: z.object({ type: z.string(), default: z.null() }),
        mpsAliasPort: z.object({
          type: z.string(),
          minimum: z.number(),
          maximum: z.number(),
          default: z.null(),
        }),
        mpsAliasHost: z.object({ type: z.string(), default: z.null() }),
        mpsTlsOffload: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        mpsHighSecurity: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        no2FactorAuth: z.object({ type: z.string(), default: z.boolean() }),
        log: z.object({ type: z.string(), default: z.null() }),
        syslog: z.object({ type: z.string(), default: z.null() }),
        syslogauth: z.object({ type: z.string(), default: z.null() }),
        syslogjson: z.object({ type: z.string(), default: z.null() }),
        syslogtcp: z.object({
          type: z.string(),
          default: z.null(),
          description: z.string(),
        }),
        webrtcConfig: z.object({
          type: z.string(),
          additionalProperties: z.boolean(),
          description: z.string(),
          properties: z.object({
            iceServers: z.object({
              type: z.string(),
              uniqueItems: z.boolean(),
              items: z.object({
                type: z.string(),
                additionalProperties: z.boolean(),
                properties: z.object({ urls: z.object({ type: z.string() }) }),
                required: z.array(z.string()),
              }),
            }),
          }),
          required: z.array(z.string()),
        }),
        crowdsec: z.object({
          type: z.string(),
          additionalProperties: z.boolean(),
          description: z.string(),
          properties: z.object({
            url: z.object({ type: z.string(), description: z.string() }),
            apiKey: z.object({ type: z.string(), description: z.string() }),
            fallbackRemediation: z.object({
              type: z.string(),
              default: z.string(),
              enum: z.array(z.string()),
              description: z.string(),
            }),
          }),
          required: z.array(z.string()),
        }),
        autoBackup: z.object({
          type: z.string(),
          properties: z.object({
            mongoDumpPath: z.object({ type: z.string() }),
            mysqlDumpPath: z.object({ type: z.string() }),
            backupIntervalHours: z.object({ type: z.string() }),
            keepLastDaysBackup: z.object({ type: z.string() }),
            zipPassword: z.object({ type: z.string() }),
            backupPath: z.object({ type: z.string() }),
            googleDrive: z.object({
              type: z.string(),
              description: z.string(),
              properties: z.object({
                folderName: z.object({
                  type: z.string(),
                  default: z.string(),
                  description: z.string(),
                }),
                maxFiles: z.object({
                  type: z.string(),
                  default: z.null(),
                  description: z.string(),
                }),
              }),
            }),
            webDAV: z.object({
              type: z.string(),
              description: z.string(),
              properties: z.object({
                url: z.object({ type: z.string(), description: z.string() }),
                username: z.object({
                  type: z.string(),
                  description: z.string(),
                }),
                password: z.object({
                  type: z.string(),
                  description: z.string(),
                }),
                folderName: z.object({
                  type: z.string(),
                  default: z.string(),
                  description: z.string(),
                }),
                maxFiles: z.object({
                  type: z.string(),
                  default: z.null(),
                  description: z.string(),
                }),
              }),
            }),
          }),
        }),
        rootCertCommonName: z.object({
          type: z.string(),
          default: z.string(),
          description: z.string(),
        }),
        redirects: z.object({ type: z.string() }),
        maxInvalidLogin: z.object({
          type: z.string(),
          additionalProperties: z.boolean(),
          description: z.string(),
          properties: z.object({
            exclude: z.object({
              type: z.string(),
              default: z.null(),
              description: z.string(),
            }),
            time: z.object({
              type: z.string(),
              default: z.number(),
              description: z.string(),
            }),
            count: z.object({
              type: z.string(),
              default: z.number(),
              description: z.string(),
            }),
            coolofftime: z.object({
              type: z.string(),
              default: z.null(),
              description: z.string(),
            }),
          }),
        }),
        maxInvalid2fa: z.object({
          type: z.string(),
          additionalProperties: z.boolean(),
          description: z.string(),
          properties: z.object({
            exclude: z.object({
              type: z.string(),
              default: z.null(),
              description: z.string(),
            }),
            time: z.object({
              type: z.string(),
              default: z.number(),
              description: z.string(),
            }),
            count: z.object({
              type: z.string(),
              default: z.number(),
              description: z.string(),
            }),
            coolofftime: z.object({
              type: z.string(),
              default: z.null(),
              description: z.string(),
            }),
          }),
        }),
        amtProvisioningServer: z.object({
          type: z.string(),
          additionalProperties: z.boolean(),
          required: z.array(z.string()),
          description: z.string(),
          properties: z.object({
            port: z.object({
              type: z.string(),
              default: z.number(),
              description: z.string(),
            }),
            deviceGroup: z.object({
              type: z.string(),
              description: z.string(),
            }),
            newMebxPassword: z.object({
              type: z.string(),
              description: z.string(),
            }),
            trustedFqdn: z.object({
              type: z.string(),
              description: z.string(),
            }),
            ip: z.object({ type: z.string(), description: z.string() }),
          }),
        }),
        plugins: z.object({
          type: z.string(),
          properties: z.object({ enabled: z.object({ type: z.string() }) }),
          required: z.array(z.string()),
        }),
      }),
    }),
    domaindefaults: z.object({ $ref: z.string() }),
    domains: z.object({
      type: z.string(),
      items: z.object({
        type: z.string(),
        properties: z.object({
          dns: z.object({
            type: z.string(),
            default: z.null(),
            description: z.string(),
          }),
          siteStyle: z.object({
            type: z.string(),
            default: z.number(),
            description: z.string(),
          }),
          title: z.object({
            type: z.string(),
            default: z.string(),
            description: z.string(),
          }),
          title2: z.object({
            type: z.string(),
            default: z.null(),
            description: z.string(),
          }),
          titlePicture: z.object({
            type: z.string(),
            default: z.null(),
            description: z.string(),
          }),
          loginPicture: z.object({
            type: z.string(),
            default: z.null(),
            description: z.string(),
          }),
          rootRedirect: z.object({
            type: z.string(),
            default: z.null(),
            description: z.string(),
          }),
          mobileSite: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          maxDeviceView: z.object({
            type: z.string(),
            default: z.null(),
            description: z.string(),
          }),
          unknownUserRootRedirect: z.object({
            type: z.string(),
            default: z.null(),
            description: z.string(),
          }),
          nightMode: z.object({
            type: z.string(),
            default: z.number(),
            description: z.string(),
          }),
          scrollToTop: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          userQuota: z.object({ type: z.string() }),
          meshQuota: z.object({ type: z.string() }),
          loginKey: z.object({
            type: z.array(z.string()),
            items: z.object({ type: z.string() }),
            default: z.null(),
            description: z.string(),
          }),
          agentKey: z.object({
            type: z.array(z.string()),
            items: z.object({ type: z.string() }),
            default: z.null(),
            description: z.string(),
          }),
          ipkvm: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          minify: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          newAccounts: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          newAccountsPass: z.object({
            type: z.string(),
            default: z.null(),
            description: z.string(),
          }),
          newAccountsCaptcha: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          newAccountsUserGroups: z.object({
            type: z.string(),
            uniqueItems: z.boolean(),
            items: z.object({ type: z.string() }),
          }),
          userNameIsEmail: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          newAccountEmailDomains: z.object({
            type: z.string(),
            uniqueItems: z.boolean(),
            items: z.object({ type: z.string() }),
          }),
          newAccountsRights: z.object({
            type: z.string(),
            uniqueItems: z.boolean(),
            items: z.object({ type: z.string() }),
          }),
          welcomeText: z.object({ type: z.string(), description: z.string() }),
          welcomePicture: z.object({
            type: z.string(),
            description: z.string(),
          }),
          welcomePictureFullScreen: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          meshMessengerTitle: z.object({
            type: z.string(),
            default: z.string(),
            description: z.string(),
          }),
          meshMessengerPicture: z.object({
            type: z.string(),
            default: z.null(),
            description: z.string(),
          }),
          hide: z.object({
            type: z.string(),
            default: z.number(),
            description: z.string(),
          }),
          footer: z.object({
            type: z.string(),
            default: z.null(),
            description: z.string(),
          }),
          loginfooter: z.object({
            type: z.string(),
            default: z.null(),
            description: z.string(),
          }),
          allowSavingDeviceCredentials: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          trustedCert: z.object({ type: z.string(), default: z.string() }),
          guestDeviceSharing: z.object({
            type: z.array(z.string()),
            default: z.boolean(),
            description: z.string(),
            properties: z.object({
              maxSessionTime: z.object({
                type: z.string(),
                description: z.string(),
              }),
            }),
          }),
          autoRemoveInactiveDevices: z.object({
            type: z.string(),
            default: z.number(),
            minimum: z.number(),
            maximum: z.number(),
            description: z.string(),
          }),
          deviceSearchBarServerAndClientName: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          deviceSearchBarGroupName: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          agentSelfGuestSharing: z.object({
            type: z.array(z.string()),
            default: z.boolean(),
            description: z.string(),
            properties: z.object({
              expire: z.object({ type: z.string(), description: z.string() }),
            }),
          }),
          PreconfiguredScripts: z.object({
            type: z.string(),
            default: z.null(),
            description: z.string(),
            items: z.object({
              type: z.string(),
              required: z.array(z.string()),
              properties: z.object({
                name: z.object({ description: z.string(), type: z.string() }),
                type: z.object({
                  description: z.string(),
                  type: z.string(),
                  enum: z.array(z.string()),
                }),
                runas: z.object({
                  description: z.string(),
                  type: z.string(),
                  enum: z.array(z.string()),
                }),
                cmd: z.object({ description: z.string(), type: z.string() }),
                file: z.object({ description: z.string(), type: z.string() }),
              }),
            }),
          }),
          preConfiguredRemoteInput: z.object({
            type: z.string(),
            default: z.null(),
            description: z.string(),
            items: z.object({
              type: z.string(),
              required: z.array(z.string()),
              properties: z.object({
                name: z.object({ description: z.string(), type: z.string() }),
                value: z.object({ description: z.string(), type: z.string() }),
              }),
            }),
          }),
          altMessenging: z.object({
            type: z.string(),
            items: z.object({
              type: z.string(),
              properties: z.object({
                name: z.object({ type: z.string(), description: z.string() }),
                url: z.object({ type: z.string(), description: z.string() }),
                localurl: z.object({
                  type: z.string(),
                  description: z.string(),
                }),
                type: z.object({
                  type: z.string(),
                  enum: z.array(z.union([z.null(), z.string()])),
                  default: z.null(),
                  description: z.string(),
                }),
              }),
              required: z.array(z.string()),
            }),
          }),
          deviceMeshRouterLinks: z.object({
            type: z.string(),
            properties: z.object({
              rdp: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              ssh: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              scp: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              extralinks: z.object({
                type: z.string(),
                items: z.object({
                  type: z.string(),
                  additionalProperties: z.boolean(),
                  required: z.array(z.string()),
                  properties: z.object({
                    name: z.object({
                      description: z.string(),
                      type: z.string(),
                    }),
                    protocol: z.object({
                      description: z.string(),
                      type: z.string(),
                    }),
                    port: z.object({
                      description: z.string(),
                      default: z.number(),
                      minimum: z.number(),
                      maximum: z.number(),
                      type: z.string(),
                    }),
                    ip: z.object({ description: z.string(), type: z.string() }),
                    localport: z.object({
                      description: z.string(),
                      default: z.number(),
                      minimum: z.number(),
                      maximum: z.number(),
                      type: z.string(),
                    }),
                    filter: z.object({
                      description: z.string(),
                      type: z.string(),
                      items: z.object({ type: z.string() }),
                    }),
                  }),
                }),
              }),
            }),
          }),
          certUrl: z.object({
            type: z.string(),
            format: z.string(),
            description: z.string(),
          }),
          myServer: z.object({
            type: z.array(z.string()),
            additionalProperties: z.boolean(),
            properties: z.object({
              Backup: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              Restore: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              Upgrade: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              ErrorLog: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              Console: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              Trace: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              Config: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
            }),
          }),
          passwordRequirements: z.object({
            type: z.string(),
            properties: z.object({
              min: z.object({ type: z.string(), description: z.string() }),
              max: z.object({ type: z.string(), description: z.string() }),
              upper: z.object({ type: z.string(), description: z.string() }),
              lower: z.object({ type: z.string(), description: z.string() }),
              numeric: z.object({ type: z.string(), description: z.string() }),
              nonalpha: z.object({ type: z.string(), description: z.string() }),
              reset: z.object({ type: z.string(), description: z.string() }),
              email2factor: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              sms2factor: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              push2factor: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              otp2factor: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              msg2factor: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              backupcode2factor: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              single2factorWarning: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              lock2factor: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              force2factor: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              skip2factor: z.object({
                type: z.string(),
                description: z.string(),
              }),
              oldPasswordBan: z.object({
                type: z.string(),
                description: z.string(),
              }),
              banCommonPasswords: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              loginTokens: z.object({
                type: z.array(z.string()),
                default: z.boolean(),
                description: z.string(),
              }),
              twoFactorTimeout: z.object({
                type: z.string(),
                default: z.number(),
                description: z.string(),
              }),
              autofido2fa: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              maxfidokeys: z.object({
                type: z.string(),
                default: z.null(),
                description: z.string(),
              }),
              allowaccountreset: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
            }),
          }),
          twoFactorCookieDurationDays: z.object({
            type: z.string(),
            default: z.number(),
            description: z.string(),
          }),
          auth: z.object({
            type: z.string(),
            default: z.null(),
            enum: z.array(z.union([z.null(), z.string()])),
            description: z.string(),
          }),
          ldapUserKey: z.object({
            type: z.string(),
            default: z.null(),
            description: z.string(),
          }),
          ldapUserBinaryKey: z.object({
            type: z.string(),
            default: z.string(),
            description: z.string(),
          }),
          ldapUserName: z.object({
            type: z.string(),
            default: z.string(),
            description: z.string(),
          }),
          ldapUserEmail: z.object({
            type: z.string(),
            default: z.string(),
            description: z.string(),
          }),
          ldapUserRealName: z.object({
            type: z.string(),
            default: z.string(),
            description: z.string(),
          }),
          ldapUserPhoneNumber: z.object({
            type: z.string(),
            default: z.string(),
            description: z.string(),
          }),
          ldapUserImage: z.object({
            type: z.string(),
            default: z.string(),
            description: z.string(),
          }),
          ldapSaveUserToFile: z.object({
            type: z.string(),
            default: z.null(),
            description: z.string(),
          }),
          ldapUserGroups: z.object({
            type: z.string(),
            default: z.string(),
            description: z.string(),
          }),
          ldapSyncWithUserGroups: z.object({
            type: z.array(z.string()),
            default: z.boolean(),
            description: z.string(),
            additionalProperties: z.boolean(),
            properties: z.object({
              filter: z.object({
                type: z.array(z.string()),
                default: z.null(),
                description: z.string(),
              }),
            }),
          }),
          ldapSiteAdminGroups: z.object({
            type: z.array(z.string()),
            default: z.null(),
            description: z.string(),
          }),
          ldapUserRequiredGroupMembership: z.object({
            type: z.array(z.string()),
            default: z.null(),
            description: z.string(),
          }),
          ldapOptions: z.object({ type: z.string(), description: z.string() }),
          hidePowerTimeline: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          showNotesPanel: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          agentInviteCodes: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          agentNoProxy: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          agentTag: z.object({
            type: z.string(),
            description: z.string(),
            additionalProperties: z.boolean(),
            properties: z.object({
              ServerName: z.object({
                type: z.string(),
                default: z.number(),
                description: z.string(),
              }),
              ServerDesc: z.object({
                type: z.string(),
                default: z.number(),
                description: z.string(),
              }),
              ServerTags: z.object({
                type: z.string(),
                default: z.number(),
                description: z.string(),
              }),
            }),
          }),
          lockAgentDownload: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          geoLocation: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          novnc: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          mstsc: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          ssh: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          webEmailsPath: z.object({
            type: z.string(),
            description: z.string(),
          }),
          customUI: z.object({ type: z.string() }),
          consentMessages: z.object({
            type: z.string(),
            description: z.string(),
            additionalProperties: z.boolean(),
            properties: z.object({
              Title: z.object({ type: z.string() }),
              Desktop: z.object({ type: z.string() }),
              Terminal: z.object({ type: z.string() }),
              Files: z.object({ type: z.string() }),
              consentTimeout: z.object({
                type: z.string(),
                default: z.number(),
                description: z.string(),
              }),
              autoAcceptOnTimeout: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
            }),
          }),
          notificationMessages: z.object({
            type: z.string(),
            additionalProperties: z.boolean(),
            description: z.string(),
            properties: z.object({
              Title: z.object({ type: z.string() }),
              Desktop: z.object({ type: z.string() }),
              Terminal: z.object({ type: z.string() }),
              Files: z.object({ type: z.string() }),
            }),
          }),
          agentCustomization: z.object({
            type: z.string(),
            additionalProperties: z.boolean(),
            description: z.string(),
            properties: z.object({
              displayName: z.object({
                type: z.string(),
                default: z.string(),
                description: z.string(),
              }),
              description: z.object({
                type: z.string(),
                default: z.string(),
                description: z.string(),
              }),
              companyName: z.object({
                type: z.string(),
                default: z.string(),
                description: z.string(),
              }),
              serviceName: z.object({
                type: z.string(),
                default: z.string(),
                description: z.string(),
              }),
              installText: z.object({
                type: z.string(),
                default: z.null(),
                description: z.string(),
              }),
              image: z.object({
                type: z.string(),
                default: z.null(),
                description: z.string(),
              }),
              fileName: z.object({
                type: z.string(),
                default: z.string(),
                description: z.string(),
              }),
              foregroundColor: z.object({
                type: z.string(),
                default: z.null(),
                description: z.string(),
              }),
              backgroundColor: z.object({
                type: z.string(),
                default: z.null(),
                description: z.string(),
              }),
            }),
          }),
          agentFileInfo: z.object({
            type: z.string(),
            additionalProperties: z.boolean(),
            description: z.string(),
            properties: z.object({
              icon: z.object({ type: z.string(), description: z.string() }),
              fileDescription: z.object({
                type: z.string(),
                description: z.string(),
              }),
              fileVersion: z.object({
                type: z.string(),
                description: z.string(),
              }),
              internalName: z.object({
                type: z.string(),
                description: z.string(),
              }),
              legalCopyright: z.object({
                type: z.string(),
                description: z.string(),
              }),
              originalFilename: z.object({
                type: z.string(),
                description: z.string(),
              }),
              productName: z.object({
                type: z.string(),
                description: z.string(),
              }),
              productVersion: z.object({
                type: z.string(),
                description: z.string(),
              }),
            }),
          }),
          assistantCustomization: z.object({
            type: z.string(),
            additionalProperties: z.boolean(),
            description: z.string(),
            properties: z.object({
              title: z.object({
                type: z.string(),
                default: z.string(),
                description: z.string(),
              }),
              image: z.object({
                type: z.string(),
                default: z.null(),
                description: z.string(),
              }),
              fileName: z.object({
                type: z.string(),
                default: z.string(),
                description: z.string(),
              }),
            }),
          }),
          androidCustomization: z.object({
            type: z.string(),
            additionalProperties: z.boolean(),
            description: z.string(),
            properties: z.object({
              title: z.object({
                type: z.string(),
                default: z.string(),
                description: z.string(),
              }),
              subtitle: z.object({
                type: z.string(),
                default: z.null(),
                description: z.string(),
              }),
              image: z.object({
                type: z.string(),
                default: z.null(),
                description: z.string(),
              }),
            }),
          }),
          ipBlockedUserRedirect: z.object({
            type: z.string(),
            default: z.null(),
            description: z.string(),
          }),
          userRequiredHttpHeader: z.object({
            type: z.string(),
            default: z.null(),
            description: z.string(),
          }),
          userAllowedIP: z.object({
            type: z.array(z.string()),
            default: z.null(),
            description: z.string(),
          }),
          userBlockedIP: z.object({
            type: z.array(z.string()),
            default: z.null(),
            description: z.string(),
          }),
          agentAllowedIP: z.object({
            type: z.array(z.string()),
            default: z.null(),
            description: z.string(),
          }),
          agentBlockedIP: z.object({
            type: z.array(z.string()),
            default: z.null(),
            description: z.string(),
          }),
          userSessionIdleTimeout: z.object({
            type: z.string(),
            default: z.null(),
            description: z.string(),
          }),
          userConsentFlags: z.object({
            type: z.string(),
            additionalProperties: z.boolean(),
            description: z.string(),
            properties: z.object({
              desktopnotify: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              terminalnotify: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              filenotify: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              desktopprompt: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              terminalprompt: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              fileprompt: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              desktopprivacybar: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
            }),
          }),
          urlSwitching: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          desktopPrivacyBarText: z.object({
            type: z.string(),
            description: z.string(),
          }),
          limits: z.object({
            type: z.string(),
            additionalProperties: z.boolean(),
            properties: z.object({
              MaxDevices: z.object({
                type: z.string(),
                default: z.null(),
                description: z.string(),
              }),
              MaxUserAccounts: z.object({
                type: z.string(),
                default: z.null(),
                description: z.string(),
              }),
              MaxUserSessions: z.object({
                type: z.string(),
                default: z.null(),
                description: z.string(),
              }),
              MaxAgentSessions: z.object({
                type: z.string(),
                default: z.null(),
                description: z.string(),
              }),
              MaxSingleUserSessions: z.object({
                type: z.string(),
                default: z.null(),
                description: z.string(),
              }),
            }),
          }),
          files: z.object({
            type: z.string(),
            description: z.string(),
            properties: z.object({
              sftpConnect: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
            }),
          }),
          terminal: z.object({
            type: z.string(),
            description: z.string(),
            properties: z.object({
              sshConnect: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              linuxShell: z.object({
                type: z.string(),
                enum: z.array(z.string()),
                default: z.string(),
                description: z.string(),
              }),
              launchCommand: z.object({
                type: z.string(),
                description: z.string(),
                linux: z.object({
                  type: z.string(),
                  default: z.string(),
                  description: z.string(),
                }),
                darwin: z.object({
                  type: z.string(),
                  default: z.null(),
                  description: z.string(),
                }),
                freebsd: z.object({
                  type: z.string(),
                  default: z.null(),
                  description: z.string(),
                }),
              }),
            }),
          }),
          desktop: z.object({
            type: z.string(),
            description: z.string(),
            properties: z.object({
              viewonly: z.object({
                type: z.string(),
                description: z.string(),
                default: z.string(),
              }),
            }),
          }),
          amtScanOptions: z.object({
            description: z.string(),
            type: z.string(),
            default: z.null(),
            items: z.object({ type: z.string() }),
          }),
          amtManager: z.object({
            type: z.string(),
            additionalProperties: z.boolean(),
            description: z.string(),
            properties: z.object({
              TlsConnections: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              TlsAcmActivation: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              AdminAccounts: z.object({
                description: z.string(),
                type: z.string(),
                items: z.object({
                  type: z.string(),
                  additionalProperties: z.boolean(),
                  required: z.array(z.string()),
                  properties: z.object({
                    user: z.object({
                      description: z.string(),
                      type: z.string(),
                      default: z.string(),
                    }),
                    pass: z.object({
                      description: z.string(),
                      type: z.string(),
                    }),
                  }),
                }),
              }),
              EnvironmentDetection: z.object({
                description: z.string(),
                type: z.string(),
                items: z.object({
                  type: z.string(),
                  minItems: z.number(),
                  maxItems: z.number(),
                  uniqueItems: z.boolean(),
                }),
              }),
              TlsRootCert: z.object({
                description: z.string(),
                type: z.string(),
                properties: z.object({
                  certpfx: z.object({
                    description: z.string(),
                    type: z.string(),
                  }),
                  certpfxpass: z.object({
                    description: z.string(),
                    type: z.string(),
                  }),
                  certfile: z.object({
                    description: z.string(),
                    type: z.string(),
                  }),
                  keyfile: z.object({
                    description: z.string(),
                    type: z.string(),
                  }),
                }),
              }),
              WifiProfiles: z.object({
                description: z.string(),
                type: z.string(),
                items: z.object({
                  type: z.string(),
                  additionalProperties: z.boolean(),
                  required: z.array(z.string()),
                  properties: z.object({
                    name: z.object({
                      description: z.string(),
                      type: z.string(),
                    }),
                    ssid: z.object({
                      description: z.string(),
                      type: z.string(),
                    }),
                    authentication: z.object({
                      description: z.string(),
                      type: z.string(),
                      enum: z.array(z.string()),
                      default: z.string(),
                    }),
                    encryption: z.object({
                      description: z.string(),
                      type: z.string(),
                      enum: z.array(z.string()),
                      default: z.string(),
                    }),
                    password: z.object({
                      description: z.string(),
                      type: z.string(),
                      minLength: z.number(),
                      maxLength: z.number(),
                    }),
                    "802.1x": z.object({
                      description: z.string(),
                      default: z.null(),
                      type: z.string(),
                      additionalProperties: z.boolean(),
                      required: z.array(z.string()),
                      properties: z.object({
                        authenticationProtocol: z.object({
                          description: z.string(),
                          type: z.array(z.string()),
                          enum: z.array(z.union([z.string(), z.number()])),
                        }),
                        serverCertificateNameComparison: z.object({
                          type: z.array(z.string()),
                          default: z.string(),
                          description: z.string(),
                          enum: z.array(z.union([z.string(), z.number()])),
                        }),
                        serverCertificateName: z.object({
                          type: z.string(),
                          default: z.null(),
                          description: z.string(),
                          maxLength: z.number(),
                        }),
                        availableInS0: z.object({
                          type: z.string(),
                          default: z.boolean(),
                          description: z.string(),
                        }),
                        protectedAccessCredentialHex: z.object({
                          type: z.string(),
                          default: z.null(),
                          description: z.string(),
                          maxLength: z.number(),
                        }),
                        pacPassword: z.object({
                          type: z.string(),
                          default: z.null(),
                          description: z.string(),
                          maxLength: z.number(),
                        }),
                        domain: z.object({
                          type: z.string(),
                          default: z.null(),
                          description: z.string(),
                          maxLength: z.number(),
                        }),
                        username: z.object({
                          type: z.string(),
                          default: z.null(),
                          description: z.string(),
                          maxLength: z.number(),
                        }),
                        password: z.object({
                          type: z.string(),
                          default: z.null(),
                          description: z.string(),
                          maxLength: z.number(),
                        }),
                        roamingIdentity: z.object({
                          type: z.string(),
                          default: z.null(),
                          description: z.string(),
                          maxLength: z.number(),
                        }),
                        pxeTimeoutInSeconds: z.object({
                          type: z.string(),
                          default: z.number(),
                          description: z.string(),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              "802.1x": z.object({
                description: z.string(),
                default: z.null(),
                type: z.array(z.string()),
                additionalProperties: z.boolean(),
                required: z.array(z.string()),
                properties: z.object({
                  authenticationProtocol: z.object({
                    description: z.string(),
                    type: z.array(z.string()),
                    enum: z.array(z.union([z.string(), z.number()])),
                  }),
                  serverCertificateNameComparison: z.object({
                    type: z.array(z.string()),
                    description: z.string(),
                    enum: z.array(z.union([z.string(), z.number()])),
                  }),
                  serverCertificateName: z.object({
                    type: z.string(),
                    default: z.null(),
                    description: z.string(),
                    maxLength: z.number(),
                  }),
                  availableInS0: z.object({
                    type: z.string(),
                    default: z.boolean(),
                    description: z.string(),
                  }),
                  protectedAccessCredentialHex: z.object({
                    type: z.string(),
                    default: z.null(),
                    description: z.string(),
                    maxLength: z.number(),
                  }),
                  pacPassword: z.object({
                    type: z.string(),
                    default: z.null(),
                    description: z.string(),
                    maxLength: z.number(),
                  }),
                  domain: z.object({
                    type: z.string(),
                    default: z.null(),
                    description: z.string(),
                    maxLength: z.number(),
                  }),
                  username: z.object({
                    type: z.string(),
                    default: z.null(),
                    description: z.string(),
                    maxLength: z.number(),
                  }),
                  password: z.object({
                    type: z.string(),
                    default: z.null(),
                    description: z.string(),
                    maxLength: z.number(),
                  }),
                  roamingIdentity: z.object({
                    type: z.string(),
                    default: z.null(),
                    description: z.string(),
                    maxLength: z.number(),
                  }),
                  pxeTimeoutInSeconds: z.object({
                    type: z.string(),
                    default: z.number(),
                    description: z.string(),
                  }),
                }),
              }),
            }),
          }),
          amtAcmActivation: z.object({
            type: z.string(),
            additionalProperties: z.boolean(),
            properties: z.object({
              log: z.object({ type: z.string() }),
              strictCommonName: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              certs: z.object({
                type: z.string(),
                additionalProperties: z.object({
                  type: z.string(),
                  additionalProperties: z.boolean(),
                  properties: z.object({
                    certfiles: z.object({
                      type: z.string(),
                      uniqueItems: z.boolean(),
                      items: z.object({ type: z.string() }),
                    }),
                    keyfile: z.object({ type: z.string() }),
                  }),
                  required: z.array(z.string()),
                }),
              }),
            }),
            required: z.array(z.string()),
          }),
          redirects: z.object({
            type: z.string(),
            additionalProperties: z.object({ type: z.string() }),
            description: z.string(),
          }),
          yubikey: z.object({
            type: z.string(),
            additionalProperties: z.boolean(),
            properties: z.object({
              id: z.object({ type: z.string() }),
              secret: z.object({ type: z.string() }),
              proxy: z.object({ type: z.string(), format: z.string() }),
            }),
            required: z.array(z.string()),
          }),
          httpHeaders: z.object({
            type: z.string(),
            additionalProperties: z.object({ type: z.string() }),
          }),
          agentConfig: z.object({
            type: z.string(),
            uniqueItems: z.boolean(),
            items: z.object({ type: z.string() }),
            default: z.null(),
            description: z.string(),
          }),
          assistantConfig: z.object({
            type: z.string(),
            uniqueItems: z.boolean(),
            items: z.object({ type: z.string() }),
            default: z.null(),
            description: z.string(),
          }),
          clipboardGet: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          clipboardSet: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          localSessionRecording: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          sessionRecording: z.object({
            type: z.string(),
            additionalProperties: z.boolean(),
            properties: z.object({
              onlySelectedUsers: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              onlySelectedUserGroups: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              onlySelectedDeviceGroups: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              filepath: z.object({ type: z.string(), description: z.string() }),
              index: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              maxRecordings: z.object({
                type: z.string(),
                default: z.null(),
                description: z.string(),
              }),
              maxRecordingDays: z.object({
                type: z.string(),
                default: z.null(),
                description: z.string(),
              }),
              maxRecordingSizeMegabytes: z.object({
                type: z.string(),
                default: z.null(),
                description: z.string(),
              }),
              protocols: z.object({
                type: z.string(),
                uniqueItems: z.boolean(),
                items: z.object({ type: z.string() }),
                description: z.string(),
              }),
            }),
            required: z.array(z.string()),
          }),
          showPasswordLogin: z.object({
            type: z.string(),
            default: z.boolean(),
            description: z.string(),
          }),
          sendgrid: z.object({
            title: z.string(),
            description: z.string(),
            type: z.string(),
            properties: z.object({
              from: z.object({
                type: z.string(),
                format: z.string(),
                description: z.string(),
              }),
              apikey: z.object({ type: z.string(), description: z.string() }),
              verifyemail: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              emailDelaySeconds: z.object({
                type: z.string(),
                default: z.number(),
                description: z.string(),
              }),
            }),
            required: z.array(z.string()),
          }),
          smtp: z.object({
            title: z.string(),
            description: z.string(),
            type: z.string(),
            properties: z.object({
              name: z.object({
                type: z.string(),
                format: z.string(),
                description: z.string(),
              }),
              host: z.object({
                type: z.string(),
                format: z.string(),
                description: z.string(),
              }),
              port: z.object({
                type: z.string(),
                minimum: z.number(),
                maximum: z.number(),
                description: z.string(),
              }),
              from: z.object({
                type: z.string(),
                format: z.string(),
                description: z.string(),
              }),
              tls: z.object({ type: z.string() }),
              auth: z.object({
                type: z.string(),
                properties: z.object({
                  clientId: z.object({ type: z.string() }),
                  clientSecret: z.object({ type: z.string() }),
                  refreshToken: z.object({ type: z.string() }),
                }),
                required: z.array(z.string()),
              }),
              tlscertcheck: z.object({ type: z.string() }),
              tlsstrict: z.object({ type: z.string() }),
              verifyemail: z.object({
                type: z.string(),
                default: z.boolean(),
                description: z.string(),
              }),
              emailDelaySeconds: z.object({
                type: z.string(),
                default: z.number(),
                description: z.string(),
              }),
            }),
            required: z.array(z.string()),
          }),
          sendmail: z.object({
            title: z.string(),
            description: z.string(),
            type: z.string(),
            properties: z.object({
              newline: z.object({
                type: z.string(),
                default: z.string(),
                description: z.string(),
              }),
              path: z.object({
                type: z.string(),
                default: z.string(),
                description: z.string(),
              }),
              args: z.object({
                type: z.string(),
                items: z.object({ type: z.string() }),
                default: z.null(),
                description: z.string(),
              }),
              emailDelaySeconds: z.object({
                type: z.string(),
                default: z.number(),
                description: z.string(),
              }),
            }),
          }),
          authStrategies: z.object({
            type: z.string(),
            additionalProperties: z.boolean(),
            properties: z.object({
              twitter: z.object({
                type: z.string(),
                additionalProperties: z.boolean(),
                properties: z.object({
                  callbackurl: z.object({
                    type: z.string(),
                    format: z.string(),
                  }),
                  newAccounts: z.object({
                    type: z.string(),
                    default: z.boolean(),
                  }),
                  newAccountsUserGroups: z.object({
                    type: z.string(),
                    uniqueItems: z.boolean(),
                    items: z.object({ type: z.string() }),
                  }),
                  clientid: z.object({ type: z.string() }),
                  clientsecret: z.object({ type: z.string() }),
                  logouturl: z.object({
                    type: z.string(),
                    format: z.string(),
                    description: z.string(),
                  }),
                }),
                required: z.array(z.string()),
              }),
              google: z.object({
                type: z.string(),
                properties: z.object({
                  callbackurl: z.object({
                    type: z.string(),
                    format: z.string(),
                  }),
                  newAccounts: z.object({
                    type: z.string(),
                    default: z.boolean(),
                  }),
                  newAccountsUserGroups: z.object({
                    type: z.string(),
                    uniqueItems: z.boolean(),
                    items: z.object({ type: z.string() }),
                  }),
                  clientid: z.object({ type: z.string() }),
                  clientsecret: z.object({ type: z.string() }),
                  logouturl: z.object({
                    type: z.string(),
                    format: z.string(),
                    description: z.string(),
                  }),
                }),
                required: z.array(z.string()),
              }),
              github: z.object({
                type: z.string(),
                properties: z.object({
                  callbackurl: z.object({
                    type: z.string(),
                    format: z.string(),
                  }),
                  newAccounts: z.object({
                    type: z.string(),
                    default: z.boolean(),
                  }),
                  newAccountsUserGroups: z.object({
                    type: z.string(),
                    uniqueItems: z.boolean(),
                    items: z.object({ type: z.string() }),
                  }),
                  clientid: z.object({ type: z.string() }),
                  clientsecret: z.object({ type: z.string() }),
                  logouturl: z.object({
                    type: z.string(),
                    format: z.string(),
                    description: z.string(),
                  }),
                }),
                required: z.array(z.string()),
              }),
              reddit: z.object({
                type: z.string(),
                properties: z.object({
                  callbackurl: z.object({
                    type: z.string(),
                    format: z.string(),
                  }),
                  newAccounts: z.object({
                    type: z.string(),
                    default: z.boolean(),
                  }),
                  newAccountsUserGroups: z.object({
                    type: z.string(),
                    uniqueItems: z.boolean(),
                    items: z.object({ type: z.string() }),
                  }),
                  clientid: z.object({ type: z.string() }),
                  clientsecret: z.object({ type: z.string() }),
                  logouturl: z.object({
                    type: z.string(),
                    format: z.string(),
                    description: z.string(),
                  }),
                }),
                required: z.array(z.string()),
              }),
              azure: z.object({
                type: z.string(),
                properties: z.object({
                  callbackurl: z.object({
                    type: z.string(),
                    format: z.string(),
                  }),
                  newAccounts: z.object({
                    type: z.string(),
                    default: z.boolean(),
                  }),
                  newAccountsUserGroups: z.object({
                    type: z.string(),
                    uniqueItems: z.boolean(),
                    items: z.object({ type: z.string() }),
                  }),
                  clientid: z.object({ type: z.string() }),
                  clientsecret: z.object({ type: z.string() }),
                  tenantid: z.object({ type: z.string() }),
                  logouturl: z.object({
                    type: z.string(),
                    format: z.string(),
                    description: z.string(),
                  }),
                }),
                required: z.array(z.string()),
              }),
              jumpcloud: z.object({
                type: z.string(),
                properties: z.object({
                  callbackurl: z.object({
                    type: z.string(),
                    format: z.string(),
                  }),
                  newAccounts: z.object({
                    type: z.string(),
                    default: z.boolean(),
                  }),
                  newAccountsUserGroups: z.object({
                    type: z.string(),
                    uniqueItems: z.boolean(),
                    items: z.object({ type: z.string() }),
                  }),
                  entityid: z.object({ type: z.string() }),
                  idpurl: z.object({ type: z.string(), format: z.string() }),
                  cert: z.object({ type: z.string() }),
                  logouturl: z.object({
                    type: z.string(),
                    format: z.string(),
                    description: z.string(),
                  }),
                }),
                required: z.array(z.string()),
              }),
              saml: z.object({
                type: z.string(),
                properties: z.object({
                  callbackurl: z.object({
                    type: z.string(),
                    format: z.string(),
                  }),
                  disableRequestedAuthnContext: z.object({ type: z.string() }),
                  newAccounts: z.object({
                    type: z.string(),
                    default: z.boolean(),
                  }),
                  newAccountsUserGroups: z.object({
                    type: z.string(),
                    uniqueItems: z.boolean(),
                    items: z.object({ type: z.string() }),
                  }),
                  newAccountsRights: z.object({
                    type: z.string(),
                    uniqueItems: z.boolean(),
                    items: z.object({ type: z.string() }),
                  }),
                  entityid: z.object({ type: z.string() }),
                  idpurl: z.object({ type: z.string(), format: z.string() }),
                  cert: z.object({ type: z.string() }),
                  logouturl: z.object({
                    type: z.string(),
                    format: z.string(),
                    description: z.string(),
                  }),
                }),
                required: z.array(z.string()),
              }),
              oidc: z.object({
                type: z.string(),
                properties: z.object({
                  authorizationURL: z.object({
                    type: z.string(),
                    format: z.string(),
                    description: z.string(),
                  }),
                  callbackURL: z.object({
                    type: z.string(),
                    format: z.string(),
                    description: z.string(),
                  }),
                  clientid: z.object({ type: z.string() }),
                  clientsecret: z.object({ type: z.string() }),
                  issuer: z.object({
                    type: z.string(),
                    format: z.string(),
                    description: z.string(),
                  }),
                  tokenURL: z.object({
                    type: z.string(),
                    format: z.string(),
                    description: z.string(),
                  }),
                  userInfoURL: z.object({
                    type: z.string(),
                    format: z.string(),
                    description: z.string(),
                  }),
                  logouturl: z.object({
                    type: z.string(),
                    format: z.string(),
                    description: z.string(),
                  }),
                  newAccounts: z.object({
                    type: z.string(),
                    default: z.boolean(),
                  }),
                  groups: z.object({
                    type: z.string(),
                    properties: z.object({
                      required: z.object({
                        type: z.array(z.string()),
                        description: z.string(),
                      }),
                      siteadmin: z.object({
                        type: z.array(z.string()),
                        description: z.string(),
                      }),
                      sync: z.object({
                        type: z.array(z.string()),
                        description: z.string(),
                        properties: z.object({
                          enabled: z.object({
                            type: z.string(),
                            default: z.boolean(),
                          }),
                          filter: z.object({
                            type: z.array(z.string()),
                            description: z.string(),
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
                required: z.array(z.string()),
              }),
            }),
          }),
        }),
      }),
    }),
    letsEncrypt: z.object({
      title: z.string(),
      description: z.string(),
      type: z.string(),
      additionalProperties: z.boolean(),
      properties: z.object({
        email: z.object({
          type: z.string(),
          format: z.string(),
          description: z.string(),
        }),
        names: z.object({ type: z.string() }),
        skipChallengeVerification: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        production: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
      }),
      required: z.array(z.string()),
    }),
    peers: z.object({
      title: z.string(),
      description: z.string(),
      type: z.string(),
      minProperties: z.number(),
      propertyNames: z.object({ pattern: z.string() }),
      additionalProperties: z.boolean(),
      properties: z.object({
        serverId: z.object({ type: z.string() }),
        servers: z.object({
          type: z.string(),
          additionalProperties: z.object({
            type: z.string(),
            properties: z.object({
              url: z.object({ type: z.string(), format: z.string() }),
            }),
            required: z.array(z.string()),
          }),
        }),
      }),
      required: z.array(z.string()),
    }),
    sendgrid: z.object({
      title: z.string(),
      description: z.string(),
      type: z.string(),
      properties: z.object({
        from: z.object({
          type: z.string(),
          format: z.string(),
          description: z.string(),
        }),
        apikey: z.object({ type: z.string(), description: z.string() }),
        verifyemail: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
      }),
      required: z.array(z.string()),
    }),
    smtp: z.object({
      title: z.string(),
      description: z.string(),
      type: z.string(),
      properties: z.object({
        host: z.object({ type: z.string(), format: z.string() }),
        port: z.object({
          type: z.string(),
          minimum: z.number(),
          maximum: z.number(),
        }),
        from: z.object({
          type: z.string(),
          format: z.string(),
          description: z.string(),
        }),
        tls: z.object({ type: z.string() }),
        tlscertcheck: z.object({ type: z.string() }),
        tlsstrict: z.object({ type: z.string() }),
        verifyemail: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
      }),
      required: z.array(z.string()),
    }),
    sms: z.object({
      title: z.string(),
      description: z.string(),
      oneOf: z.array(
        z.union([
          z.object({
            type: z.string(),
            properties: z.object({
              provider: z.object({
                type: z.string(),
                enum: z.array(z.string()),
              }),
              sid: z.object({ type: z.string() }),
              auth: z.object({ type: z.string() }),
              from: z.object({ type: z.string() }),
            }),
            required: z.array(z.string()),
          }),
          z.object({
            type: z.string(),
            properties: z.object({
              provider: z.object({
                type: z.string(),
                enum: z.array(z.string()),
              }),
              id: z.object({ type: z.string() }),
              token: z.object({ type: z.string() }),
              from: z.object({ type: z.string() }),
            }),
            required: z.array(z.string()),
          }),
          z.object({
            type: z.string(),
            properties: z.object({
              provider: z.object({
                type: z.string(),
                enum: z.array(z.string()),
              }),
              apikey: z.object({ type: z.string() }),
              from: z.object({ type: z.string() }),
            }),
            required: z.array(z.string()),
          }),
          z.object({
            type: z.string(),
            properties: z.object({
              provider: z.object({
                type: z.string(),
                enum: z.array(z.string()),
              }),
              url: z.object({ type: z.string(), description: z.string() }),
            }),
            required: z.array(z.string()),
          }),
        ])
      ),
    }),
    messaging: z.object({
      title: z.string(),
      description: z.string(),
      type: z.string(),
      properties: z.object({
        telegram: z.object({
          type: z.string(),
          description: z.string(),
          properties: z.object({
            apiid: z.object({ type: z.string() }),
            apihash: z.object({ type: z.string() }),
            session: z.object({ type: z.string() }),
            useWSS: z.object({ type: z.string(), description: z.string() }),
            connectionRetries: z.object({
              type: z.string(),
              description: z.string(),
            }),
          }),
        }),
        discord: z.object({
          type: z.string(),
          description: z.string(),
          properties: z.object({
            serverurl: z.object({
              type: z.string(),
              format: z.string(),
              description: z.string(),
            }),
            token: z.object({ type: z.string(), description: z.string() }),
          }),
          required: z.array(z.string()),
        }),
        xmpp: z.object({
          type: z.string(),
          description: z.string(),
          properties: z.object({
            service: z.object({ type: z.string(), description: z.string() }),
            credentials: z.object({
              type: z.string(),
              description: z.string(),
              properties: z.object({
                username: z.object({ type: z.string() }),
                password: z.object({ type: z.string() }),
              }),
            }),
          }),
          required: z.array(z.string()),
        }),
        callmebot: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        slack: z.object({
          type: z.string(),
          default: z.boolean(),
          description: z.string(),
        }),
        pushover: z.object({
          type: z.string(),
          description: z.string(),
          properties: z.object({
            token: z.object({ type: z.string(), description: z.string() }),
          }),
          required: z.array(z.string()),
        }),
        ntfy: z.object({
          type: z.array(z.string()),
          default: z.boolean(),
          properties: z.object({
            host: z.object({ type: z.string(), description: z.string() }),
            userurl: z.object({ type: z.string(), description: z.string() }),
            authorization: z.object({
              type: z.string(),
              description: z.string(),
            }),
          }),
          description: z.string(),
        }),
        zulip: z.object({
          type: z.string(),
          properties: z.object({
            site: z.object({
              type: z.string(),
              format: z.string(),
              default: z.string(),
              description: z.string(),
            }),
            email: z.object({ type: z.string(), description: z.string() }),
            api_key: z.object({ type: z.string(), description: z.string() }),
          }),
          description: z.string(),
        }),
      }),
    }),
  }),
});

