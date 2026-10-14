// Generated from data.json by build.py. Do not edit.
window.PROGRESS_DATA = {
  "schema_version": 1,
  "meta": {
    "title": "雙 AI 整合進度",
    "updated_at": "2026-10-14T17:12:13+08:00",
    "revision": "20261014-02",
    "snapshot_notice": "資料快照，非即時",
    "sync_status": "manual_snapshot",
    "sync_note": "使用者已重置舊交辦；現行工作為新 C 技能共用。歷史階段與依賴保留，不代表恢復舊任務；本頁仍為人工核對快照。",
    "date_note": "核對日期代表證據被核對的時間，不代表任務開始或完成日。"
  },
  "projects": [
    {
      "id": "integration",
      "title": "雙 AI 工作環境整合",
      "status": "active",
      "summary": "舊交辦已重置，歷史資料保留。新 C 分類已長期保存；cross-review、deep-research Codex 專用版已交付，deep-research 另完成兩題實際研究流程。Claude 原版保留；stock-quote-refresh 尚未獲改寫授權，不自動製作。",
      "evidence": {
        "level": "mixed",
        "source": "本輪核讀 10/14 兩題 deep-research 實測紀錄及 C 技能共用分類與驗證狀態長期紀錄；檔案身分已核。Controller 17:10 交接回報每題另抽查 5 項主張並交付；本輪未重跑研究或來源抽查，沿用既有分類及 cross-review 驗證版本界線。"
      },
      "blockers": [
        "stock-quote-refresh 專用版尚未批准；cross-review 新 session 限制情境驗證只涵蓋修訂前版，最終版未重做獨立模型行為驗證。"
      ],
      "next_steps": [
        "保留已完成的安全共用、cross-review 與 deep-research 專用版交付；stock-quote-refresh 須另行批准，不自動製作、不恢復舊交辦。"
      ],
      "checked_at": "2026-10-14T17:12:13+08:00",
      "estimate_gap": "停止無法核實的耗時與費用估算；token 節省尚未量化。",
      "purpose": "讓共用規則、專案歸屬、技能來源與雙 AI 驗收都有清楚依據。",
      "workstreams": [
        {
          "id": "A",
          "title": "共用開場規則",
          "status": "hold",
          "summary": "歷史交辦（10/13 已重置，非現行待辦）：真實工作驗收持續：Codex C 唯讀核閱已完成，CC 交付仍待核。三視窗辨識完成：Desktop 2.1.295、Remote Control 本機 2.1.281、Terminal 2.1.281（自訂提示），同 main checkout、舊全文開場；比對基準已交並保存，非新版驗收 PASS。",
          "evidence": {
            "level": "handoff",
            "source": "Controller 10/12 23:10 輪次交接：使用者裁示、唯讀核對及三視窗比對基準交付；本次未重掃或重做模型驗收。"
          },
          "blockers": [
            "歷史交辦（10/13 已重置，非現行待辦）：Codex Q3 未批准；Claude Q3 的測試許可漏列補充檔，結果不能當作無保留通過。",
            "歷史交辦（10/13 已重置，非現行待辦）：回報準確性與 memory 歸因仍有缺口；最新回報不構成整體 PASS，也不解除 NP 原安全門檻。"
          ],
          "next_steps": [
            "歷史交辦（10/13 已重置，非現行待辦）：核對 CC 真實工作交付；三視窗辨識與基準文件已完成，不重跑辨識，也不將舊全文開場當成新版驗收。",
            "歷史交辦（10/13 已重置，非現行待辦）：保留 Q3、回報準確性與 memory 歸因缺口；不修 update_gantt.py，不新增模型測試。"
          ],
          "checked_at": "2026-10-13T09:12:10+00:00",
          "estimate_gap": "token 節省尚未量化；不以不可核實的耗時或費用估算補進度。",
          "children": [
            {
              "id": "np",
              "title": "NP-PRH 安全前置",
              "status": "hold",
              "summary": "歷史交辦（10/13 已重置，非現行待辦）：驗證器修補及獨立審查完成；64 案合成資料離線 SCOPE PASS 已收束。10/09 21:49:13 曾啟用 W01，22:04:44 settings 磁碟恢復，runtime 未證；正式 P／W02 未通過，下輪 HOLD。",
              "evidence": {
                "level": "handoff",
                "source": "已核安全前置進度摘要（10/09）"
              },
              "blockers": [
                "歷史交辦（10/13 已重置，非現行待辦）：W01 已截止；下輪 HOLD，須重綁批准鏈。",
                "歷史交辦（10/13 已重置，非現行待辦）：正式 P／W02 尚未通過；離線限定範圍通過不等於正式驗收。",
                "歷史交辦（10/13 已重置，非現行待辦）：既有限制仍保留。"
              ],
              "next_steps": [
                "歷史交辦（10/13 已重置，非現行待辦）：本人回到電腦後執行已批准的準備批次。",
                "歷史交辦（10/13 已重置，非現行待辦）：由既有執行線按原門檻完成 W01 掛載。",
                "歷史交辦（10/13 已重置，非現行待辦）：取得正式執行結果後再處理 P／W02 驗收。"
              ],
              "checked_at": "2026-10-13T09:12:10+00:00",
              "estimate_gap": "離線驗證已收束；正式掛載與驗收時程未定。",
              "milestones": [
                {
                  "id": "gate2",
                  "title": "Gate 2 工具與復原檢查",
                  "status": "limited",
                  "summary": "59 項工具檢查 PASS；115 項復原檢查中 114 PASS，保留 F34 限制。",
                  "evidence": {
                    "level": "handoff",
                    "source": "Controller 已接受的交接摘要"
                  },
                  "blockers": [
                    "歷史交辦（10/13 已重置，非現行待辦）：F34 限制仍在。"
                  ],
                  "next_steps": [
                    "歷史交辦（10/13 已重置，非現行待辦）：後續依賴復原的操作沿既有界線處理。"
                  ],
                  "checked_at": "2026-10-13T09:12:10+00:00",
                  "estimate_gap": "此為已有結果；限制處理時間未知。",
                  "actual_start": null,
                  "actual_end": null,
                  "date_sources": {
                    "actual_start": null,
                    "actual_end": null
                  },
                  "calendar_span_days": null,
                  "actual_work_hours": null,
                  "work_hours_source": null,
                  "estimate_basis": null,
                  "date_events": [],
                  "machine_runtime_seconds": null,
                  "machine_runtime_source": null
                },
                {
                  "id": "gate3",
                  "title": "Gate 3 R3 靜態雙審",
                  "status": "accepted",
                  "summary": "雙審皆為 0 blocking、0 major，靜態結論已接受。",
                  "evidence": {
                    "level": "handoff",
                    "source": "Controller 已接受的交接摘要"
                  },
                  "blockers": [],
                  "next_steps": [
                    "歷史交辦（10/13 已重置，非現行待辦）：沿用已接受靜態結論；正式執行另依原門檻。"
                  ],
                  "checked_at": "2026-10-13T09:12:10+00:00",
                  "estimate_gap": "審查已接受；不代表工程已完成。",
                  "actual_start": null,
                  "actual_end": null,
                  "date_sources": {
                    "actual_start": null,
                    "actual_end": null
                  },
                  "calendar_span_days": null,
                  "actual_work_hours": null,
                  "work_hours_source": null,
                  "estimate_basis": null,
                  "date_events": [],
                  "machine_runtime_seconds": null,
                  "machine_runtime_source": null
                },
                {
                  "id": "m5",
                  "title": "M5 準備",
                  "status": "reported",
                  "summary": "必要目錄準備由使用者回報已完成。",
                  "evidence": {
                    "level": "handoff",
                    "source": "使用者操作回報，由 Controller 轉交"
                  },
                  "blockers": [],
                  "next_steps": [
                    "歷史交辦（10/13 已重置，非現行待辦）：後續按既有檢查確認適用性。"
                  ],
                  "checked_at": "2026-10-13T09:12:10+00:00",
                  "estimate_gap": "本頁未重做操作；無新增估時。",
                  "actual_start": null,
                  "actual_end": null,
                  "date_sources": {
                    "actual_start": null,
                    "actual_end": null
                  },
                  "calendar_span_days": null,
                  "actual_work_hours": null,
                  "work_hours_source": null,
                  "estimate_basis": null,
                  "date_events": [],
                  "machine_runtime_seconds": null,
                  "machine_runtime_source": null
                },
                {
                  "id": "m7m1",
                  "title": "M7／M1 限定核證",
                  "status": "verified",
                  "summary": "來源清單與準備觀察一致；限定核證完成，正式操作仍未放行。",
                  "evidence": {
                    "level": "local",
                    "source": "本機限定核證報告；檔案身分已核對"
                  },
                  "blockers": [
                    "歷史交辦（10/13 已重置，非現行待辦）：僅支持準備範圍，不是整體 Gate PASS。"
                  ],
                  "next_steps": [
                    "歷史交辦（10/13 已重置，非現行待辦）：後續仍須核對現況與取得對應批次授權。"
                  ],
                  "checked_at": "2026-10-13T09:12:10+00:00",
                  "estimate_gap": "下一批条件未齊；不推算完成時間。",
                  "observed_date": "2026-10-08",
                  "actual_start": null,
                  "actual_end": null,
                  "date_sources": {
                    "actual_start": null,
                    "actual_end": null
                  },
                  "calendar_span_days": null,
                  "actual_work_hours": null,
                  "work_hours_source": null,
                  "estimate_basis": null,
                  "date_events": [
                    {
                      "kind": "report",
                      "at": "2026-10-08",
                      "label": "限定結果回報日，非開工日",
                      "precision": "day",
                      "timezone": null,
                      "source": "本次限定結果交接；05 DT12"
                    },
                    {
                      "kind": "observation",
                      "at": "2026-10-08T13:17:44+08:00",
                      "label": "放行命令單寫入（檔案修改時間），非開工",
                      "precision": "second",
                      "timezone": "Asia/Taipei",
                      "source": "M7／M1 放行命令單；檔案時間"
                    },
                    {
                      "kind": "observation",
                      "at": "2026-10-08T13:18:12+08:00",
                      "label": "M1 擷取時刻（執行紀錄），非完成時刻",
                      "precision": "second",
                      "timezone": "Asia/Taipei",
                      "source": "M7／M1 限定結果報告 §核對日期"
                    }
                  ],
                  "machine_runtime_seconds": null,
                  "machine_runtime_source": null
                },
                {
                  "id": "m3s0",
                  "title": "M3 準備候選與 S0",
                  "status": "verified",
                  "summary": "M3 準備候選已核，S0 本次通過；正式操作尚未啟動。",
                  "evidence": {
                    "level": "handoff",
                    "source": "Controller 最新核證交接；本頁未另行重驗執行"
                  },
                  "blockers": [
                    "歷史交辦（10/13 已重置，非現行待辦）：此為準備結果，不等於正式延期已生效或整體放行。"
                  ],
                  "next_steps": [
                    "歷史交辦（10/13 已重置，非現行待辦）：由既有執行線核對準備結果，處理後續具體核准。"
                  ],
                  "checked_at": "2026-10-13T09:12:10+00:00",
                  "estimate_gap": "本項已有成功回報；後續正式操作時間未定。",
                  "actual_start": null,
                  "actual_end": null,
                  "date_sources": {
                    "actual_start": null,
                    "actual_end": null
                  },
                  "calendar_span_days": null,
                  "actual_work_hours": null,
                  "work_hours_source": null,
                  "estimate_basis": null,
                  "date_events": [
                    {
                      "kind": "report",
                      "at": "2026-10-08",
                      "label": "限定結果回報日，非開工日",
                      "precision": "day",
                      "timezone": null,
                      "source": "本次限定結果交接；05 DT12"
                    },
                    {
                      "kind": "observation",
                      "at": "2026-10-08T13:49:55+08:00",
                      "label": "M3 決策檔生成時刻（紀錄 epoch），非完成時刻",
                      "precision": "second",
                      "timezone": "Asia/Taipei",
                      "source": "M3 限定結果報告 §決策核對"
                    },
                    {
                      "kind": "observation",
                      "at": "2026-10-08T13:56:01+08:00",
                      "label": "M3 結果報告寫入（檔案修改時間）",
                      "precision": "second",
                      "timezone": "Asia/Taipei",
                      "source": "M3 限定結果報告；檔案時間"
                    }
                  ],
                  "machine_runtime_seconds": null,
                  "machine_runtime_source": null
                },
                {
                  "id": "preact",
                  "title": "PREACT dry-run",
                  "status": "done",
                  "summary": "本次 dry-run 完成，結果為 DRY_RUN_OK_NO_WRITE，原生退出碼 0。",
                  "evidence": {
                    "level": "handoff",
                    "source": "Ming 當次操作回報，由 Controller 轉交"
                  },
                  "blockers": [
                    "歷史交辦（10/13 已重置，非現行待辦）：只完成本次 dry-run；正式延期仍未生效。"
                  ],
                  "next_steps": [
                    "歷史交辦（10/13 已重置，非現行待辦）：由既有執行線處理正式操作的其餘前提與具體核准。"
                  ],
                  "checked_at": "2026-10-13T09:12:10+00:00",
                  "estimate_gap": "未提供實際開始時間或實工時；不能由完成時間反推。",
                  "actual_start": null,
                  "actual_end": "2026-10-08T14:29+08:00",
                  "date_sources": {
                    "actual_start": null,
                    "actual_end": {
                      "label": "Ming 當次操作回報（Controller 轉交）",
                      "precision": "minute",
                      "timezone": "Asia/Taipei",
                      "verified_at": "2026-10-08T06:43:09+00:00"
                    }
                  },
                  "calendar_span_days": null,
                  "actual_work_hours": null,
                  "work_hours_source": null,
                  "estimate_basis": null,
                  "date_events": [],
                  "machine_runtime_seconds": null,
                  "machine_runtime_source": null
                },
                {
                  "id": "np-verifier64",
                  "title": "64 案離線範圍驗證",
                  "status": "done",
                  "summary": "驗證器修補及獨立審查完成；64 案合成資料結果已獨立核對並收束，結論為 SCOPE PASS。",
                  "evidence": {
                    "level": "handoff",
                    "source": "已核進度摘要（10/09）"
                  },
                  "blockers": [
                    "歷史交辦（10/13 已重置，非現行待辦）：僅代表離線合成資料的限定範圍通過；不能替代正式掛載及驗收。"
                  ],
                  "next_steps": [
                    "歷史交辦（10/13 已重置，非現行待辦）：保留已接受結論，繼續依原門檻處理正式操作。"
                  ],
                  "checked_at": "2026-10-13T09:12:10+00:00",
                  "estimate_gap": "已核 12:45 收束時間；真正開始時間與實工時未知。",
                  "actual_start": null,
                  "actual_end": "2026-10-09T12:45+08:00",
                  "date_sources": {
                    "actual_start": null,
                    "actual_end": {
                      "label": "已核離線驗證收束回報",
                      "precision": "minute",
                      "timezone": "Asia/Taipei",
                      "verified_at": "2026-10-09T05:11:22+00:00"
                    }
                  },
                  "calendar_span_days": null,
                  "actual_work_hours": null,
                  "work_hours_source": null,
                  "estimate_basis": null,
                  "date_events": [
                    {
                      "kind": "receipt",
                      "at": "2026-10-09T12:51+08:00",
                      "label": "主計畫登錄",
                      "precision": "minute",
                      "timezone": "Asia/Taipei",
                      "source": "已核進度摘要（10/09）"
                    },
                    {
                      "kind": "observation",
                      "at": "2026-10-08T19:39:01+08:00",
                      "label": "首份離線驗證審閱簡報寫入（檔案修改時間），非開工",
                      "precision": "second",
                      "timezone": "Asia/Taipei",
                      "source": "離線驗證審閱簡報；檔案時間"
                    },
                    {
                      "kind": "observation",
                      "at": "2026-10-08T21:56:12+08:00",
                      "label": "首版通過目錄建立（檔案修改時間）",
                      "precision": "second",
                      "timezone": "Asia/Taipei",
                      "source": "離線驗證通過目錄；檔案時間"
                    },
                    {
                      "kind": "observation",
                      "at": "2026-10-09T12:41:13+08:00",
                      "label": "最終一輪合成測試執行（報告記載 12:41:13～14）",
                      "precision": "second",
                      "timezone": "Asia/Taipei",
                      "source": "離線驗證合成結果報告 04"
                    }
                  ],
                  "machine_runtime_seconds": null,
                  "machine_runtime_source": null
                },
                {
                  "id": "np-session-prepare",
                  "title": "NP 新工作階段準備（C 批次）",
                  "status": "limited",
                  "summary": "10/09 21:49 建立 W01 窗口；窗口內無 allow、僅一筆 deny，未捕獲合格 2c；22:00 到期，本輪操作已截止。settings 磁碟退場完成，runtime 未證。",
                  "evidence": {
                    "level": "local",
                    "source": "stage3-prh 稽核紀錄與 W01 恢復收據（本機，10/09 夜核）"
                  },
                  "blockers": [
                    "歷史交辦（10/13 已重置，非現行待辦）：未捕獲合格 2c 事件。",
                    "歷史交辦（10/13 已重置，非現行待辦）：settings 退場後 runtime 狀態未證。"
                  ],
                  "next_steps": [
                    "歷史交辦（10/13 已重置，非現行待辦）：依 Controller 裁定處理到期後狀態與下一輪批准鏈。"
                  ],
                  "checked_at": "2026-10-13T09:12:10+00:00",
                  "estimate_gap": "實際工時無紀錄；21:49–22:00 是窗口期，不是工時。",
                  "actual_start": null,
                  "actual_end": null,
                  "date_sources": {
                    "actual_start": null,
                    "actual_end": null
                  },
                  "calendar_span_days": null,
                  "actual_work_hours": null,
                  "work_hours_source": null,
                  "estimate_basis": null,
                  "date_events": [
                    {
                      "kind": "report",
                      "at": "2026-10-09",
                      "label": "本次進度回報日",
                      "precision": "day",
                      "timezone": "Asia/Taipei",
                      "source": "已核進度摘要（10/09）"
                    },
                    {
                      "kind": "observation",
                      "at": "2026-10-09T21:49:13+08:00",
                      "label": "W01 窗口建立",
                      "precision": "second",
                      "timezone": "Asia/Taipei",
                      "source": "stage3-prh 稽核紀錄與 W01 恢復收據（本機，10/09 夜核）"
                    },
                    {
                      "kind": "observation",
                      "at": "2026-10-09T22:00:00+08:00",
                      "label": "W01 窗口到期（本輪操作截止）",
                      "precision": "minute",
                      "timezone": "Asia/Taipei",
                      "source": "stage3-prh 稽核紀錄與 W01 恢復收據（本機，10/09 夜核）"
                    },
                    {
                      "kind": "report",
                      "at": "2026-10-09T22:04:44+08:00",
                      "label": "settings 磁碟恢復收據（runtime 未證）",
                      "precision": "second",
                      "timezone": "Asia/Taipei",
                      "source": "stage3-prh 稽核紀錄與 W01 恢復收據（本機，10/09 夜核）"
                    }
                  ],
                  "machine_runtime_seconds": null,
                  "machine_runtime_source": null
                },
                {
                  "id": "release",
                  "title": "正式掛載與下一批驗收",
                  "status": "hold",
                  "summary": "歷史交辦（10/13 已重置，非現行待辦）：10/09 21:49:13 曾啟用 W01，22:04:44 settings 磁碟恢復，runtime 未證；正式 P／W02 未通過，下輪 HOLD。64 案離線 SCOPE PASS 不解除正式門檻。",
                  "evidence": {
                    "level": "mixed",
                    "source": "已核安全前置進度摘要（10/09）；stage3-prh 稽核紀錄與 W01 恢復收據（本機，10/09 夜核）"
                  },
                  "blockers": [
                    "歷史交辦（10/13 已重置，非現行待辦）：W01 曾啟用但未捕獲 2c；正式 P／W02 尚無通過結果。",
                    "歷史交辦（10/13 已重置，非現行待辦）：下輪 HOLD，須重綁批准鏈。"
                  ],
                  "next_steps": [
                    "歷史交辦（10/13 已重置，非現行待辦）：依 Controller 裁定；由既有執行線按原門檻進行下一輪。"
                  ],
                  "checked_at": "2026-10-13T09:12:10+00:00",
                  "estimate_gap": "前提與等待時間未定，無開始／結束日期。",
                  "actual_start": null,
                  "actual_end": null,
                  "date_sources": {
                    "actual_start": null,
                    "actual_end": null
                  },
                  "calendar_span_days": null,
                  "actual_work_hours": null,
                  "work_hours_source": null,
                  "estimate_basis": null,
                  "date_events": [],
                  "machine_runtime_seconds": null,
                  "machine_runtime_source": null
                }
              ],
              "actual_start": null,
              "actual_end": null,
              "date_sources": {
                "actual_start": null,
                "actual_end": null
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            },
            {
              "id": "a-rule-inventory",
              "title": "四象限規則盤點",
              "status": "done",
              "summary": "155 條規則盤點完成；其中 44 條待裁、11 組重複，盤點完成不代表清理完成。",
              "evidence": {
                "level": "handoff",
                "source": "已核進度摘要（10/09）"
              },
              "blockers": [],
              "next_steps": [
                "歷史交辦（10/13 已重置，非現行待辦）：逐項裁定並清理重複規則。"
              ],
              "checked_at": "2026-10-13T09:12:10+00:00",
              "estimate_gap": "未取得實際開始、結束與獨立計時資料；不推算工時或完成日期。",
              "actual_start": null,
              "actual_end": null,
              "date_sources": {
                "actual_start": null,
                "actual_end": null
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [
                {
                  "kind": "report",
                  "at": "2026-10-09",
                  "label": "本次進度回報日",
                  "precision": "day",
                  "timezone": "Asia/Taipei",
                  "source": "已核進度摘要（10/09）"
                },
                {
                  "kind": "observation",
                  "at": "2026-09-23T14:38:38+08:00",
                  "label": "原對帳表最後修改（155 條已對帳），非本項開工或完成",
                  "precision": "second",
                  "timezone": "Asia/Taipei",
                  "source": "四象限原對帳表；檔案時間"
                }
              ],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            }
          ],
          "actual_start": null,
          "actual_end": null,
          "date_sources": {
            "actual_start": null,
            "actual_end": null
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null
        },
        {
          "id": "B",
          "title": "Codex 專案歸檔",
          "status": "hold",
          "summary": "歷史交辦（10/13 已重置，非現行待辦）：子頁 B 更新分工已確定由使用者轉交 CC，完整 prompt 已交付；尚無 CC 收件、開跑或完成回條，不宣稱正在修改或已上線。原報告與勘誤均為 10/11，10/12 是合併交付日；65 項範圍、48 項歷史待決不是今日重掃，正式搬移未核結。",
          "evidence": {
            "level": "handoff",
            "source": "Controller 10/13 11:10 輪次交接：使用者 07:00 確認轉交 CC，主 chat 已交完整 B 更新 prompt；尚未收到 CC 回條。"
          },
          "blockers": [
            "歷史交辦（10/13 已重置，非現行待辦）：尚無 CC 收件、開跑或完成回條；不再等待既有本機視窗代改許可。",
            "歷史交辦（10/13 已重置，非現行待辦）：正式搬移仍未核結；本輪只有內容更新準備，非歸檔完成。"
          ],
          "next_steps": [
            "歷史交辦（10/13 已重置，非現行待辦）：等待 CC 回條；已交 prompt 限子頁 B 區段更新、備份與本機驗收，該次不 commit、push 或部署。",
            "歷史交辦（10/13 已重置，非現行待辦）：子頁工作未完成，公開子頁與入口保留；下架工單暫停、排程已停用，完成且經使用者確認後再處理。"
          ],
          "checked_at": "2026-10-13T09:12:10+00:00",
          "estimate_gap": "本輪沿用原報告加勘誤，不推算重掃、搬移耗時或費用。",
          "facts": [
            "10/11 原報告＋10/11 勘誤於 10/12 合併交付",
            "65 項範圍及 48 項歷史待決，不是今日重掃",
            "來源與子頁 B 目標已唯讀核對；完整更新 prompt 已交，由使用者轉交 CC，尚無收件或執行回條"
          ],
          "actual_start": null,
          "actual_end": null,
          "date_sources": {
            "actual_start": null,
            "actual_end": null
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null,
          "children": [
            {
              "id": "b-inventory",
              "title": "B 限定盤點（56 項）",
              "status": "done",
              "summary": "限定頂層盤點已交付；日期證據只到 UTC 觀察日，完整工程仍未完成。",
              "evidence": {
                "level": "local",
                "source": "05 日期證據表（已核歷史來源摘要） DT10／限定盤點報告"
              },
              "blockers": [],
              "next_steps": [
                "歷史交辦（10/13 已重置，非現行待辦）：補齊正式批次的完整清單與歸屬。"
              ],
              "checked_at": "2026-10-13T09:12:10+00:00",
              "estimate_gap": "只有觀察日，真正開始與交付鐘點未提供。",
              "actual_start": null,
              "actual_end": null,
              "date_sources": {
                "actual_start": null,
                "actual_end": null
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [
                {
                  "kind": "observation",
                  "at": "2026-10-08",
                  "label": "UTC 觀察日",
                  "precision": "day",
                  "timezone": "UTC",
                  "source": "限定盤點正文；05 DT10"
                }
              ],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            }
          ]
        },
        {
          "id": "C",
          "title": "skills 共用",
          "status": "limited",
          "summary": "cross-review Codex 專用版已交付，Codex 入口已改指專用版，Claude 原版及入口保留。最終 4307 bytes 版 frontmatter、連結、備份與 Claude 未變檢查通過；獨立新 session catalog 及兩個限制情境通過的是修訂前 4166 bytes 版，非實際跨模型或付費 API 測試。 deep-research 3611 bytes 專用版及 Codex 入口已交付；獨立新 session catalog、入口／內容身分及三項受限情境通過，Claude 原版及參照檔保留。10/14 已完成技能共用相容性與 Mac mini 檔案主機兩題實際研究流程及報告；僅驗研究流程，非雙產品同一技能實機相容性或 Mac 部署、權限、還原驗收。",
          "evidence": {
            "level": "mixed",
            "source": "本輪核讀 10/14 兩題 deep-research 實測紀錄及 C 技能共用分類與驗證狀態長期紀錄；檔案身分已核。Controller 17:10 交接回報每題另抽查 5 項主張並交付；本輪未重跑研究或來源抽查，沿用既有分類及 cross-review 驗證版本界線。"
          },
          "blockers": [
            "stock-quote-refresh 專用版尚未獲改寫授權，不自動製作。",
            "cross-review 最終版只補未指定產物位置的處理；最終版本機檢查通過，獨立 session 尚未重新讀取最終版本，不能擴稱最終版模型行為已驗。"
          ],
          "next_steps": [
            "保留 cross-review 的驗證版本界線、deep-research 兩題研究流程結果及 C 長期分類紀錄；stock-quote-refresh 如需製作須另行批准。pending-plans-listing 已完成，不重跑。",
            "保留 plugin 管理且版本不同的 Claude synced ai-bridge；不以代理計數為零推定零使用或刪除技能。"
          ],
          "checked_at": "2026-10-14T17:12:13+08:00",
          "estimate_gap": "使用統計僅 Claude history 的明確斜線指令代理計數；實際技能載入次數未知，不作 token 估算。",
          "facts": [
            "29 項相容性核對的分類基準為 2 可直接共用、24 工具專用、3 需專用版決策；cross-review、deep-research 已批准並交付，stock-quote-refresh 未批准",
            "cross-review 最終版 4307 bytes；新 session catalog／兩限制情境驗的是 4166 bytes 修前版，未做跨模型或付費 API 實測",
            "deep-research 3611 bytes 專用版及 Codex 入口已交付；獨立新 session catalog、入口／內容身分及三項受限情境通過，Claude 原版及參照檔保留。10/14 已完成技能共用相容性與 Mac mini 檔案主機兩題實際研究流程及報告；僅驗研究流程，非雙產品同一技能實機相容性或 Mac 部署、權限、還原驗收。",
            "29 項原分類（2 可直接共用、24 工具專用、3 需專用版／入口決策）已於 10/14 保存為 C 技能共用分類與驗證狀態長期紀錄；原 output 與備份保留。長期文件僅新增，本次甘特提交不包含該文件。",
            "現況：Claude 直接 9、synced 16；Codex 直接由 3 增至 4，另有 5 個 .system 技能",
            "新增 pending-plans-listing symlink；來源主檔未修改，未搬移技能，備份及靜態檢查通過",
            "Claude synced ai-bridge 已確認為 plugin 管理的不同版本，保留",
            "獨立新 session 自動列出 pending-plans-listing；skills.list 可發現，主檔／相依可讀，realpath 與 SHA 吻合",
            "代理計數：gemini、skill-creator 各 1；其餘為 0 不代表實際零使用",
            "歷史交辦（10/13 已重置，非現行待辦）：Claude 24 入口：6 實體、3 symlink、15 synced；Codex 8：3 symlink、5 .system；均含 SKILL.md",
            "歷史交辦（10/13 已重置，非現行待辦）：兩個直接 ai-bridge 入口 symlink 至同一主檔；此部分可結清",
            "歷史交辦（10/13 已重置，非現行待辦）：CLI 使用新版未驗；Claude synced 實體副本未比版本，不推定重複載入",
            "歷史交辦（10/13 已重置，非現行待辦）：唯讀清單已交：Claude 24 入口、Codex 8 入口，均含 SKILL.md。兩個直接 ai-bridge 入口以 symlink 指向同一主檔，此主檔／連結部分可結清；CLI 使用新版未驗，尚非整體完成。",
            "歷史交辦（10/13 已重置，非現行待辦）：CLI 是否使用新版尚未驗證；入口清單不是載入驗收。",
            "歷史交辦（10/13 已重置，非現行待辦）：Claude 另有 synced 實體 ai-bridge 副本，版本尚未比對，不宣稱重複載入。",
            "歷史交辦（10/13 已重置，非現行待辦）：保留已交唯讀清單與主檔／直接連結結論；CLI 使用版本及 synced 副本版本待後續核對，本輪不改刪 skill。"
          ],
          "actual_start": null,
          "actual_end": null,
          "date_sources": {
            "actual_start": null,
            "actual_end": null
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null,
          "children": [
            {
              "id": "c-inventory",
              "title": "C 主文件盤點（24 份）",
              "status": "done",
              "summary": "24 份技能主文件盤點已交付；完整附件、平台驗收與共用工程尚未完成。",
              "evidence": {
                "level": "local",
                "source": "05 日期證據表（已核歷史來源摘要） DT10／限定盤點報告"
              },
              "blockers": [],
              "next_steps": [
                "歷史交辦（10/13 已重置，非現行待辦）：逐批核對完整附件及平台契約。"
              ],
              "checked_at": "2026-10-13T09:12:10+00:00",
              "estimate_gap": "只有觀察日，真正开始與交付鐘點未提供。",
              "actual_start": null,
              "actual_end": null,
              "date_sources": {
                "actual_start": null,
                "actual_end": null
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [
                {
                  "kind": "observation",
                  "at": "2026-10-08",
                  "label": "UTC 觀察日",
                  "precision": "day",
                  "timezone": "UTC",
                  "source": "限定盤點正文；05 DT10"
                }
              ],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            }
          ]
        },
        {
          "id": "D",
          "title": "整體驗收",
          "status": "hold",
          "summary": "歷史交辦（10/13 已重置，非現行待辦）：改以真實工作接續驗收：Codex C 唯讀核閱已完成，CC 既有子頁維護回條待核。既有五題分題通過結果保留；Q3、回報準確性、memory 歸因及 CLI 載入仍有缺口，不能宣稱整體 PASS。",
          "evidence": {
            "level": "handoff",
            "source": "Controller 10/12 23:10 輪次交接：使用者裁示、唯讀核對及三視窗比對基準交付；本次未重掃或重做模型驗收。"
          },
          "blockers": [
            "歷史交辦（10/13 已重置，非現行待辦）：Codex Q3 未批准；Claude Q3 受測試許可漏列補充檔干擾。",
            "歷史交辦（10/13 已重置，非現行待辦）：回報準確性與 memory 歸因缺口未閉合；尚缺 A／B／C 同版正式交付。"
          ],
          "next_steps": [
            "歷史交辦（10/13 已重置，非現行待辦）：三視窗辨識與比對基準已完成並交付；同 main checkout 的舊全文開場不是新版驗收 PASS。CC 真實工作交付與其餘缺口仍待核。"
          ],
          "checked_at": "2026-10-13T09:12:10+00:00",
          "estimate_gap": "實際範圍、平台與場景組未定；無整體完成日期。",
          "facts": [
            "04 版計畫文書已審（歷史）",
            "Q1／Q2／Q4／Q5／Q6 雙 AI 按題目目標通過",
            "Q3 不推定通過；整體 PASS 未成立"
          ],
          "actual_start": null,
          "actual_end": null,
          "date_sources": {
            "actual_start": null,
            "actual_end": null
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null
        }
      ],
      "shared_actions": [
        {
          "id": "plans",
          "title": "總計畫＋四子計畫",
          "status": "done",
          "summary": "總計畫與四子計畫 04 版文書審查完成；這是共同行動，不代表 A／B／C／D 實作完成。",
          "evidence": {
            "level": "handoff",
            "source": "Controller 最新交付核對：回條與十份主檔一致"
          },
          "blockers": [],
          "next_steps": [
            "歷史交辦（10/13 已重置，非現行待辦）：依已完成計畫準備各項具體工程批次；四項實作成果尚未完成。"
          ],
          "checked_at": "2026-10-13T09:12:10+00:00",
          "estimate_gap": "本次規劃文書已完成；工程工期另依各項實際批次確認。",
          "observed_date": "2026-10-08",
          "actual_start": null,
          "actual_end": "2026-10-08",
          "date_sources": {
            "actual_start": null,
            "actual_end": {
              "label": "CC 04 增量核對回條，F1／F2／F3 閉合；05 DT11",
              "precision": "day",
              "timezone": null,
              "verified_at": "2026-10-08T06:49:51+00:00"
            }
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null,
          "children": [
            {
              "id": "plan05",
              "title": "05 全項計畫提案",
              "status": "hold",
              "summary": "歷史交辦（10/13 已重置，非現行待辦）：05 新增範圍與工作包仍是未審提案；既有 04 審查完成狀態保留。",
              "evidence": {
                "level": "local",
                "source": "05 文書提案及日期證據表"
              },
              "blockers": [],
              "next_steps": [
                "歷史交辦（10/13 已重置，非現行待辦）：由既有主持線核定新增範圍；不據此執行工程。"
              ],
              "checked_at": "2026-10-13T09:12:10+00:00",
              "estimate_gap": "尚未審查或核定新增範圍，不能承諾工程工期。",
              "actual_start": null,
              "actual_end": null,
              "date_sources": {
                "actual_start": null,
                "actual_end": null
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            }
          ]
        },
        {
          "id": "review",
          "title": "cross-review",
          "status": "done",
          "summary": "04 版計畫文書審查已完成，既有三項問題已閉合；工程實作與整體驗收仍分項處理。",
          "evidence": {
            "level": "handoff",
            "source": "CC 審查閉合與 Controller 交付核對回報"
          },
          "blockers": [],
          "next_steps": [
            "歷史交辦（10/13 已重置，非現行待辦）：保留審查與閉合紀錄，後續工程仍按各項批次執行。"
          ],
          "checked_at": "2026-10-13T09:12:10+00:00",
          "estimate_gap": "本次計畫審查已完成；不追加 r2 日程。",
          "actual_start": null,
          "actual_end": "2026-10-08",
          "date_sources": {
            "actual_start": null,
            "actual_end": {
              "label": "CC 04 增量核對回條，F1／F2／F3 閉合；05 DT11",
              "precision": "day",
              "timezone": null,
              "verified_at": "2026-10-08T06:49:51+00:00"
            }
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null
        }
      ],
      "history": [
        {
          "id": "h1",
          "title": "歷史① 單一 home",
          "status": "reported",
          "summary": "使用者回報已完成，承接現況。",
          "evidence": {
            "level": "user",
            "source": "使用者明示回報"
          },
          "blockers": [],
          "next_steps": [
            "歷史交辦（10/13 已重置，非現行待辦）：保留歷史里程碑，不重做遷移。"
          ],
          "checked_at": "2026-10-13T09:12:10+00:00",
          "estimate_gap": "完成日期未提供；不補填。",
          "observed_date": null,
          "actual_start": null,
          "actual_end": null,
          "date_sources": {
            "actual_start": null,
            "actual_end": null
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null
        },
        {
          "id": "h2",
          "title": "歷史② 改名",
          "status": "reported",
          "summary": "使用者回報已完成，承接現況。",
          "evidence": {
            "level": "user",
            "source": "使用者明示回報"
          },
          "blockers": [],
          "next_steps": [
            "歷史交辦（10/13 已重置，非現行待辦）：保留歷史里程碑，不重做改名。"
          ],
          "checked_at": "2026-10-13T09:12:10+00:00",
          "estimate_gap": "完成日期未提供；不補填。",
          "observed_date": null,
          "actual_start": null,
          "actual_end": null,
          "date_sources": {
            "actual_start": null,
            "actual_end": null
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null,
          "children": [
            {
              "id": "h2-6a",
              "title": "②6a 服務恢復確認",
              "status": "done",
              "summary": "服務恢復 PASS；已知回條時間，操作真正起訖未核。",
              "evidence": {
                "level": "local",
                "source": "05 日期證據表（已核歷史來源摘要） DT04／服務恢復回條"
              },
              "blockers": [],
              "next_steps": [
                "歷史交辦（10/13 已重置，非現行待辦）：保留既有完成結果，不重做服務恢復。"
              ],
              "checked_at": "2026-10-13T09:12:10+00:00",
              "estimate_gap": "回條時刻不是 runner 結束時刻；實工時未知。",
              "actual_start": null,
              "actual_end": null,
              "date_sources": {
                "actual_start": null,
                "actual_end": null
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [
                {
                  "kind": "receipt",
                  "at": "2026-09-29T16:45+08:00",
                  "label": "服務恢復 PASS 回條",
                  "precision": "minute",
                  "timezone": "Asia/Taipei",
                  "source": "服務恢復回條；05 DT04"
                }
              ],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            },
            {
              "id": "h2-v5-run",
              "title": "②自然晨報執行",
              "status": "done",
              "summary": "自然執行起訖已知；4 分 17 秒僅為機器執行時間。",
              "evidence": {
                "level": "local",
                "source": "05 日期證據表（已核歷史來源摘要） DT05／自然執行紀錄"
              },
              "blockers": [],
              "next_steps": [
                "歷史交辦（10/13 已重置，非現行待辦）：保留自然執行結果，不以重跑替代。"
              ],
              "checked_at": "2026-10-13T09:12:10+00:00",
              "estimate_gap": "未提供人工／agent 主動工時；機器時間不能當整案工時。",
              "actual_start": "2026-09-30T06:30:04+08:00",
              "actual_end": "2026-09-30T06:34:21+08:00",
              "date_sources": {
                "actual_start": {
                  "label": "自然執行紀錄起點；05 DT05",
                  "precision": "second",
                  "timezone": "Asia/Taipei",
                  "verified_at": "2026-10-08T06:49:51+00:00"
                },
                "actual_end": {
                  "label": "自然執行紀錄終點；05 DT05",
                  "precision": "second",
                  "timezone": "Asia/Taipei",
                  "verified_at": "2026-10-08T06:49:51+00:00"
                }
              },
              "calendar_span_days": 1,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": "只可作同類機器執行的單次樣本；尚缺同版規模與多批資料，不用於整案或人力估期。",
              "date_events": [],
              "machine_runtime_seconds": 257,
              "machine_runtime_source": "自然執行紀錄起訖；05 DT05；非人工或 agent 實工時"
            },
            {
              "id": "h2-v5-pass",
              "title": "②V5／6b PASS 判定",
              "status": "done",
              "summary": "本次判定 PASS 的事件時刻已核，查核開始時間未知。",
              "evidence": {
                "level": "local",
                "source": "05 日期證據表（已核歷史來源摘要） DT06／V5 回條"
              },
              "blockers": [],
              "next_steps": [
                "歷史交辦（10/13 已重置，非現行待辦）：保留已核判定，不重做主體。"
              ],
              "checked_at": "2026-10-13T09:12:10+00:00",
              "estimate_gap": "開始及主動工時未知；跨夜等待不算工作量。",
              "actual_start": null,
              "actual_end": "2026-09-30T07:00:46+08:00",
              "date_sources": {
                "actual_start": null,
                "actual_end": {
                  "label": "V5 回條中的 PASS 判定事件；05 DT06",
                  "precision": "second",
                  "timezone": "Asia/Taipei",
                  "verified_at": "2026-10-08T06:49:51+00:00"
                }
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            },
            {
              "id": "h2-confirm-notice",
              "title": "②CC 確認／五線通告",
              "status": "done",
              "summary": "截至紀錄時間，確認與通告已記為完成；不是各次發送的精確時刻，也不等於五線全部改完。",
              "evidence": {
                "level": "local",
                "source": "05 日期證據表（已核歷史來源摘要） DT07／步7 checkpoint"
              },
              "blockers": [],
              "next_steps": [
                "歷史交辦（10/13 已重置，非現行待辦）：保留確認與通告紀錄；各線完成回報另核。"
              ],
              "checked_at": "2026-10-13T09:12:10+00:00",
              "estimate_gap": "只有完成紀錄上限，不能算各操作起訖或實工時。",
              "actual_start": null,
              "actual_end": null,
              "date_sources": {
                "actual_start": null,
                "actual_end": null
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [
                {
                  "kind": "completed_by",
                  "at": "2026-09-30T07:25+08:00",
                  "label": "截至此紀錄已完成",
                  "precision": "minute",
                  "timezone": "Asia/Taipei",
                  "source": "步7 checkpoint；05 DT07；紀錄上限"
                }
              ],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            },
            {
              "id": "h2-step8-inventory",
              "title": "②步8 Codex 限定盤點交付",
              "status": "done",
              "summary": "限定盤點已交付；真正開始時間未知，不能把快照時間當作開工。",
              "evidence": {
                "level": "local",
                "source": "05 日期證據表（已核歷史來源摘要） DT09／限定盤點交付紀錄"
              },
              "blockers": [],
              "next_steps": [
                "歷史交辦（10/13 已重置，非現行待辦）：交原負責線整合後續事項；不視為步8整體完成。"
              ],
              "checked_at": "2026-10-13T09:12:10+00:00",
              "estimate_gap": "快照至落檔僅為紀錄間隔，不能算整趟耗時。",
              "actual_start": null,
              "actual_end": "2026-10-08T06:29:58.462356+00:00",
              "date_sources": {
                "actual_start": null,
                "actual_end": {
                  "label": "限定盤點交付紀錄；05 DT09",
                  "precision": "microsecond",
                  "timezone": "UTC",
                  "verified_at": "2026-10-08T06:49:51+00:00"
                }
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [
                {
                  "kind": "snapshot",
                  "at": "2026-10-08T06:24:29+00:00",
                  "label": "盤點快照，非工作開始",
                  "precision": "second",
                  "timezone": "UTC",
                  "source": "限定盤點快照；05 DT09"
                }
              ],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            },
            {
              "id": "h2-step8-review",
              "title": "②步8 最早評估",
              "status": "hold",
              "summary": "歷史交辦（10/13 已重置，非現行待辦）：最早 10/13 起才可評估；仍須前提齊備及另行授權，不是必刪日，也不會到期自動執行。",
              "evidence": {
                "level": "local",
                "source": "05 日期證據表（已核歷史來源摘要） DT15／既有觀察門檻"
              },
              "blockers": [],
              "next_steps": [
                "歷史交辦（10/13 已重置，非現行待辦）：到最早評估點後，核對觀察證據與其餘前提。"
              ],
              "checked_at": "2026-10-13T09:12:10+00:00",
              "estimate_gap": "14 日是觀察門檻，不是人工工作量；主動工時待核。",
              "actual_start": null,
              "actual_end": null,
              "date_sources": {
                "actual_start": null,
                "actual_end": null
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [
                {
                  "kind": "not_before",
                  "at": "2026-10-13",
                  "label": "最早可評估日",
                  "precision": "day",
                  "timezone": "Asia/Taipei",
                  "source": "既有步8觀察門檻；05 DT15"
                }
              ],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            }
          ]
        }
      ],
      "actual_start": null,
      "actual_end": null,
      "date_sources": {
        "actual_start": null,
        "actual_end": null
      },
      "calendar_span_days": null,
      "actual_work_hours": null,
      "work_hours_source": null,
      "estimate_basis": null,
      "date_events": [],
      "machine_runtime_seconds": null,
      "machine_runtime_source": null,
      "children": [
        {
          "id": "bc-cloud-simulation",
          "title": "專案歸檔／技能共用雲端模擬",
          "status": "done",
          "summary": "雲端原型已完成並交付，29 項合成測試與獨立複核均通過。工作機原檔未接觸；尚未驗證真實遷移或平台載入，不構成正式 B／C 完工。",
          "evidence": {
            "level": "handoff",
            "source": "已核進度摘要（10/09）"
          },
          "blockers": [],
          "next_steps": [
            "歷史交辦（10/13 已重置，非現行待辦）：正式遷移與平台載入仍須另依核准範圍驗證。"
          ],
          "checked_at": "2026-10-13T09:12:10+00:00",
          "estimate_gap": "實際完成日已核為 10/09；真正開始時間與實工時未提供，不推算工期。",
          "actual_start": null,
          "actual_end": "2026-10-09",
          "date_sources": {
            "actual_start": null,
            "actual_end": {
              "label": "已核雲端原型交付與獨立複核完成回報",
              "precision": "day",
              "timezone": "Asia/Taipei",
              "verified_at": "2026-10-09T05:16:04+00:00"
            }
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [
            {
              "kind": "report",
              "at": "2026-10-09",
              "label": "雲端原型交付；29 項合成測試與獨立複核通過",
              "precision": "day",
              "timezone": "Asia/Taipei",
              "source": "已核進度摘要（10/09）"
            }
          ],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null
        }
      ],
      "facts": [
        "歷史交辦（10/13 已重置，非現行待辦）：A 真實工作 CC 交付仍待核；三視窗辨識及比對基準已交，屬舊全文開場，非新版驗收 PASS。B 子頁更新 prompt 已交付，分工確定由使用者轉交 CC；尚無 CC 收件或執行回條；C 主檔／直接連結已核、CLI 新版未驗，尚無整體 PASS。",
        "歷史交辦（10/13 已重置，非現行待辦）：CC 真實工作回條待核；C CLI 使用新版與 synced 副本版本未驗；B 正式搬移未核結，D 未整體驗收。",
        "歷史交辦（10/13 已重置，非現行待辦）：換的是 ChatGPT 帳號，同 Mac、同 macOS 使用者，資料原位；新四步設計已交，尚未切換。",
        "歷史交辦（10/13 已重置，非現行待辦）：三視窗辨識與比對基準已交付、本機保存及指紋核對通過；舊全文開場結果不算新版驗收。",
        "歷史交辦（10/13 已重置，非現行待辦）：公開子頁與入口保留；下架工單暫停、下架排程已停用，完成並經使用者確認後再處理。"
      ]
    },
    {
      "id": "documents",
      "title": "計畫文件整理",
      "status": "hold",
      "summary": "歷史交辦（10/13 已重置，非現行待辦）：使用者回報 CC 今早已盤點整理 pending，暫緩至 2026-10-19 再看，不列當下阻塞；pending-03 舊文件已交付。原目錄整併與保全紀錄、10/08 分類基準保留。",
      "evidence": {
        "level": "handoff",
        "source": "Controller 10/12 最新進度交接；本次僅核對甘特資料，未重查原檔或重跑模型測試。"
      },
      "blockers": [],
      "next_steps": [
        "歷史交辦（10/13 已重置，非現行待辦）：2026-10-19 再看 pending；此前不列當下阻塞，也不將 pending-03 舊文件標為整份未交。"
      ],
      "checked_at": "2026-10-13T09:12:10+00:00",
      "estimate_gap": "目錄整併與必要保全已完成；未取得可換算實工時的起訖紀錄。",
      "purpose": "看清每份計畫在做什麼、做到哪裡，以及該放在哪裡。",
      "categories": [
        {
          "title": "目的",
          "description": "文件要解決的問題與涵蓋範圍。"
        },
        {
          "title": "已做＋證據",
          "description": "已交付內容與支持它的來源。"
        },
        {
          "title": "未做",
          "description": "尚未執行、未驗證與待決事項。"
        },
        {
          "title": "建議位置",
          "description": "依用途提出位置建議，不直接搬檔。"
        },
        {
          "title": "不確定",
          "description": "來源不足、矛盾與待查證的地方。"
        }
      ],
      "counts": {
        "total": 21,
        "done": 4,
        "active": 10,
        "todo": 6,
        "uncertain": 1
      },
      "children": [
        {
          "id": "preservation",
          "title": "必要長期資料保全",
          "status": "done",
          "summary": "必要長期資料保全已完成；完成保全不代表 A／B／C／D 工程已完成。",
          "evidence": {
            "level": "handoff",
            "source": "已核必要保全完成回報（10/09）"
          },
          "blockers": [],
          "next_steps": [
            "歷史交辦（10/13 已重置，非現行待辦）：維持已保全資料及後續異動紀錄。"
          ],
          "checked_at": "2026-10-13T09:12:10+00:00",
          "estimate_gap": "完成狀態已回報，精確作業起訖與實工時未提供。",
          "actual_start": null,
          "actual_end": null,
          "date_sources": {
            "actual_start": null,
            "actual_end": null
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [
            {
              "kind": "report",
              "at": "2026-10-09",
              "label": "必要保全完成回報",
              "precision": "day",
              "timezone": "Asia/Taipei",
              "source": "已核進度摘要（10/09）"
            }
          ],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null
        },
        {
          "id": "docs-consolidation",
          "title": "計畫目錄整併",
          "status": "done",
          "summary": "目錄總項目由 69 減至 28；本批由 47 減至 6，保留 5 份固定主檔＋1 份 CC 活動檔。106 個連結已核對可達，32 項移入保存區，14 項放入可回復垃圾區。",
          "evidence": {
            "level": "handoff",
            "source": "Controller 已核計畫目錄整併完成回報"
          },
          "blockers": [],
          "next_steps": [
            "歷史交辦（10/13 已重置，非現行待辦）：維持固定主檔、活動檔與索引連結。"
          ],
          "checked_at": "2026-10-13T09:12:10+00:00",
          "estimate_gap": "未取得作業起訖與實工時；完成回報不能換算工期。",
          "actual_start": null,
          "actual_end": null,
          "date_sources": {
            "actual_start": null,
            "actual_end": null
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [
            {
              "kind": "report",
              "at": "2026-10-08",
              "label": "已完成整併回報",
              "precision": "day",
              "timezone": null,
              "source": "Controller 已核計畫目錄整併完成回報"
            }
          ],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null
        }
      ],
      "actual_start": null,
      "actual_end": null,
      "date_sources": {
        "actual_start": null,
        "actual_end": null
      },
      "calendar_span_days": null,
      "actual_work_hours": null,
      "work_hours_source": null,
      "estimate_basis": null,
      "date_events": [],
      "machine_runtime_seconds": null,
      "machine_runtime_source": null
    }
  ],
  "gantt": {
    "mode": "relative_phases",
    "date_note": "未來日期待排；相對階段不是工期。",
    "integration": {
      "phases": [
        "範圍準備",
        "批次核准",
        "實作／複製",
        "切換／交付",
        "整體驗收",
        "完成裁決"
      ],
      "rows": [
        {
          "id": "ga",
          "kind": "group",
          "title": "A 共用開場規則",
          "note": "歷史交辦已重置；未重新派工。三視窗辨識已交；非新版驗收"
        },
        {
          "id": "a-plan",
          "kind": "task",
          "title": "規則與批次準備",
          "source_id": "A",
          "phase": 0,
          "phase_end": 1,
          "status": "hold",
          "deps": [],
          "note": "歷史／未重新派工；三視窗基準已交；CC 交付待核",
          "summary": "歷史交辦（10/13 已重置，非現行待辦）：真實工作驗收持續：Codex C 唯讀核閱已完成，CC 交付仍待核。三視窗辨識完成：Desktop 2.1.295、Remote Control 本機 2.1.281、Terminal 2.1.281（自訂提示），同 main checkout、舊全文開場；比對基準已交並保存，非新版驗收 PASS。",
          "next_step": "歷史交辦（10/13 已重置，非現行待辦）：核對 CC 真實工作交付；三視窗辨識與基準文件已完成，不重跑辨識，也不將舊全文開場當成新版驗收。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "a-rule-inventory-fact",
          "kind": "task",
          "title": "四象限規則盤點",
          "source_id": "a-rule-inventory",
          "timing_source_id": "a-rule-inventory",
          "phase": 0,
          "phase_end": 0,
          "status": "done",
          "deps": [],
          "note": "155 條；清理另行",
          "summary": "",
          "next_step": "舊交辦已重置，未重新派工；僅保留歷史結果，不恢復舊待辦。",
          "nested": false
        },
        {
          "id": "np-evidence",
          "kind": "task",
          "title": "NP 準備核證",
          "source_id": "m7m1",
          "phase": 0,
          "phase_end": 0,
          "status": "verified",
          "deps": [],
          "note": "M7／M1 已核",
          "summary": "",
          "next_step": "舊交辦已重置，未重新派工；僅保留歷史結果，不恢復舊待辦。",
          "nested": true,
          "timing_source_id": "m7m1"
        },
        {
          "id": "np-m3",
          "kind": "task",
          "title": "NP 準備候選",
          "source_id": "m3s0",
          "phase": 1,
          "phase_end": 1,
          "status": "verified",
          "deps": [
            "np-evidence"
          ],
          "note": "M3／S0 本次通過",
          "summary": "",
          "next_step": "舊交辦已重置，未重新派工；僅保留歷史結果，不恢復舊待辦。",
          "nested": true,
          "timing_source_id": "m3s0"
        },
        {
          "id": "np-preact",
          "kind": "task",
          "title": "NP PREACT dry-run",
          "source_id": "preact",
          "timing_source_id": "preact",
          "phase": 2,
          "phase_end": 2,
          "status": "done",
          "deps": [
            "np-m3"
          ],
          "note": "10/08 14:29 完成",
          "summary": "歷史交辦（10/13 已重置，非現行待辦）：本次 dry-run 成功且無寫入；正式延期仍未生效。",
          "next_step": "歷史交辦（10/13 已重置，非現行待辦）：等待原負責線處理正式操作的其餘前提。",
          "nested": true
        },
        {
          "id": "np-verifier64-fact",
          "kind": "task",
          "title": "64 案離線範圍驗證",
          "source_id": "np-verifier64",
          "timing_source_id": "np-verifier64",
          "phase": 2,
          "phase_end": 2,
          "status": "done",
          "deps": [],
          "note": "10/09 12:45 SCOPE PASS",
          "summary": "",
          "next_step": "舊交辦已重置，未重新派工；僅保留歷史結果，不恢復舊待辦。",
          "nested": true
        },
        {
          "id": "np-session-prepare-row",
          "kind": "task",
          "title": "NP 新工作階段準備",
          "source_id": "np-session-prepare",
          "timing_source_id": "np-session-prepare",
          "phase": 2,
          "phase_end": 2,
          "status": "hold",
          "deps": [],
          "note": "歷史／未重新派工；10/09 21:49 建窗；22:00 截止",
          "summary": "",
          "next_step": "舊交辦已重置，未重新派工；僅保留歷史結果，不恢復舊待辦。",
          "nested": true
        },
        {
          "id": "np-release",
          "kind": "task",
          "title": "NP 正式掛載與驗收",
          "source_id": "release",
          "phase": 2,
          "phase_end": 2,
          "status": "hold",
          "deps": [
            "np-m3"
          ],
          "note": "歷史／未重新派工；21:49:13 曾啟用；22:04:44 磁碟恢復；下輪 HOLD",
          "summary": "歷史交辦（10/13 已重置，非現行待辦）：曾啟用並磁碟退場，正式驗收未完；下輪待新批准。",
          "next_step": "歷史交辦（10/13 已重置，非現行待辦）：曾啟用並磁碟退場，正式驗收未完；下輪待新批准。",
          "nested": true,
          "timing_source_id": null
        },
        {
          "id": "a-implement",
          "kind": "task",
          "title": "規則實作與隔離驗證",
          "source_id": "A",
          "phase": 2,
          "phase_end": 2,
          "status": "hold",
          "deps": [
            "a-plan"
          ],
          "note": "歷史／未重新派工；三視窗基準已交；CC 交付待核",
          "summary": "歷史交辦（10/13 已重置，非現行待辦）：真實工作驗收持續：Codex C 唯讀核閱已完成，CC 交付仍待核。三視窗辨識完成：Desktop 2.1.295、Remote Control 本機 2.1.281、Terminal 2.1.281（自訂提示），同 main checkout、舊全文開場；比對基準已交並保存，非新版驗收 PASS。",
          "next_step": "歷史交辦（10/13 已重置，非現行待辦）：核對 CC 真實工作交付；三視窗辨識與基準文件已完成，不重跑辨識，也不將舊全文開場當成新版驗收。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "a-switch",
          "kind": "task",
          "title": "正式切換與交付",
          "source_id": "A",
          "phase": 3,
          "phase_end": 3,
          "status": "hold",
          "deps": [
            "np-release",
            "a-implement"
          ],
          "note": "歷史／未重新派工；等安全前置＋實作",
          "summary": "歷史交辦（10/13 已重置，非現行待辦）：規則實作與安全前置齊備後，才可正式切換並交驗。",
          "next_step": "歷史交辦（10/13 已重置，非現行待辦）：等待兩項前置與原負責線放行。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "gb",
          "kind": "group",
          "title": "B Codex 專案歸檔",
          "note": "歷史交辦已重置；未重新派工。B 更新 prompt 已交；待 CC 回條"
        },
        {
          "id": "b-inventory-fact",
          "kind": "task",
          "title": "限定盤點（56 項）",
          "source_id": "b-inventory",
          "timing_source_id": "b-inventory",
          "phase": 0,
          "phase_end": 0,
          "status": "done",
          "deps": [],
          "note": "10/08 UTC 觀察",
          "summary": "",
          "next_step": "舊交辦已重置，未重新派工；僅保留歷史結果，不恢復舊待辦。",
          "nested": false
        },
        {
          "id": "b-plan",
          "kind": "task",
          "title": "盤點與批次準備",
          "source_id": "B",
          "phase": 0,
          "phase_end": 1,
          "status": "hold",
          "deps": [],
          "note": "歷史／未重新派工；使用者轉交 CC；尚無執行回條",
          "summary": "歷史交辦（10/13 已重置，非現行待辦）：子頁 B 更新分工已確定由使用者轉交 CC，完整 prompt 已交付；尚無 CC 收件、開跑或完成回條，不宣稱正在修改或已上線。原報告與勘誤均為 10/11，10/12 是合併交付日；65 項範圍、48 項歷史待決不是今日重掃，正式搬移未核結。",
          "next_step": "歷史交辦（10/13 已重置，非現行待辦）：等待 CC 回條；已交 prompt 限子頁 B 區段更新、備份與本機驗收，該次不 commit、push 或部署。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "bc-cloud-simulation-row",
          "kind": "task",
          "title": "B／C 雲端模擬",
          "source_id": "bc-cloud-simulation",
          "timing_source_id": "bc-cloud-simulation",
          "phase": 0,
          "phase_end": 0,
          "status": "done",
          "deps": [],
          "note": "原型完成；29 項及獨立複核通過",
          "summary": "",
          "next_step": "舊交辦已重置，未重新派工；僅保留歷史結果，不恢復舊待辦。",
          "nested": false
        },
        {
          "id": "b-copy",
          "kind": "task",
          "title": "複製與核對",
          "source_id": "B",
          "phase": 2,
          "phase_end": 2,
          "status": "hold",
          "deps": [
            "b-plan"
          ],
          "note": "歷史／未重新派工；試搬不等於正式核結",
          "summary": "歷史交辦（10/13 已重置，非現行待辦）：已有盤點／試搬回報；正式搬移與完整性核結仍待原負責線確認，本次不重查檔案。",
          "next_step": "歷史交辦（10/13 已重置，非現行待辦）：由原負責線區分盤點、試搬與正式搬移證據，按既有批次核對結案條件。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "b-deliver",
          "kind": "task",
          "title": "切換與交付",
          "source_id": "B",
          "phase": 3,
          "phase_end": 3,
          "status": "hold",
          "deps": [
            "b-copy"
          ],
          "note": "歷史／未重新派工；未切換",
          "summary": "歷史交辦（10/13 已重置，非現行待辦）：複製核對完成後，依已核範圍切換、驗證並交付。",
          "next_step": "歷史交辦（10/13 已重置，非現行待辦）：等待複製核對完成及個別切換核准。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "gc",
          "kind": "group",
          "title": "C skills 共用",
          "note": "2 專用版已交；stock-quote-refresh 未批准"
        },
        {
          "id": "c-inventory-fact",
          "kind": "task",
          "title": "主文件盤點（24 份）",
          "source_id": "c-inventory",
          "timing_source_id": "c-inventory",
          "phase": 0,
          "phase_end": 0,
          "status": "done",
          "deps": [],
          "note": "10/08 UTC 觀察",
          "summary": "",
          "next_step": "舊交辦已重置，未重新派工；僅保留歷史結果，不恢復舊待辦。",
          "nested": false
        },
        {
          "id": "c-plan",
          "kind": "task",
          "title": "技能與批次準備",
          "source_id": "C",
          "phase": 0,
          "phase_end": 1,
          "status": "done",
          "deps": [],
          "note": "29 項分類已長期保存；2 專用版已交",
          "summary": "29 項相容性核對已完成；原需專用版決策的 3 項中，cross-review、deep-research 已批准並交付，stock-quote-refresh 尚未批准。使用次數僅為明確斜線指令代理計數。 10/14 已新增長期分類與驗證紀錄，原 output 與備份保留；該文件不包含在本次甘特提交。",
          "next_step": "保留 cross-review 的驗證版本界線、deep-research 兩題研究流程結果及 C 長期分類紀錄；stock-quote-refresh 如需製作須另行批准。pending-plans-listing 已完成，不重跑。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "c-build",
          "kind": "task",
          "title": "建立完整套件",
          "source_id": "C",
          "phase": 2,
          "phase_end": 2,
          "status": "limited",
          "deps": [
            "c-plan"
          ],
          "note": "cross-review／deep-research 已交付",
          "summary": "cross-review、deep-research Codex 專用版及入口已完成；Claude 原版與相依保留。pending-plans-listing 共用入口已完成，不重跑。",
          "next_step": "保留 cross-review 的驗證版本界線、deep-research 兩題研究流程結果及 C 長期分類紀錄；stock-quote-refresh 如需製作須另行批准。pending-plans-listing 已完成，不重跑。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "c-deliver",
          "kind": "task",
          "title": "入口驗收與交付",
          "source_id": "C",
          "phase": 3,
          "phase_end": 3,
          "status": "limited",
          "deps": [
            "c-build"
          ],
          "note": "deep-research 兩題研究流程已實測",
          "summary": "cross-review Codex 專用版已交付，Codex 入口已改指專用版，Claude 原版及入口保留。最終 4307 bytes 版 frontmatter、連結、備份與 Claude 未變檢查通過；獨立新 session catalog 及兩個限制情境通過的是修訂前 4166 bytes 版，非實際跨模型或付費 API 測試。 deep-research 3611 bytes 專用版及 Codex 入口已交付；獨立新 session catalog、入口／內容身分及三項受限情境通過，Claude 原版及參照檔保留。10/14 已完成技能共用相容性與 Mac mini 檔案主機兩題實際研究流程及報告；僅驗研究流程，非雙產品同一技能實機相容性或 Mac 部署、權限、還原驗收。",
          "next_step": "保留 cross-review 的驗證版本界線、deep-research 兩題研究流程結果及 C 長期分類紀錄；stock-quote-refresh 如需製作須另行批准。pending-plans-listing 已完成，不重跑。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "gd",
          "kind": "group",
          "title": "D 整體驗收",
          "note": "歷史交辦已重置；未重新派工。真實工作回條接續核對；非整體 PASS"
        },
        {
          "id": "d-plan",
          "kind": "task",
          "title": "驗收準備",
          "source_id": "D",
          "phase": 0,
          "phase_end": 1,
          "status": "hold",
          "deps": [],
          "note": "歷史／未重新派工；Codex 實務已核；CC 回條待核",
          "summary": "歷史交辦（10/13 已重置，非現行待辦）：改以真實工作接續驗收：Codex C 唯讀核閱已完成，CC 既有子頁維護回條待核。既有五題分題通過結果保留；Q3、回報準確性、memory 歸因及 CLI 載入仍有缺口，不能宣稱整體 PASS。",
          "next_step": "歷史交辦（10/13 已重置，非現行待辦）：三視窗辨識與比對基準已完成並交付；同 main checkout 的舊全文開場不是新版驗收 PASS。CC 真實工作交付與其餘缺口仍待核。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "d-test",
          "kind": "task",
          "title": "整體驗收",
          "source_id": "D",
          "phase": 4,
          "phase_end": 4,
          "status": "hold",
          "deps": [
            "a-switch",
            "b-deliver",
            "c-deliver",
            "d-plan"
          ],
          "note": "歷史／未重新派工；等 A／B／C 同版交付",
          "summary": "歷史交辦（10/13 已重置，非現行待辦）：對同版 A／B／C 交付進行必要驗收，不重複計算已共用的分項證據。",
          "next_step": "歷史交辦（10/13 已重置，非現行待辦）：取得各項固定交付及相應測試核准。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "d-decision",
          "kind": "task",
          "title": "完成裁決",
          "source_id": "D",
          "phase": 5,
          "phase_end": 5,
          "status": "hold",
          "deps": [
            "d-test"
          ],
          "note": "歷史／未重新派工；尚無整體 PASS",
          "summary": "歷史交辦（10/13 已重置，非現行待辦）：驗收證據齊備後，彙整未完成事項、限制與完成裁決。",
          "next_step": "歷史交辦（10/13 已重置，非現行待辦）：等待整體驗收與殘留事項處置。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "gg",
          "kind": "group",
          "title": "共同計畫與審查",
          "note": "歷史交辦已重置；未重新派工。04 文書審完成；非工程完工"
        },
        {
          "id": "g-review",
          "kind": "task",
          "title": "03 版交叉審查",
          "source_id": "review",
          "phase": 0,
          "phase_end": 0,
          "status": "done",
          "deps": [],
          "note": "10/08 核定；3 項閉合",
          "summary": "",
          "next_step": "舊交辦已重置，未重新派工；僅保留歷史結果，不恢復舊待辦。",
          "nested": false,
          "timing_source_id": "review"
        },
        {
          "id": "g-revise",
          "kind": "task",
          "title": "04 版文字修訂",
          "source_id": "plans",
          "phase": 1,
          "phase_end": 1,
          "status": "done",
          "deps": [
            "g-review"
          ],
          "note": "10/08 完成；不需 r2",
          "summary": "",
          "next_step": "舊交辦已重置，未重新派工；僅保留歷史結果，不恢復舊待辦。",
          "nested": false,
          "timing_source_id": "plans"
        },
        {
          "id": "g-proposal05",
          "kind": "task",
          "title": "05 全項計畫提案",
          "source_id": "plan05",
          "timing_source_id": "plan05",
          "phase": 1,
          "phase_end": 1,
          "status": "hold",
          "deps": [],
          "note": "歷史／未重新派工；提案；尚未審查",
          "summary": "",
          "next_step": "舊交辦已重置，未重新派工；僅保留歷史結果，不恢復舊待辦。",
          "nested": false
        }
      ]
    },
    "documents": {
      "phases": [
        "分類報告",
        "人工審閱",
        "位置調整"
      ],
      "rows": [
        {
          "id": "docs-report",
          "kind": "task",
          "title": "分類報告",
          "source_id": "documents",
          "phase": 0,
          "phase_end": 0,
          "status": "done",
          "deps": [],
          "note": "10/08 分類基準：21 項",
          "summary": "歷史交辦（10/13 已重置，非現行待辦）：限定分類報告已交付；此報告本身為唯讀，後續目錄整併另列。",
          "next_step": "歷史交辦（10/13 已重置，非現行待辦）：後續變更逐項核對。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "docs-review",
          "kind": "task",
          "title": "人工審閱",
          "source_id": "documents",
          "phase": 1,
          "phase_end": 1,
          "status": "hold",
          "deps": [
            "docs-report"
          ],
          "note": "歷史／未重新派工；pending 延至 10/19 再看",
          "summary": "歷史交辦（10/13 已重置，非現行待辦）：使用者回報 CC 今早已盤點整理 pending，暫緩至 2026-10-19 再看，不列當下阻塞；pending-03 舊文件已交付。原目錄整併與保全紀錄、10/08 分類基準保留。",
          "next_step": "歷史交辦（10/13 已重置，非現行待辦）：2026-10-19 再看 pending；此前不列當下阻塞，也不將 pending-03 舊文件標為整份未交。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "docs-arrange",
          "kind": "task",
          "title": "其餘位置裁定",
          "source_id": "documents",
          "phase": 2,
          "phase_end": 2,
          "status": "hold",
          "deps": [
            "docs-review"
          ],
          "note": "歷史／未重新派工；目前不列 pending 阻塞",
          "summary": "歷史交辦（10/13 已重置，非現行待辦）：pending 今早已盤點整理（使用者回報）；暫緩至 10/19 再看。pending-03 舊文件已交付，剩餘事項不等於整份未交。",
          "next_step": "歷史交辦（10/13 已重置，非現行待辦）：2026-10-19 再看 pending；此前不列當下阻塞，也不將 pending-03 舊文件標為整份未交。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "docs-preserve",
          "kind": "task",
          "title": "必要長期資料保全",
          "source_id": "preservation",
          "timing_source_id": "preservation",
          "phase": 0,
          "phase_end": 0,
          "status": "done",
          "deps": [],
          "note": "必要保全已完成",
          "summary": "",
          "next_step": "舊交辦已重置，未重新派工；僅保留歷史結果，不恢復舊待辦。",
          "nested": false
        },
        {
          "id": "docs-consolidation-row",
          "kind": "task",
          "title": "計畫目錄整併",
          "source_id": "docs-consolidation",
          "timing_source_id": "docs-consolidation",
          "phase": 2,
          "phase_end": 2,
          "status": "done",
          "deps": [],
          "note": "69 → 28；5 固定＋1 活動",
          "summary": "",
          "next_step": "舊交辦已重置，未重新派工；僅保留歷史結果，不恢復舊待辦。",
          "nested": false
        }
      ]
    },
    "actual_rows": [
      {
        "source_id": "h1",
        "title": "①主體完成"
      },
      {
        "source_id": "h2",
        "title": "②主體完成"
      },
      {
        "source_id": "h2-6a",
        "title": "②6a 服務恢復確認"
      },
      {
        "source_id": "h2-v5-run",
        "title": "②自然晨報執行"
      },
      {
        "source_id": "h2-v5-pass",
        "title": "②V5／6b PASS 判定"
      },
      {
        "source_id": "h2-confirm-notice",
        "title": "②CC 確認／五線通告"
      },
      {
        "source_id": "h2-step8-inventory",
        "title": "②步8 限定盤點交付"
      },
      {
        "source_id": "h2-step8-review",
        "title": "②步8 最早評估"
      },
      {
        "source_id": "m7m1",
        "title": "NP M7／M1 限定核證"
      },
      {
        "source_id": "m3s0",
        "title": "NP M3／S0 限定結果"
      },
      {
        "source_id": "preact",
        "title": "NP PREACT dry-run"
      },
      {
        "source_id": "b-inventory",
        "title": "B 限定盤點"
      },
      {
        "source_id": "c-inventory",
        "title": "C 主文件盤點"
      },
      {
        "source_id": "review",
        "title": "03 審查／04 增量核"
      },
      {
        "source_id": "plans",
        "title": "04 計畫文書"
      },
      {
        "source_id": "docs-consolidation",
        "title": "計畫目錄整併"
      },
      {
        "source_id": "a-rule-inventory",
        "title": "A 四象限規則盤點"
      },
      {
        "source_id": "np-verifier64",
        "title": "64 案離線範圍驗證"
      },
      {
        "source_id": "np-session-prepare",
        "title": "NP 新工作階段準備"
      },
      {
        "source_id": "bc-cloud-simulation",
        "title": "B／C 雲端模擬"
      },
      {
        "source_id": "preservation",
        "title": "必要長期資料保全"
      }
    ]
  }
};
