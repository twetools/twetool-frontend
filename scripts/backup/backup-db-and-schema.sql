-- DEPRECATED: This script is disabled to prevent accidental execution of sp_generate_inserts or data scripting.
-- All backup logic is now handled by PowerShell/SMO in backup-db-and-data.ps1.
-- Do not use this script.
    WHERE s.name + '.' + t.name = @table;

    EXEC sp_executesql @insertSQL;
    FETCH NEXT FROM table_cursor INTO @table;
END
CLOSE table_cursor;
DEALLOCATE table_cursor;
GO
